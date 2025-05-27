// SPDX-License-Identifier: MIT
pragma solidity 0.8.28;

import "./Base.s.sol";
import { UUPSUpgradeable } from "@openzeppelin/contracts/proxy/utils/UUPSUpgradeable.sol";

import { TokenP } from "contracts/tokens/TokenP/TokenP.sol";

contract SetTokenPRoles is BaseScript {
    address tokenP = 0xA8FE9843B4Cc2aAB136209B49E2c3E2A7ebD5CFA;

    function run() public broadcast {
        bytes4[] memory minterSelectors = new bytes4[](3);
        minterSelectors[0] = TokenP.mint.selector;
        minterSelectors[1] = TokenP.burnSelf.selector;
        minterSelectors[2] = TokenP.burnFrom.selector;
        accessManager.setTargetFunctionRole(tokenP, minterSelectors, Roles.USDp_MINTER_ROLE);

        bytes4[] memory governorSelectors = new bytes4[](1);
        governorSelectors[0] = UUPSUpgradeable.upgradeToAndCall.selector;
        accessManager.setTargetFunctionRole(tokenP, governorSelectors, Roles.GOVERNOR_ROLE);
    }
}
