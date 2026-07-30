import assert from "assert";
import { deployScript, artifacts } from "@rocketh";

import { ConfigData } from "../utils/types";
import { readFileSync } from "fs";
import { checkAddressValid } from "../utils";

const contractName = "TokenP";

const token = "USDp";

export default deployScript(
  async ({ namedAccounts, name: networkName, deployViaProxy }) => {
    const { deployer } = namedAccounts;
    const chainName = networkName;

    assert(deployer, "Missing named deployer account");
    console.log(
      `Network: ${chainName} \nDeployer: ${deployer} \nDeploying: ${contractName}`,
    );

    const config: ConfigData = JSON.parse(
      readFileSync(`./deploy/config/${chainName}/config.json`).toString(),
    );

    const { name, symbol } =
      config.tokens[token.toLowerCase() as keyof typeof config.tokens];
    if (!name || !symbol) throw new Error(`Token ${token} not found in config`);

    const accessManager = checkAddressValid(
      config.accessManager,
      "access manager",
    );

    console.log(`Deploying ${contractName}_${token}...`);

    const args = [name, symbol, accessManager];

    const tokenP = await deployViaProxy(
      `${contractName}_${token}`,
      {
        account: deployer,
        artifact: artifacts.TokenP as any,
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
      `Deployed contract: ${contractName}_${token}, network: ${chainName}, address: ${tokenP.address}`,
    );
  },
  {
    tags: [contractName],
  },
);
