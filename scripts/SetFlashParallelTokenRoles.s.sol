// SPDX-License-Identifier: MIT
pragma solidity 0.8.28;

import "./Base.s.sol";
import { UUPSUpgradeable } from "@openzeppelin/contracts/proxy/utils/UUPSUpgradeable.sol";

import { FlashParallelToken } from "contracts/flashloan/FlashParallelToken.sol";

contract SetFlashParallelTokenRoles is BaseScript {
    address flashParallelToken = 0xFB545bA71f0083ec8BAb965b7FdB9a88E4093e07;

    function run() public broadcast {
        bytes4[] memory governorSelectors = new bytes4[](4);
        governorSelectors[0] = FlashParallelToken.setFlashLoanParameters.selector;
        governorSelectors[1] = FlashParallelToken.toggleActiveToken.selector;
        governorSelectors[2] = FlashParallelToken.setFlashLoanFeeRecipient.selector;    
        governorSelectors[3] = UUPSUpgradeable.upgradeToAndCall.selector;
        accessManager.setTargetFunctionRole(flashParallelToken, governorSelectors, Roles.GOVERNOR_ROLE);

        accessManager.grantRole(Roles.USDp_MINTER_ROLE, address(flashParallelToken), 0);
    }
}
