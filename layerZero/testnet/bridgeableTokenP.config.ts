import { EndpointId } from "@layerzerolabs/lz-definitions";

import type {
  OAppOmniGraphHardhat,
  OmniPointHardhat,
} from "@layerzerolabs/toolbox-hardhat";

const tokenP = "USDp";
const sepoliaContract: OmniPointHardhat = {
  eid: EndpointId.SEPOLIA_V2_TESTNET,
  contractName: `BridgeableTokenP_${tokenP}`,
};

const arbitrumSepoliaContract: OmniPointHardhat = {
  eid: EndpointId.ARBSEP_V2_TESTNET,
  contractName: `BridgeableTokenP_${tokenP}`,
};

const config: OAppOmniGraphHardhat = {
  contracts: [
    { contract: sepoliaContract },
    { contract: arbitrumSepoliaContract },
  ],
  connections: [
    {
      from: sepoliaContract,
      to: arbitrumSepoliaContract,
    },
    {
      from: arbitrumSepoliaContract,
      to: sepoliaContract,
    },
  ],
};

export default config;
