import "dotenv/config";

import "hardhat-deploy";
import "@typechain/hardhat";

import {
  HardhatUserConfig,
  HttpNetworkAccountsUserConfig,
} from "hardhat/types";

import "@layerzerolabs/toolbox-hardhat";

import { EndpointId } from "@layerzerolabs/lz-definitions";
import { getRpcURL } from "./utils/getRpcURL";
import { getVerifyConfig } from "./utils/getVerifyConfig";

const PRIVATE_KEY = process.env.PRIVATE_KEY;

if (!PRIVATE_KEY) {
  throw new Error(
    "Could not find PRIVATE_KEY environment variables. It will not be possible to execute transactions in your example.",
  );
}
const accounts: HttpNetworkAccountsUserConfig | undefined = [PRIVATE_KEY];

const config: HardhatUserConfig = {
  solidity: {
    compilers: [
      {
        version: "0.8.28",
        settings: {
          evmVersion: "cancun",
          optimizer: {
            enabled: true,
            runs: 10_000,
          },
        },
      },
    ],
  },
  networks: {
    mainnet: {
      eid: EndpointId.ETHEREUM_V2_MAINNET,
      url: getRpcURL("mainnet"),
      accounts,
      verify: getVerifyConfig("mainnet"),
    },
    sepolia: {
      eid: EndpointId.SEPOLIA_V2_TESTNET,
      url: getRpcURL("sepolia"),
      verify: getVerifyConfig("sepolia"),
      accounts,
    },
    polygon: {
      eid: EndpointId.POLYGON_V2_MAINNET,
      url: getRpcURL("polygon"),
      verify: getVerifyConfig("polygon"),
      accounts,
    },
    amoy: {
      eid: EndpointId.AMOY_V2_TESTNET,
      url: getRpcURL("amoy"),
      verify: getVerifyConfig("amoy"),
      accounts,
    },
    arbiSepolia: {
      eid: EndpointId.ARBSEP_V2_TESTNET,
      url: getRpcURL("arbiSepolia"),
      verify: getVerifyConfig("arbiSepolia"),
      accounts,
    },
    optimism: {
      eid: EndpointId.OPTIMISM_V2_MAINNET,
      url: getRpcURL("optimism"),
      verify: getVerifyConfig("optimism"),
      accounts,
    },
    base: {
      eid: EndpointId.BASE_V2_MAINNET,
      url: getRpcURL("base"),
      verify: getVerifyConfig("base"),
      accounts,
    },
    arbitrum: {
      eid: EndpointId.ARBITRUM_V2_MAINNET,
      url: getRpcURL("arbitrum"),
      verify: getVerifyConfig("arbitrum"),
      accounts,
    },
    sonic: {
      eid: EndpointId.SONIC_V2_MAINNET,
      url: getRpcURL("sonic"),
      verify: getVerifyConfig("sonic"),
      accounts,
    },
    sei: {
      eid: EndpointId.SEI_V2_MAINNET,
      url: getRpcURL("sei"),
      verify: getVerifyConfig("sei"),
      accounts,
    },
    avalanche: {
      eid: EndpointId.AVALANCHE_V2_MAINNET,
      url: getRpcURL("avalanche"),
      verify: getVerifyConfig("avalanche"),
      accounts,
    },
    bsc: {
      eid: EndpointId.BSC_V2_MAINNET,
      url: getRpcURL("bsc"),
      verify: getVerifyConfig("bsc"),
      accounts,
    },
    berachain: {
      eid: EndpointId.BERA_V2_MAINNET,
      url: getRpcURL("berachain"),
      verify: getVerifyConfig("berachain"),
      accounts,
    },
    scroll: {
      eid: EndpointId.SCROLL_V2_MAINNET,
      url: getRpcURL("scroll"),
      verify: getVerifyConfig("scroll"),
      accounts,
    },
    mantle: {
      eid: EndpointId.MANTLE_V2_MAINNET,
      url: getRpcURL("mantle"),
      verify: getVerifyConfig("mantle"),
      accounts,
    },
    gnosis: {
      eid: EndpointId.GNOSIS_V2_MAINNET,
      url: getRpcURL("gnosis"),
      verify: getVerifyConfig("gnosis"),
      accounts,
    },
    unichain: {
      eid: EndpointId.UNICHAIN_V2_MAINNET,
      url: getRpcURL("unichain"),
      verify: getVerifyConfig("unichain"),
      accounts,
    },
    ink: {
      eid: EndpointId.INK_V2_MAINNET,
      url: getRpcURL("ink"),
      verify: getVerifyConfig("ink"),
      accounts,
    },
    hyperevm: {
      eid: EndpointId.HYPERLIQUID_V2_MAINNET,
      url: getRpcURL("hyperevm"),
      verify: getVerifyConfig("hyperevm"),
      accounts,
    },
  },
  namedAccounts: {
    deployer: {
      default: 0,
    },
  },
};

export default config;
