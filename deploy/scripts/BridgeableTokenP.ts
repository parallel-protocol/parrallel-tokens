import assert from "assert";
import { deployScript, artifacts } from "@rocketh";

import { Address, ConfigData } from "../utils/types";
import { readFileSync } from "fs";
import {
  getWalletAddressFromConfig,
  parseBridgeableTokenPConfig,
} from "../utils";

const contractName = "BridgeableTokenP";

const token = "USDp";

export default deployScript(
  async ({ namedAccounts, network, deploy, get }) => {
    const { deployer } = namedAccounts;
    const chainName = network.name.toLowerCase();
    assert(deployer, "Missing named deployer account");
    console.log(
      `Network: ${chainName} \nDeployer: ${deployer} \nDeploying: ${contractName}`,
    );
    const config: ConfigData = JSON.parse(
      readFileSync(`./deploy/config/${chainName}/config.json`).toString(),
    );

    const bridgeableTokenPConfig =
      config.bridgeableTokenP[
        token.toLowerCase() as keyof typeof config.bridgeableTokenP
      ];

    if (!bridgeableTokenPConfig) {
      throw new Error(`BridgeableTokenP config not found for token: ${token}`);
    }

    const {
      dailyCreditLimit,
      globalCreditLimit,
      dailyDebitLimit,
      globalDebitLimit,
      feesRecipient,
      feesRate,
      isIsolateMode,
    } = parseBridgeableTokenPConfig(bridgeableTokenPConfig);
    const configParams = {
      dailyCreditLimit,
      globalCreditLimit,
      dailyDebitLimit,
      globalDebitLimit,
      feesRecipient: getWalletAddressFromConfig(feesRecipient, config),
      feesRate,
      isIsolateMode,
    };

    console.log(`Deploying ${contractName}_${token}...`);
    const endpointV2Deployment = get("EndpointV2");

    const principalTokenDeployment = get(
      `TokenP_${bridgeableTokenPConfig.principalToken}`,
    );

    const args: [
      string,
      string,
      Address,
      Address,
      Address,
      typeof configParams,
    ] = [
      bridgeableTokenPConfig.lzName,
      bridgeableTokenPConfig.lzSymbol,
      principalTokenDeployment.address,
      endpointV2Deployment.address,
      deployer,
      configParams,
    ];

    const bridgeableTokenP = await deploy(
      `${contractName}_${token}`,
      {
        artifact: artifacts.BridgeableTokenP,
        account: deployer,
        args,
      },
      {
        linkedData: {
          args,
        },
      },
    );

    console.log(
      `Deployed contract: ${contractName}_${token}, network: ${chainName}, address: ${bridgeableTokenP.address}`,
    );
  },
  {
    tags: [contractName],
  },
);
