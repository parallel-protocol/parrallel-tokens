import { EndpointId } from "@layerzerolabs/lz-definitions";
import { OmniPointHardhat } from "@layerzerolabs/toolbox-hardhat";
import { Network } from "./types";
import { NETWORKS } from "./constants";

export const tokenP = "USDp";

export const mainnetContract: OmniPointHardhat = {
  eid: EndpointId.ETHEREUM_V2_MAINNET,
  contractName: `BridgeableTokenP_${tokenP}`,
};

export const polygonContract: OmniPointHardhat = {
  eid: EndpointId.POLYGON_V2_MAINNET,
  contractName: `BridgeableTokenP_${tokenP}`,
};

export const baseContract: OmniPointHardhat = {
  eid: EndpointId.BASE_V2_MAINNET,
  contractName: `BridgeableTokenP_${tokenP}`,
};

export const optimismContract: OmniPointHardhat = {
  eid: EndpointId.OPTIMISM_V2_MAINNET,
  contractName: `BridgeableTokenP_${tokenP}`,
};

export const arbitrumContract: OmniPointHardhat = {
  eid: EndpointId.ARBITRUM_V2_MAINNET,
  contractName: `BridgeableTokenP_${tokenP}`,
};

export const sonicContract: OmniPointHardhat = {
  eid: EndpointId.SONIC_V2_MAINNET,
  contractName: `BridgeableTokenP_${tokenP}`,
};

export const seiContract: OmniPointHardhat = {
  eid: EndpointId.SEI_V2_MAINNET,
  contractName: `BridgeableTokenP_${tokenP}`,
};

export const inkContract: OmniPointHardhat = {
  eid: EndpointId.INK_V2_MAINNET,
  contractName: `BridgeableTokenP_${tokenP}`,
};

export const avalancheContract: OmniPointHardhat = {
  eid: EndpointId.AVALANCHE_V2_MAINNET,
  contractName: `BridgeableTokenP_${tokenP}`,
};

export const unichainContract: OmniPointHardhat = {
  eid: EndpointId.UNICHAIN_V2_MAINNET,
  contractName: `BridgeableTokenP_${tokenP}`,
};

export const berachainContract: OmniPointHardhat = {
  eid: EndpointId.BERA_V2_MAINNET,
  contractName: `BridgeableTokenP_${tokenP}`,
};

export const gnosisContract: OmniPointHardhat = {
  eid: EndpointId.GNOSIS_V2_MAINNET,
  contractName: `BridgeableTokenP_${tokenP}`,
};

export const scrollContract: OmniPointHardhat = {
  eid: EndpointId.SCROLL_V2_MAINNET,
  contractName: `BridgeableTokenP_${tokenP}`,
};

export const bscContract: OmniPointHardhat = {
  eid: EndpointId.BSC_V2_MAINNET,
  contractName: `BridgeableTokenP_${tokenP}`,
};

export const hyperContract: OmniPointHardhat = {
  eid: EndpointId.HYPERLIQUID_V2_MAINNET,
  contractName: `BridgeableTokenP_${tokenP}`,
};

export const tacContract: OmniPointHardhat = {
  eid: EndpointId.TAC_V2_MAINNET,
  contractName: `BridgeableTokenP_${tokenP}`,
};

export const contracts: Record<Network, OmniPointHardhat> = {
  [NETWORKS.ARBITRUM]: arbitrumContract,
  [NETWORKS.AVALANCHE]: avalancheContract,
  [NETWORKS.BASE]: baseContract,
  [NETWORKS.BERACHAIN]: berachainContract,
  [NETWORKS.BSC]: bscContract,
  [NETWORKS.GNOSIS]: gnosisContract,
  [NETWORKS.HYPERLIQUID]: hyperContract,
  [NETWORKS.INK]: inkContract,
  [NETWORKS.MAINNET]: mainnetContract,
  [NETWORKS.OPTIMISM]: optimismContract,
  [NETWORKS.POLYGON]: polygonContract,
  [NETWORKS.SCROLL]: scrollContract,
  [NETWORKS.SEI]: seiContract,
  [NETWORKS.SONIC]: sonicContract,
  [NETWORKS.TAC]: tacContract,
  [NETWORKS.UNICHAIN]: unichainContract,
};
