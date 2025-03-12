// SPDX-License-Identifier: GPL-3.0
pragma solidity 0.8.28;

import {AccessManagedUpgradeable} from "@openzeppelin/contracts-upgradeable/access/manager/AccessManagedUpgradeable.sol";
import {ERC20PermitUpgradeable} from "@openzeppelin/contracts-upgradeable/token/ERC20/extensions/ERC20PermitUpgradeable.sol";
import {UUPSUpgradeable} from "@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol";

import {ITokenP, IERC20Permit} from "contracts/interfaces/ITokenP.sol";
import {CommonErrorsLib } from "contracts/libraries/CommonErrorsLib.sol";


import {TokenP_EventsLib as EventsLib} from "./EventsLib.sol";
import {TokenP_ErrorsLib as ErrorsLib} from "./ErrorsLib.sol";


/// @title TokenP
/// @author Cooper Labs
/// @custom:contact security@cooperlabs.xyz
/// @notice Base contract for Parallel Tokens (TokenP)
/// @dev By default, TokenP are ERC-20 tokens with 18 decimals
contract TokenP is ITokenP, ERC20PermitUpgradeable, AccessManagedUpgradeable, UUPSUpgradeable {
    //-------------------------------------------
    // Storage
    //-------------------------------------------

    /// @notice Mapping of addresses that are allowed to mint
    mapping(address => bool) public isMinter;

    /// @notice Gap for future upgrades
    uint256[48] private __gap;

    //-------------------------------------------
    // Constructor
    //-------------------------------------------

    /// @custom:oz-upgrades-unsafe-allow constructor
    constructor() initializer {}

    /// @notice Initializes the contract
    function initialize(string memory name_, string memory symbol_, address _accessManager) external initializer {
        require(_accessManager != address(0), CommonErrorsLib.AddressZero());
        __UUPSUpgradeable_init();
        __ERC20Permit_init(name_);
        __ERC20_init(name_, symbol_);
        __AccessManaged_init(_accessManager);
    }

    //-------------------------------------------
    // Modifiers
    //-------------------------------------------

    /// @notice Checks whether the sender has the minting right
    modifier onlyMinter() {
        if (!isMinter[msg.sender]) revert ErrorsLib.NotMinter();
        _;
    }

    //-------------------------------------------
    // External functions
    //-------------------------------------------

    /// @notice Allows anyone to burn stablecoins
    /// @param amount Amount of stablecoins to burn
    /// @dev This function can typically be called if there is a settlement mechanism to burn stablecoins
    function burnStablecoin(uint256 amount) external {
        _burn(msg.sender, amount);
    }

    //-------------------------------------------
    // Minter role only functions
    //-------------------------------------------

    /// @inheritdoc ITokenP
    function burnSelf(uint256 amount, address burner) external onlyMinter {
        _burn(burner, amount);
    }

    /// @inheritdoc ITokenP
    function burnFrom(uint256 amount, address burner, address sender) external onlyMinter {
        if (burner != sender) {
            uint256 currentAllowance = allowance(burner, sender);
            if (currentAllowance < amount) revert ErrorsLib.BurnAmountExceedsAllowance();
            _approve(burner, sender, currentAllowance - amount);
        }
        _burn(burner, amount);
    }

    /// @inheritdoc ITokenP
    function mint(address account, uint256 amount) external onlyMinter {
        _mint(account, amount);
    }

    //-------------------------------------------
    // Restricted functions
    //-------------------------------------------

    /// @inheritdoc ITokenP
    function addMinter(address minter) external restricted {
        isMinter[minter] = true;
        emit EventsLib.MinterToggled(minter);
    }

    /// @inheritdoc ITokenP
    function removeMinter(address minter) external restricted {
        isMinter[minter] = false;
        emit EventsLib.MinterToggled(minter);
    }

    /// @inheritdoc UUPSUpgradeable
    function _authorizeUpgrade(address newImplementation) internal virtual override restricted {}

    //-------------------------------------------
    // Overrides functions
    //-------------------------------------------

    /// @inheritdoc ERC20PermitUpgradeable
    function nonces(address owner) public view virtual override(ERC20PermitUpgradeable, IERC20Permit) returns (uint256) {
        return super.nonces(owner);
    }

}
