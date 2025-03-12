// SPDX-License-Identifier: GPL-3.0
pragma solidity 0.8.28;

import {UUPSUpgradeable} from "@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol";
import {AccessManagedUpgradeable} from "@openzeppelin/contracts-upgradeable/access/manager/AccessManagedUpgradeable.sol";
import {ReentrancyGuardTransientUpgradeable} from "@openzeppelin/contracts-upgradeable/utils/ReentrancyGuardTransientUpgradeable.sol";
import {IERC3156FlashBorrower} from "@openzeppelin/contracts/interfaces/IERC3156FlashBorrower.sol";
import {IERC3156FlashLender} from "@openzeppelin/contracts/interfaces/IERC3156FlashLender.sol";
import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import {SafeERC20} from "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";

import {ITokenP} from "../interfaces/ITokenP.sol";
import {CommonErrorsLib} from "../libraries/CommonErrorsLib.sol";

/// @title FlashParallelTokens
/// @author Cooper Labs
/// @custom:contact security@cooperlabs.xyz
/// @notice Contract to take flash loans on top of Parallel Tokens
contract FlashParallelTokens is
    IERC3156FlashLender,
    AccessManagedUpgradeable,
    ReentrancyGuardTransientUpgradeable,
    UUPSUpgradeable
{
    using SafeERC20 for IERC20;

    /// @notice Base used for parameter computation
    uint256 public constant BASE_PARAMS = 10 ** 9;

    /// @notice Success message received when calling a `FlashBorrower` contract
    bytes32 public constant CALLBACK_SUCCESS = keccak256("ERC3156FlashBorrower.onFlashLoan");

    /// @notice Struct encoding for a given token the parameters
    struct tokenData {
        // Maximum amount borrowable for this token
        uint256 maxBorrowable;
        // Flash loan fee taken by the protocol for a flash loan on this token
        uint64 flashLoanFee;
        // Whether the token flash loan is active
        bool isActive;
    }

    /// @notice Address of the recipient of the flash loan fee
    address public flashLoanFeeRecipient;

    // ======================= Parameters and References ===========================

    /// @notice Maps a token to the data and parameters for flash loans
    mapping(address => tokenData) public tokenMap;

    // =============================== Event =======================================

    event FlashLoan(address token, uint256 amount, IERC3156FlashBorrower receiver);
    event FlashLoanParametersUpdated(address token, uint64 _flashLoanFee, uint256 _maxBorrowable, bool _isActive);
    event ActivetokenToggled(address token, bool _isActive);

    // =============================== Errors ======================================

    error InvalidReturnMessage();
    error TooBigAmount();
    error TooHighParameterValue();
    error Unsupportedtoken();

    /// @custom:oz-upgrades-unsafe-allow constructor
    constructor() initializer {}

    /// @notice Initializes the contract
    /// @param _accessManager Access manager address
    function initialize(address _accessManager, address _flashLoanFeeRecipient) public initializer {
        if (address(_accessManager) == address(0)) revert CommonErrorsLib.AddressZero();
        if (address(_flashLoanFeeRecipient) == address(0)) revert CommonErrorsLib.AddressZero();
        __UUPSUpgradeable_init();
        __ReentrancyGuardTransient_init();
        __AccessManaged_init(_accessManager);
        flashLoanFeeRecipient = _flashLoanFeeRecipient;
    }

    // =================================== Modifiers ===============================

    /// @notice Checks whether a given token has been initialized in this contract
    /// @param token token to check
    /// @dev To check whether a token has been initialized, we just need to check whether its associated
    /// `treasury` address is not null in the `tokenMap`. This is what's checked in the `CoreBorrow` contract
    /// when adding support for a token
    modifier onlyActivetoken(address token) {
        require(tokenMap[token].isActive, Unsupportedtoken());
        _;
    }

    // ================================ ERC3156 Spec ===============================

    /// @inheritdoc IERC3156FlashLender
    function flashFee(address token, uint256 amount) external view returns (uint256) {
        return _flashFee(token, amount);
    }

    /// @inheritdoc IERC3156FlashLender
    function maxFlashLoan(address token) external view returns (uint256) {
        // It will be 0 anyway if the token was not added
        return tokenMap[token].maxBorrowable;
    }

    /// @inheritdoc IERC3156FlashLender
    function flashLoan(
        IERC3156FlashBorrower receiver,
        address token,
        uint256 amount,
        bytes calldata data
    ) external nonReentrant onlyActivetoken(token) returns (bool) {
        uint256 fee = _flashFee(token, amount);
        if (amount > tokenMap[token].maxBorrowable) revert TooBigAmount();
        ITokenP(token).mint(address(receiver), amount);
        if (receiver.onFlashLoan(msg.sender, token, amount, fee, data) != CALLBACK_SUCCESS)
            revert InvalidReturnMessage();
        // Token must be an TokenP here so normally no need to use `safeTransferFrom`, but out of safety
        // and in case governance whitelists an TokenP which does not have a correct implementation, we prefer
        // to use `safeTransferFrom` here
        IERC20(token).safeTransferFrom(address(receiver), address(this), amount + fee);
        ITokenP(token).burnSelf(amount, address(this));
        emit FlashLoan(token, amount, receiver);
        return true;
    }

    /// @notice Internal function to compute the fee induced for taking a flash loan of `amount` of `token`
    /// @param token The loan currency
    /// @param amount The amount of tokens lent
    /// @dev This function will revert if the `token` requested is not whitelisted here
    function _flashFee(address token, uint256 amount) internal view returns (uint256) {
        return (amount * tokenMap[token].flashLoanFee) / BASE_PARAMS;
    }

    // ============================ Treasury Only Function =========================

    /// @notice Accrues interest to the fee recipient for a given list of tokens
    /// @param tokens List of addresses of tokens to accrue interest for
    /// @return balance Amount of interest accrued
    function accrueInterestToFeeRecipient(address[] calldata tokens) external returns (uint256 balance) {
        for (uint256 i = 0; i < tokens.length; i++) {
            IERC20 token = IERC20(tokens[i]);
            balance += token.balanceOf(address(this));
            token.safeTransfer(flashLoanFeeRecipient, balance);
        }
    }

    // =========================== Governance Only Function ========================

    /// @notice Sets the parameters for a given token
    /// @param _token token to change the parameters for
    /// @param _flashLoanFee New flash loan fee for this token
    /// @param _maxBorrowable Maximum amount that can be borrowed in a single flash loan
    /// @dev Setting a `maxBorrowable` parameter equal to 0 is a way to pause the functionality
    /// @dev Parameters can only be modified for whitelisted tokens
    function setFlashLoanParameters(
        address _token,
        uint64 _flashLoanFee,
        uint256 _maxBorrowable,
        bool _isActive
    ) external restricted {
        if (_flashLoanFee > BASE_PARAMS) revert TooHighParameterValue();
        tokenMap[_token] = tokenData({
            flashLoanFee: _flashLoanFee,
            maxBorrowable: _maxBorrowable,
            isActive: _isActive
        });
        emit FlashLoanParametersUpdated(_token, _flashLoanFee, _maxBorrowable, _isActive);
    }

    /// @notice Toggles the active status of a given token
    /// @param _token token to toggle the active status for
    function toggleActivetoken(address _token) external restricted {
        tokenMap[_token].isActive = !tokenMap[_token].isActive;
        emit ActivetokenToggled(_token, tokenMap[_token].isActive);
    }

    function _authorizeUpgrade(address newImplementation) internal virtual override restricted {}
}
