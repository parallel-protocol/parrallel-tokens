import assert from "assert";
import { deployScript, artifacts } from "@rocketh";

import { ConfigData } from "../utils/types";
import { readFileSync } from "fs";
import { checkAddressValid, getWalletAddressFromConfig } from "../utils";

const contractName = "FlashParallelToken";

export default deployScript(
  async ({ namedAccounts, network, deployViaProxy }) => {
    const { deployer } = namedAccounts;
    const chainName = network.name.toLowerCase();
    assert(deployer, "Missing named deployer account");
    console.log(
      `Network: ${chainName} \nDeployer: ${deployer} \nDeploying: ${contractName}`,
    );

    const config: ConfigData = JSON.parse(
      readFileSync(`./deploy/config/${chainName}/config.json`).toString(),
    );

    const accessManager = checkAddressValid(
      config.accessManager,
      "access manager",
    );

    const flashLoanFeeRecipient = getWalletAddressFromConfig(
      config.flashParallelToken.feeRecipient,
      config,
    );

    console.log(`Deploying ${contractName}...`);

    const args = [accessManager, flashLoanFeeRecipient];

    const flashParallelToken = await deployViaProxy(
      `${contractName}`,
      {
        account: deployer,
        artifact: artifacts.FlashParallelToken as any,
      },
      {
        proxyContract: "UUPS",
        execute: {
          methodName: "initialize",
          args,
        },
        linkedData: {
          args,
        },
      },
    );

    console.log(
      `Deployed contract: ${contractName}, network: ${chainName}, address: ${flashParallelToken.address}`,
    );
  },
  {
    tags: [contractName],
  },
);
