import assert from "assert";
import { deployScript, artifacts } from "@rocketh";

import { ConfigData } from "../utils/types";
import { readFileSync } from "fs";
import { checkAddressValid, getWalletAddressFromConfig } from "../utils";

const contractName = "FlashParallelToken";

export default deployScript(
  async ({
    namedAccounts,
    name: networkName,
    network,
    deployViaProxy,
    viem,
    get,
  }) => {
    const { deployer } = namedAccounts;
    const chainName = networkName;
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

    const principalTokenDeployment = get(`TokenP_USDp`);

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

    await viem.walletClient.writeContract({
      chain: network.chain,
      account: deployer,
      address: flashParallelToken.address,
      abi: artifacts.FlashParallelToken.abi,
      functionName: "setFlashLoanParameters",
      args: [
        principalTokenDeployment.address,
        0,
        100000000000000000000000n,
        true,
      ],
    });

    console.log(
      `Deployed contract: ${contractName}, network: ${chainName}, address: ${flashParallelToken.address}`,
    );
  },
  {
    tags: [contractName],
  },
);
