import {
  TwoWayConfig,
  generateConnectionsConfig,
} from "@layerzerolabs/metadata-tools";

import {
  EVM_ENFORCED_OPTIONS,
  DVNs,
  CONFIRMATIONS_BLOCKS,
  NETWORKS,
} from "./utils/constants";
import { contracts } from "./utils/contracts";
import { Network } from "./utils/types";
import { OmniPointHardhat } from "@layerzerolabs/toolbox-hardhat";

const SELECTED_NETWORKS: Network[] = [
  NETWORKS.ARBITRUM,
  NETWORKS.AVALANCHE,
  NETWORKS.BASE,
  NETWORKS.BERACHAIN,
  NETWORKS.BSC,
  NETWORKS.GNOSIS,
  NETWORKS.HYPERLIQUID,
  NETWORKS.INK,
  NETWORKS.MAINNET,
  NETWORKS.OPTIMISM,
  NETWORKS.POLYGON,
  NETWORKS.SCROLL,
  NETWORKS.SEI,
  NETWORKS.SONIC,
  NETWORKS.TAC,
  NETWORKS.UNICHAIN,
];

const generatePathConfig = (chainA: Network, chainB: Network): TwoWayConfig => {
  return [
    contracts[chainA],
    contracts[chainB],
    DVNs,
    [CONFIRMATIONS_BLOCKS[chainA], CONFIRMATIONS_BLOCKS[chainB]],
    [EVM_ENFORCED_OPTIONS, EVM_ENFORCED_OPTIONS],
  ];
};

const generatePathways = (): TwoWayConfig[] => {
  const pathways: TwoWayConfig[] = [];

  for (let i = 0; i < SELECTED_NETWORKS.length; i++) {
    for (let j = i + 1; j < SELECTED_NETWORKS.length; j++) {
      const chainA = SELECTED_NETWORKS[i];
      const chainB = SELECTED_NETWORKS[j];
      pathways.push(generatePathConfig(chainA, chainB));
    }
  }
  return pathways;
};

const getChainsContract = (): { contract: OmniPointHardhat }[] => {
  return SELECTED_NETWORKS.map((network) => ({
    contract: contracts[network],
  }));
};

export default async function () {
  // Generate the connections config based on the pathways
  const connections = await generateConnectionsConfig(generatePathways());
  return {
    contracts: getChainsContract(),
    connections,
  };
}
