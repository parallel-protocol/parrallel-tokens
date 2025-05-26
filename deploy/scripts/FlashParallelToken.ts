import assert from "assert";

import { type DeployFunction } from "hardhat-deploy/types";

import { ConfigData } from "../utils/types";
import { readFileSync } from "fs-extra";
import { checkAddressValid, getWalletAddressFromConfig } from "../utils";

const contractName = "FlashParallelToken";

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

  const accessManager = checkAddressValid(
    config.accessManager,
    "access manager",
  );

  const flashLoanFeeRecipient = getWalletAddressFromConfig(
    config.flashParallelToken.feeRecipient,
    config,
  );

  console.log(`Deploying ${contractName}...`);

  const flashParallelToken = await deploy(contractName, {
    from: deployer,
    proxy: {
      proxyContract: "UUPS",
      execute: {
        methodName: "initialize",
        args: [accessManager, flashLoanFeeRecipient],
      },
    },
    log: true,
    skipIfAlreadyDeployed: false,
  });

  console.log(
    `Deployed contract: ${contractName}, network: ${hre.network.name}, address: ${flashParallelToken.address}`,
  );
};

deploy.tags = [contractName];

export default deploy;
