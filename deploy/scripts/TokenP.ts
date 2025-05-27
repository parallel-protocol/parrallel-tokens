import assert from "assert";

import { type DeployFunction } from "hardhat-deploy/types";

import { ConfigData } from "../utils/types";
import { readFileSync } from "fs-extra";
import { checkAddressValid } from "../utils";

const contractName = "TokenP";

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

  const { name, symbol } =
    config.tokens[token.toLowerCase() as keyof typeof config.tokens];
  if (!name || !symbol) throw new Error(`Token ${token} not found in config`);

  const accessManager = checkAddressValid(
    config.accessManager,
    "access manager",
  );

  console.log(`Deploying ${contractName}_${token}...`);

  const tokenP = await deploy(`${contractName}_${token}`, {
    contract: contractName,
    from: deployer,
    proxy: {
      proxyContract: "UUPS",
      execute: {
        methodName: "initialize",
        args: [name, symbol, accessManager],
      },
    },
    log: true,
    skipIfAlreadyDeployed: false,
  });

  console.log(
    `Deployed contract: ${contractName}_${token}, network: ${hre.network.name}, address: ${tokenP.address}`,
  );
};

deploy.tags = [contractName];

export default deploy;
