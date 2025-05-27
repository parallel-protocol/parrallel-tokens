import assert from "assert";

import { type DeployFunction } from "hardhat-deploy/types";

import { ConfigData } from "../utils/types";
import { readFileSync } from "fs-extra";
import { getWalletAddressFromConfig } from "../utils";

import { BridgeableTokenP } from "../../typechain-types/contracts/tokens/BridgeableTokenP";

const contractName = "BridgeableTokenP";

const token = "USDp";

const deploy: DeployFunction = async (hre) => {
  const { getNamedAccounts, deployments } = hre;

  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();

  assert(deployer, "Missing named deployer account");

  console.log(`Network: ${hre.network.name}`);
  console.log(`Deployer: ${deployer}`);

  const config: ConfigData = JSON.parse(
    readFileSync(`./deploy/config/${hre.network.name}/config.json`).toString(),
  );

  const bridgeableTokenPConfig =
    config.bridgeableTokenP[
      token.toLowerCase() as keyof typeof config.bridgeableTokenP
    ];

  if (!bridgeableTokenPConfig) {
    throw new Error(`BridgeableTokenP config not found for token: ${token}`);
  }

  const configParams: BridgeableTokenP.ConfigParamsStruct = {
    dailyCreditLimit: bridgeableTokenPConfig.dailyCreditLimit,
    globalCreditLimit: bridgeableTokenPConfig.globalCreditLimit,
    dailyDebitLimit: bridgeableTokenPConfig.dailyDebitLimit,
    globalDebitLimit: bridgeableTokenPConfig.globalDebitLimit,
    feesRecipient: getWalletAddressFromConfig(
      bridgeableTokenPConfig.feesRecipient,
      config,
    ),
    feesRate: bridgeableTokenPConfig.feesRate,
    isIsolateMode: bridgeableTokenPConfig.isIsolateMode,
  };

  console.log(`Deploying ${contractName}_${token}...`);
  const endpointV2Deployment = await hre.deployments.get("EndpointV2");
  const principalTokenDeployment = await hre.deployments.get(
    `TokenP_${bridgeableTokenPConfig.principalToken}`,
  );

  const bridgeableTokenP = await deploy(`${contractName}_${token}`, {
    contract: contractName,
    from: deployer,
    args: [
      bridgeableTokenPConfig.lzName,
      bridgeableTokenPConfig.lzSymbol,
      principalTokenDeployment.address,
      endpointV2Deployment.address,
      deployer,
      configParams,
    ],
    log: true,
    skipIfAlreadyDeployed: false,
  });

  console.log(
    `Deployed contract: ${contractName}_${token}, network: ${hre.network.name}, address: ${bridgeableTokenP.address}`,
  );
};

deploy.tags = [contractName];

export default deploy;
