// SPDX-License-Identifier: MIT
pragma solidity 0.8.28;

/// @title IEIP3009
/// @notice Interface for EIP-3009: Transfer With Authorization
interface IEIP3009 {
    /// @notice Execute a transfer with a signed authorization (EOA signature)
    function transferWithAuthorization(
        address from,
        address to,
        uint256 value,
        uint256 validAfter,
        uint256 validBefore,
        bytes32 nonce,
        uint8 v,
        bytes32 r,
        bytes32 s
    ) external;

    /// @notice Execute a transfer with a signed authorization (EIP-1271 compatible)
    function transferWithAuthorization(
        address from,
        address to,
        uint256 value,
        uint256 validAfter,
        uint256 validBefore,
        bytes32 nonce,
        bytes calldata signature
    ) external;

    /// @notice Receive a transfer with a signed authorization (EOA signature)
    /// @dev The caller must be the payee (`to` address)
    function receiveWithAuthorization(
        address from,
        address to,
        uint256 value,
        uint256 validAfter,
        uint256 validBefore,
        bytes32 nonce,
        uint8 v,
        bytes32 r,
        bytes32 s
    ) external;

    /// @notice Receive a transfer with a signed authorization (EIP-1271 compatible)
    /// @dev The caller must be the payee (`to` address)
    function receiveWithAuthorization(
        address from,
        address to,
        uint256 value,
        uint256 validAfter,
        uint256 validBefore,
        bytes32 nonce,
        bytes calldata signature
    ) external;

    /// @notice Cancel an authorization (EOA signature)
    function cancelAuthorization(address authorizer, bytes32 nonce, uint8 v, bytes32 r, bytes32 s) external;

    /// @notice Cancel an authorization (EIP-1271 compatible)
    function cancelAuthorization(address authorizer, bytes32 nonce, bytes calldata signature) external;

    /// @notice Returns the state of an authorization
    /// @param authorizer Authorizer's address
    /// @param nonce Nonce of the authorization
    /// @return true if the nonce is used
    function authorizationState(address authorizer, bytes32 nonce) external view returns (bool);
}
