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

export const plumeContract: OmniPointHardhat = {
  eid: EndpointId.PLUME_V2_MAINNET,
  contractName: `BridgeableTokenP_${tokenP}`,
};

export const xlayerContract: OmniPointHardhat = {
  eid: EndpointId.XLAYER_V2_MAINNET,
  contractName: `BridgeableTokenP_${tokenP}`,
};

export const plasmaContract: OmniPointHardhat = {
  eid: EndpointId.PLASMA_V2_MAINNET,
  contractName: `BridgeableTokenP_${tokenP}`,
};

export const lineaContract: OmniPointHardhat = {
  eid: EndpointId.ZKCONSENSYS_V2_MAINNET,
  contractName: `BridgeableTokenP_${tokenP}`,
};

export const katanaContract: OmniPointHardhat = {
  eid: EndpointId.KATANA_V2_MAINNET,
  contractName: `BridgeableTokenP_${tokenP}`,
};

export const fraxtalContract: OmniPointHardhat = {
  eid: EndpointId.FRAXTAL_V2_MAINNET,
  contractName: `BridgeableTokenP_${tokenP}`,
};

export const worldContract: OmniPointHardhat = {
  eid: EndpointId.WORLDCHAIN_V2_MAINNET,
  contractName: `BridgeableTokenP_${tokenP}`,
};

export const monadContract: OmniPointHardhat = {
  eid: EndpointId.MONAD_V2_MAINNET,
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
  [NETWORKS.PLUME]: plumeContract,
  [NETWORKS.XLAYER]: xlayerContract,
  [NETWORKS.PLASMA]: plasmaContract,
  [NETWORKS.LINEA]: lineaContract,
  [NETWORKS.KATANA]: katanaContract,
  [NETWORKS.FRAXTAL]: fraxtalContract,
  [NETWORKS.WORLD]: worldContract,
  [NETWORKS.MONAD]: monadContract,
};
