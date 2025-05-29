import { EndpointId } from "@layerzerolabs/lz-definitions";

import type {
  OAppOmniGraphHardhat,
  OmniPointHardhat,
} from "@layerzerolabs/toolbox-hardhat";

const tokenP = "EURp";
const mainnetContract: OmniPointHardhat = {
  eid: EndpointId.ETHEREUM_V2_MAINNET,
  contractName: `BridgeableTokenP_${tokenP}`,
};

const polygonContract: OmniPointHardhat = {
  eid: EndpointId.POLYGON_V2_MAINNET,
  contractName: `BridgeableTokenP_${tokenP}`,
};

const baseContract: OmniPointHardhat = {
  eid: EndpointId.BASE_V2_MAINNET,
  contractName: `BridgeableTokenP_${tokenP}`,
};

const optimismContract: OmniPointHardhat = {
  eid: EndpointId.OPTIMISM_V2_MAINNET,
  contractName: `BridgeableTokenP_${tokenP}`,
};

const arbitrumContract: OmniPointHardhat = {
  eid: EndpointId.ARBITRUM_V2_MAINNET,
  contractName: `BridgeableTokenP_${tokenP}`,
};

const sonicContract: OmniPointHardhat = {
  eid: EndpointId.SONIC_V2_MAINNET,
  contractName: `BridgeableTokenP_${tokenP}`,
};

const config: OAppOmniGraphHardhat = {
  contracts: [
    {
      contract: mainnetContract,
    },
    {
      contract: polygonContract,
    },
    {
      contract: baseContract,
    },
    {
      contract: optimismContract,
    },
    {
      contract: arbitrumContract,
    },
    {
      contract: sonicContract,
    },
  ],
  connections: [
    // Mainnet to Polygon
    {
      from: mainnetContract,
      to: polygonContract,
      config: {
        sendLibrary: "0xbB2Ea70C9E858123480642Cf96acbcCE1372dCe1",
        receiveLibraryConfig: {
          receiveLibrary: "0xc02Ab410f0734EFa3F14628780e6e695156024C2",
          gracePeriod: 0n,
        },
        sendConfig: {
          executorConfig: {
            maxMessageSize: 10000,
            executor: "0x173272739Bd7Aa6e4e214714048a9fE699453059",
          },
          ulnConfig: {
            confirmations: BigInt(15),
            requiredDVNs: [
              "0x589dedbd617e0cbcb916a9223f4d1300c294236b",
              "0xa59ba433ac34d2927232918ef5b2eaafcf130ba5",
            ],
            optionalDVNs: [
              "0xc9ca319f6da263910fd9b037ec3d817a814ef3d8",
              "0xd56e4eab23cb81f43168f9f45211eb027b9ac7cc",
            ],
            optionalDVNThreshold: 1,
          },
        },
        receiveConfig: {
          ulnConfig: {
            confirmations: BigInt(512),
            requiredDVNs: [
              "0x589dedbd617e0cbcb916a9223f4d1300c294236b",
              "0xa59ba433ac34d2927232918ef5b2eaafcf130ba5",
            ],
            optionalDVNs: [
              "0xc9ca319f6da263910fd9b037ec3d817a814ef3d8",
              "0xd56e4eab23cb81f43168f9f45211eb027b9ac7cc",
            ],
            optionalDVNThreshold: 1,
          },
        },
      },
    },
    // Polygon to Mainnet
    {
      from: polygonContract,
      to: mainnetContract,
      config: {
        sendLibrary: "0x6c26c61a97006888ea9E4FA36584c7df57Cd9dA3",
        receiveLibraryConfig: {
          receiveLibrary: "0x1322871e4ab09Bc7f5717189434f97bBD9546e95",
          gracePeriod: 0n,
        },
        sendConfig: {
          executorConfig: {
            maxMessageSize: 10000,
            executor: "0xCd3F213AD101472e1713C72B1697E727C803885b",
          },
          ulnConfig: {
            confirmations: BigInt(512),
            requiredDVNs: [
              "0x23de2fe932d9043291f870324b74f820e11dc81a",
              "0x31f748a368a893bdb5abb67ec95f232507601a73",
            ],
            optionalDVNs: [
              "0x02152f4624596602dcbb8b8ead2988ad44edc865",
              "0xd56e4eab23cb81f43168f9f45211eb027b9ac7cc",
            ],
            optionalDVNThreshold: 1,
          },
        },
        receiveConfig: {
          ulnConfig: {
            confirmations: BigInt(15),
            requiredDVNs: [
              "0x23de2fe932d9043291f870324b74f820e11dc81a",
              "0x31f748a368a893bdb5abb67ec95f232507601a73",
            ],
            optionalDVNs: [
              "0x02152f4624596602dcbb8b8ead2988ad44edc865",
              "0xd56e4eab23cb81f43168f9f45211eb027b9ac7cc",
            ],
            optionalDVNThreshold: 1,
          },
        },
      },
    },
    // Mainnet to Base
    {
      from: mainnetContract,
      to: baseContract,
      config: {
        sendLibrary: "0xbB2Ea70C9E858123480642Cf96acbcCE1372dCe1",
        receiveLibraryConfig: {
          receiveLibrary: "0xc02Ab410f0734EFa3F14628780e6e695156024C2",
          gracePeriod: 0n,
        },
        sendConfig: {
          executorConfig: {
            maxMessageSize: 10000,
            executor: "0x173272739Bd7Aa6e4e214714048a9fE699453059",
          },
          ulnConfig: {
            confirmations: BigInt(15),
            requiredDVNs: [
              "0x589dedbd617e0cbcb916a9223f4d1300c294236b",
              "0xa59ba433ac34d2927232918ef5b2eaafcf130ba5",
            ],
            optionalDVNs: [
              "0xc9ca319f6da263910fd9b037ec3d817a814ef3d8",
              "0xd56e4eab23cb81f43168f9f45211eb027b9ac7cc",
            ],
            optionalDVNThreshold: 1,
          },
        },
        receiveConfig: {
          ulnConfig: {
            confirmations: BigInt(10),
            requiredDVNs: [
              "0x589dedbd617e0cbcb916a9223f4d1300c294236b",
              "0xa59ba433ac34d2927232918ef5b2eaafcf130ba5",
            ],
            optionalDVNs: [
              "0xc9ca319f6da263910fd9b037ec3d817a814ef3d8",
              "0xd56e4eab23cb81f43168f9f45211eb027b9ac7cc",
            ],
            optionalDVNThreshold: 1,
          },
        },
      },
    },
    // Base to Mainnet
    {
      from: baseContract,
      to: mainnetContract,
      config: {
        sendLibrary: "0xB5320B0B3a13cC860893E2Bd79FCd7e13484Dda2",
        receiveLibraryConfig: {
          receiveLibrary: "0xc70AB6f32772f59fBfc23889Caf4Ba3376C84bAf",
          gracePeriod: 0n,
        },
        sendConfig: {
          executorConfig: {
            maxMessageSize: 10000,
            executor: "0x2CCA08ae69E0C44b18a57Ab2A87644234dAebaE4",
          },
          ulnConfig: {
            confirmations: BigInt(10),
            requiredDVNs: [
              "0x9e059a54699a285714207b43b055483e78faac25",
              "0xcd37ca043f8479064e10635020c65ffc005d36f6",
            ],
            optionalDVNs: [
              "0x133e9fb2d339d8428476a714b1113b024343811e",
              "0xd56e4eab23cb81f43168f9f45211eb027b9ac7cc",
            ],
            optionalDVNThreshold: 1,
          },
        },
        receiveConfig: {
          ulnConfig: {
            confirmations: BigInt(15),
            requiredDVNs: [
              "0x9e059a54699a285714207b43b055483e78faac25",
              "0xcd37ca043f8479064e10635020c65ffc005d36f6",
            ],
            optionalDVNs: [
              "0x133e9fb2d339d8428476a714b1113b024343811e",
              "0xd56e4eab23cb81f43168f9f45211eb027b9ac7cc",
            ],
            optionalDVNThreshold: 1,
          },
        },
      },
    },
    // Mainnet to Optimism
    {
      from: mainnetContract,
      to: optimismContract,
      config: {
        sendLibrary: "0xbB2Ea70C9E858123480642Cf96acbcCE1372dCe1",
        receiveLibraryConfig: {
          receiveLibrary: "0xc02Ab410f0734EFa3F14628780e6e695156024C2",
          gracePeriod: 0n,
        },
        sendConfig: {
          executorConfig: {
            maxMessageSize: 10000,
            executor: "0x173272739Bd7Aa6e4e214714048a9fE699453059",
          },
          ulnConfig: {
            confirmations: BigInt(15),
            requiredDVNs: [
              "0x589dedbd617e0cbcb916a9223f4d1300c294236b",
              "0xa59ba433ac34d2927232918ef5b2eaafcf130ba5",
            ],
            optionalDVNs: [
              "0xc9ca319f6da263910fd9b037ec3d817a814ef3d8",
              "0xd56e4eab23cb81f43168f9f45211eb027b9ac7cc",
            ],
            optionalDVNThreshold: 1,
          },
        },
        receiveConfig: {
          ulnConfig: {
            confirmations: BigInt(20),
            requiredDVNs: [
              "0x589dedbd617e0cbcb916a9223f4d1300c294236b",
              "0xa59ba433ac34d2927232918ef5b2eaafcf130ba5",
            ],
            optionalDVNs: [
              "0xc9ca319f6da263910fd9b037ec3d817a814ef3d8",
              "0xd56e4eab23cb81f43168f9f45211eb027b9ac7cc",
            ],
            optionalDVNThreshold: 1,
          },
        },
      },
    },
    // Optimism to Mainnet
    {
      from: optimismContract,
      to: mainnetContract,
      config: {
        sendLibrary: "0x1322871e4ab09Bc7f5717189434f97bBD9546e95",
        receiveLibraryConfig: {
          receiveLibrary: "0x3c4962Ff6258dcfCafD23a814237B7d6Eb712063",
          gracePeriod: 0n,
        },
        sendConfig: {
          executorConfig: {
            maxMessageSize: 10000,
            executor: "0x2D2ea0697bdbede3F01553D2Ae4B8d0c486B666e",
          },
          ulnConfig: {
            confirmations: BigInt(20),
            requiredDVNs: [
              "0x6a02d83e8d433304bba74ef1c427913958187142",
              "0xa7b5189bca84cd304d8553977c7c614329750d99",
            ],
            optionalDVNs: [
              "0xf24dc834039a1e39f6b99a51df05df9c91e35b2d",
              "0xd56e4eab23cb81f43168f9f45211eb027b9ac7cc",
            ],
            optionalDVNThreshold: 1,
          },
        },
        receiveConfig: {
          ulnConfig: {
            confirmations: BigInt(15),
            requiredDVNs: [
              "0x6a02d83e8d433304bba74ef1c427913958187142",
              "0xa7b5189bca84cd304d8553977c7c614329750d99",
            ],
            optionalDVNs: [
              "0xf24dc834039a1e39f6b99a51df05df9c91e35b2d",
              "0xd56e4eab23cb81f43168f9f45211eb027b9ac7cc",
            ],
            optionalDVNThreshold: 1,
          },
        },
      },
    },
    // Mainnet to Arbitrum
    {
      from: mainnetContract,
      to: arbitrumContract,
      config: {
        sendLibrary: "0xbB2Ea70C9E858123480642Cf96acbcCE1372dCe1",
        receiveLibraryConfig: {
          receiveLibrary: "0xc02Ab410f0734EFa3F14628780e6e695156024C2",
          gracePeriod: 0n,
        },
        sendConfig: {
          executorConfig: {
            maxMessageSize: 10000,
            executor: "0x173272739Bd7Aa6e4e214714048a9fE699453059",
          },
          ulnConfig: {
            confirmations: BigInt(15),
            requiredDVNs: [
              "0x589dedbd617e0cbcb916a9223f4d1300c294236b",
              "0xa59ba433ac34d2927232918ef5b2eaafcf130ba5",
            ],
            optionalDVNs: [
              "0xc9ca319f6da263910fd9b037ec3d817a814ef3d8",
              "0xd56e4eab23cb81f43168f9f45211eb027b9ac7cc",
            ],
            optionalDVNThreshold: 1,
          },
        },
        receiveConfig: {
          ulnConfig: {
            confirmations: BigInt(20),
            requiredDVNs: [
              "0x589dedbd617e0cbcb916a9223f4d1300c294236b",
              "0xa59ba433ac34d2927232918ef5b2eaafcf130ba5",
            ],
            optionalDVNs: [
              "0xc9ca319f6da263910fd9b037ec3d817a814ef3d8",
              "0xd56e4eab23cb81f43168f9f45211eb027b9ac7cc",
            ],
            optionalDVNThreshold: 1,
          },
        },
      },
    },
    // Arbitrum to Mainnet
    {
      from: arbitrumContract,
      to: mainnetContract,
      config: {
        sendLibrary: "0x975bcD720be66659e3EB3C0e4F1866a3020E493A",
        receiveLibraryConfig: {
          receiveLibrary: "0x7B9E184e07a6EE1aC23eAe0fe8D6Be2f663f05e6",
          gracePeriod: 0n,
        },
        sendConfig: {
          executorConfig: {
            maxMessageSize: 10000,
            executor: "0x31CAe3B7fB82d847621859fb1585353c5720660D",
          },
          ulnConfig: {
            confirmations: BigInt(20),
            requiredDVNs: [
              "0x2f55c492897526677c5b68fb199ea31e2c126416",
              "0xa7b5189bca84cd304d8553977c7c614329750d99",
            ],
            optionalDVNs: [
              "0x0711dd777ae626ef5e0a4f50e199c7a0e0666857",
              "0xd56e4eab23cb81f43168f9f45211eb027b9ac7cc",
            ],
            optionalDVNThreshold: 1,
          },
        },
        receiveConfig: {
          ulnConfig: {
            confirmations: BigInt(15),
            requiredDVNs: [
              "0x2f55c492897526677c5b68fb199ea31e2c126416",
              "0xa7b5189bca84cd304d8553977c7c614329750d99",
            ],
            optionalDVNs: [
              "0x0711dd777ae626ef5e0a4f50e199c7a0e0666857",
              "0xd56e4eab23cb81f43168f9f45211eb027b9ac7cc",
            ],
            optionalDVNThreshold: 1,
          },
        },
      },
    },
    // Mainnet to Sonic
    {
      from: mainnetContract,
      to: sonicContract,
      config: {
        sendLibrary: "0xbB2Ea70C9E858123480642Cf96acbcCE1372dCe1",
        receiveLibraryConfig: {
          receiveLibrary: "0xc02Ab410f0734EFa3F14628780e6e695156024C2",
          gracePeriod: 0n,
        },
        sendConfig: {
          executorConfig: {
            maxMessageSize: 10000,
            executor: "0x173272739Bd7Aa6e4e214714048a9fE699453059",
          },
          ulnConfig: {
            confirmations: BigInt(15),
            requiredDVNs: [
              "0x589dedbd617e0cbcb916a9223f4d1300c294236b",
              "0xa59ba433ac34d2927232918ef5b2eaafcf130ba5",
            ],
            optionalDVNs: ["0xc9ca319f6da263910fd9b037ec3d817a814ef3d8"],
            optionalDVNThreshold: 1,
          },
        },
        receiveConfig: {
          ulnConfig: {
            confirmations: BigInt(20),
            requiredDVNs: [
              "0x589dedbd617e0cbcb916a9223f4d1300c294236b",
              "0xa59ba433ac34d2927232918ef5b2eaafcf130ba5",
            ],
            optionalDVNs: ["0xc9ca319f6da263910fd9b037ec3d817a814ef3d8"],
            optionalDVNThreshold: 1,
          },
        },
      },
    },
    // Sonic to Mainnet
    {
      from: sonicContract,
      to: mainnetContract,
      config: {
        sendLibrary: "0xC39161c743D0307EB9BCc9FEF03eeb9Dc4802de7",
        receiveLibraryConfig: {
          receiveLibrary: "0xe1844c5D63a9543023008D332Bd3d2e6f1FE1043",
          gracePeriod: 0n,
        },
        sendConfig: {
          executorConfig: {
            maxMessageSize: 10000,
            executor: "0x4208D6E27538189bB48E603D6123A94b8Abe0A0b",
          },
          ulnConfig: {
            confirmations: BigInt(20),
            requiredDVNs: [
              "0x282b3386571f7f794450d5789911a9804fa346b4",
              "0x05aaefdf9db6e0f7d27fa3b6ee099edb33da029e",
            ],
            optionalDVNs: ["0xdfbb5c677db41b5ef3a180509cde27b5c9784655"],
            optionalDVNThreshold: 1,
          },
        },
        receiveConfig: {
          ulnConfig: {
            confirmations: BigInt(15),
            requiredDVNs: [
              "0x282b3386571f7f794450d5789911a9804fa346b4",
              "0x05aaefdf9db6e0f7d27fa3b6ee099edb33da029e",
            ],
            optionalDVNs: ["0xdfbb5c677db41b5ef3a180509cde27b5c9784655"],
            optionalDVNThreshold: 1,
          },
        },
      },
    },
    // Polygon to Base
    {
      from: polygonContract,
      to: baseContract,
      config: {
        sendLibrary: "0x6c26c61a97006888ea9E4FA36584c7df57Cd9dA3",
        receiveLibraryConfig: {
          receiveLibrary: "0x1322871e4ab09Bc7f5717189434f97bBD9546e95",
          gracePeriod: 0n,
        },
        sendConfig: {
          executorConfig: {
            maxMessageSize: 10000,
            executor: "0xCd3F213AD101472e1713C72B1697E727C803885b",
          },
          ulnConfig: {
            confirmations: BigInt(512),
            requiredDVNs: [
              "0x23de2fe932d9043291f870324b74f820e11dc81a",
              "0x31f748a368a893bdb5abb67ec95f232507601a73",
            ],
            optionalDVNs: [
              "0x02152f4624596602dcbb8b8ead2988ad44edc865",
              "0xd56e4eab23cb81f43168f9f45211eb027b9ac7cc",
            ],
            optionalDVNThreshold: 1,
          },
        },
        receiveConfig: {
          ulnConfig: {
            confirmations: BigInt(10),
            requiredDVNs: [
              "0x23de2fe932d9043291f870324b74f820e11dc81a",
              "0x31f748a368a893bdb5abb67ec95f232507601a73",
            ],
            optionalDVNs: [
              "0x02152f4624596602dcbb8b8ead2988ad44edc865",
              "0xd56e4eab23cb81f43168f9f45211eb027b9ac7cc",
            ],
            optionalDVNThreshold: 1,
          },
        },
      },
    },
    // Base to Polygon
    {
      from: baseContract,
      to: polygonContract,
      config: {
        sendLibrary: "0xB5320B0B3a13cC860893E2Bd79FCd7e13484Dda2",
        receiveLibraryConfig: {
          receiveLibrary: "0xc70AB6f32772f59fBfc23889Caf4Ba3376C84bAf",
          gracePeriod: 0n,
        },
        sendConfig: {
          executorConfig: {
            maxMessageSize: 10000,
            executor: "0x2CCA08ae69E0C44b18a57Ab2A87644234dAebaE4",
          },
          ulnConfig: {
            confirmations: BigInt(10),
            requiredDVNs: [
              "0x9e059a54699a285714207b43b055483e78faac25",
              "0xcd37ca043f8479064e10635020c65ffc005d36f6",
            ],
            optionalDVNs: [
              "0x133e9fb2d339d8428476a714b1113b024343811e",
              "0xd56e4eab23cb81f43168f9f45211eb027b9ac7cc",
            ],
            optionalDVNThreshold: 1,
          },
        },
        receiveConfig: {
          ulnConfig: {
            confirmations: BigInt(512),
            requiredDVNs: [
              "0x9e059a54699a285714207b43b055483e78faac25",
              "0xcd37ca043f8479064e10635020c65ffc005d36f6",
            ],
            optionalDVNs: [
              "0x133e9fb2d339d8428476a714b1113b024343811e",
              "0xd56e4eab23cb81f43168f9f45211eb027b9ac7cc",
            ],
            optionalDVNThreshold: 1,
          },
        },
      },
    },
    // Polygon to Optimism
    {
      from: polygonContract,
      to: optimismContract,
      config: {
        sendLibrary: "0x6c26c61a97006888ea9E4FA36584c7df57Cd9dA3",
        receiveLibraryConfig: {
          receiveLibrary: "0x1322871e4ab09Bc7f5717189434f97bBD9546e95",
          gracePeriod: 0n,
        },
        sendConfig: {
          executorConfig: {
            maxMessageSize: 10000,
            executor: "0xCd3F213AD101472e1713C72B1697E727C803885b",
          },
          ulnConfig: {
            confirmations: BigInt(512),
            requiredDVNs: [
              "0x23de2fe932d9043291f870324b74f820e11dc81a",
              "0x31f748a368a893bdb5abb67ec95f232507601a73",
            ],
            optionalDVNs: [
              "0x02152f4624596602dcbb8b8ead2988ad44edc865",
              "0xd56e4eab23cb81f43168f9f45211eb027b9ac7cc",
            ],
            optionalDVNThreshold: 1,
          },
        },
        receiveConfig: {
          ulnConfig: {
            confirmations: BigInt(20),
            requiredDVNs: [
              "0x23de2fe932d9043291f870324b74f820e11dc81a",
              "0x31f748a368a893bdb5abb67ec95f232507601a73",
            ],
            optionalDVNs: [
              "0x02152f4624596602dcbb8b8ead2988ad44edc865",
              "0xd56e4eab23cb81f43168f9f45211eb027b9ac7cc",
            ],
            optionalDVNThreshold: 1,
          },
        },
      },
    },
    // Optimism to Polygon
    {
      from: optimismContract,
      to: polygonContract,
      config: {
        sendLibrary: "0x1322871e4ab09Bc7f5717189434f97bBD9546e95",
        receiveLibraryConfig: {
          receiveLibrary: "0x3c4962Ff6258dcfCafD23a814237B7d6Eb712063",
          gracePeriod: 0n,
        },
        sendConfig: {
          executorConfig: {
            maxMessageSize: 10000,
            executor: "0x2D2ea0697bdbede3F01553D2Ae4B8d0c486B666e",
          },
          ulnConfig: {
            confirmations: BigInt(20),
            requiredDVNs: [
              "0x6a02d83e8d433304bba74ef1c427913958187142",
              "0xa7b5189bca84cd304d8553977c7c614329750d99",
            ],
            optionalDVNs: [
              "0xf24dc834039a1e39f6b99a51df05df9c91e35b2d",
              "0xd56e4eab23cb81f43168f9f45211eb027b9ac7cc",
            ],
            optionalDVNThreshold: 1,
          },
        },
        receiveConfig: {
          ulnConfig: {
            confirmations: BigInt(512),
            requiredDVNs: [
              "0x6a02d83e8d433304bba74ef1c427913958187142",
              "0xa7b5189bca84cd304d8553977c7c614329750d99",
            ],
            optionalDVNs: [
              "0xf24dc834039a1e39f6b99a51df05df9c91e35b2d",
              "0xd56e4eab23cb81f43168f9f45211eb027b9ac7cc",
            ],
            optionalDVNThreshold: 1,
          },
        },
      },
    },
    // Polygon to Arbitrum
    {
      from: polygonContract,
      to: arbitrumContract,
      config: {
        sendLibrary: "0x6c26c61a97006888ea9E4FA36584c7df57Cd9dA3",
        receiveLibraryConfig: {
          receiveLibrary: "0x1322871e4ab09Bc7f5717189434f97bBD9546e95",
          gracePeriod: 0n,
        },
        sendConfig: {
          executorConfig: {
            maxMessageSize: 10000,
            executor: "0xCd3F213AD101472e1713C72B1697E727C803885b",
          },
          ulnConfig: {
            confirmations: BigInt(512),
            requiredDVNs: [
              "0x23de2fe932d9043291f870324b74f820e11dc81a",
              "0x31f748a368a893bdb5abb67ec95f232507601a73",
            ],
            optionalDVNs: [
              "0x02152f4624596602dcbb8b8ead2988ad44edc865",
              "0xd56e4eab23cb81f43168f9f45211eb027b9ac7cc",
            ],
            optionalDVNThreshold: 1,
          },
        },
        receiveConfig: {
          ulnConfig: {
            confirmations: BigInt(20),
            requiredDVNs: [
              "0x23de2fe932d9043291f870324b74f820e11dc81a",
              "0x31f748a368a893bdb5abb67ec95f232507601a73",
            ],
            optionalDVNs: [
              "0x02152f4624596602dcbb8b8ead2988ad44edc865",
              "0xd56e4eab23cb81f43168f9f45211eb027b9ac7cc",
            ],
            optionalDVNThreshold: 1,
          },
        },
      },
    },
    // Arbitrum to Polygon
    {
      from: arbitrumContract,
      to: polygonContract,
      config: {
        sendLibrary: "0x975bcD720be66659e3EB3C0e4F1866a3020E493A",
        receiveLibraryConfig: {
          receiveLibrary: "0x7B9E184e07a6EE1aC23eAe0fe8D6Be2f663f05e6",
          gracePeriod: 0n,
        },
        sendConfig: {
          executorConfig: {
            maxMessageSize: 10000,
            executor: "0x31CAe3B7fB82d847621859fb1585353c5720660D",
          },
          ulnConfig: {
            confirmations: BigInt(20),
            requiredDVNs: [
              "0x2f55c492897526677c5b68fb199ea31e2c126416",
              "0xa7b5189bca84cd304d8553977c7c614329750d99",
            ],
            optionalDVNs: [
              "0x0711dd777ae626ef5e0a4f50e199c7a0e0666857",
              "0xd56e4eab23cb81f43168f9f45211eb027b9ac7cc",
            ],
            optionalDVNThreshold: 1,
          },
        },
        receiveConfig: {
          ulnConfig: {
            confirmations: BigInt(512),
            requiredDVNs: [
              "0x2f55c492897526677c5b68fb199ea31e2c126416",
              "0xa7b5189bca84cd304d8553977c7c614329750d99",
            ],
            optionalDVNs: [
              "0x0711dd777ae626ef5e0a4f50e199c7a0e0666857",
              "0xd56e4eab23cb81f43168f9f45211eb027b9ac7cc",
            ],
            optionalDVNThreshold: 1,
          },
        },
      },
    },
    // Base to Arbitrum
    {
      from: baseContract,
      to: arbitrumContract,
      config: {
        sendLibrary: "0xB5320B0B3a13cC860893E2Bd79FCd7e13484Dda2",
        receiveLibraryConfig: {
          receiveLibrary: "0xc70AB6f32772f59fBfc23889Caf4Ba3376C84bAf",
          gracePeriod: 0n,
        },
        sendConfig: {
          executorConfig: {
            maxMessageSize: 10000,
            executor: "0x2CCA08ae69E0C44b18a57Ab2A87644234dAebaE4",
          },
          ulnConfig: {
            confirmations: BigInt(10),
            requiredDVNs: [
              "0x9e059a54699a285714207b43b055483e78faac25",
              "0xcd37ca043f8479064e10635020c65ffc005d36f6",
            ],
            optionalDVNs: [
              "0x133e9fb2d339d8428476a714b1113b024343811e",
              "0xd56e4eab23cb81f43168f9f45211eb027b9ac7cc",
            ],
            optionalDVNThreshold: 1,
          },
        },
        receiveConfig: {
          ulnConfig: {
            confirmations: BigInt(20),
            requiredDVNs: [
              "0x9e059a54699a285714207b43b055483e78faac25",
              "0xcd37ca043f8479064e10635020c65ffc005d36f6",
            ],
            optionalDVNs: [
              "0x133e9fb2d339d8428476a714b1113b024343811e",
              "0xd56e4eab23cb81f43168f9f45211eb027b9ac7cc",
            ],
            optionalDVNThreshold: 1,
          },
        },
      },
    },
    // Arbitrum to Base
    {
      from: arbitrumContract,
      to: baseContract,
      config: {
        sendLibrary: "0x975bcD720be66659e3EB3C0e4F1866a3020E493A",
        receiveLibraryConfig: {
          receiveLibrary: "0x7B9E184e07a6EE1aC23eAe0fe8D6Be2f663f05e6",
          gracePeriod: 0n,
        },
        sendConfig: {
          executorConfig: {
            maxMessageSize: 10000,
            executor: "0x31CAe3B7fB82d847621859fb1585353c5720660D",
          },
          ulnConfig: {
            confirmations: BigInt(20),
            requiredDVNs: [
              "0x2f55c492897526677c5b68fb199ea31e2c126416",
              "0xa7b5189bca84cd304d8553977c7c614329750d99",
            ],
            optionalDVNs: [
              "0x0711dd777ae626ef5e0a4f50e199c7a0e0666857",
              "0xd56e4eab23cb81f43168f9f45211eb027b9ac7cc",
            ],
            optionalDVNThreshold: 1,
          },
        },
        receiveConfig: {
          ulnConfig: {
            confirmations: BigInt(10),
            requiredDVNs: [
              "0x2f55c492897526677c5b68fb199ea31e2c126416",
              "0xa7b5189bca84cd304d8553977c7c614329750d99",
            ],
            optionalDVNs: [
              "0x0711dd777ae626ef5e0a4f50e199c7a0e0666857",
              "0xd56e4eab23cb81f43168f9f45211eb027b9ac7cc",
            ],
            optionalDVNThreshold: 1,
          },
        },
      },
    },
    // Base to Optimism
    {
      from: baseContract,
      to: optimismContract,
      config: {
        sendLibrary: "0xB5320B0B3a13cC860893E2Bd79FCd7e13484Dda2",
        receiveLibraryConfig: {
          receiveLibrary: "0xc70AB6f32772f59fBfc23889Caf4Ba3376C84bAf",
          gracePeriod: 0n,
        },
        sendConfig: {
          executorConfig: {
            maxMessageSize: 10000,
            executor: "0x2CCA08ae69E0C44b18a57Ab2A87644234dAebaE4",
          },
          ulnConfig: {
            confirmations: BigInt(10),
            requiredDVNs: [
              "0x9e059a54699a285714207b43b055483e78faac25",
              "0xcd37ca043f8479064e10635020c65ffc005d36f6",
            ],
            optionalDVNs: [
              "0x133e9fb2d339d8428476a714b1113b024343811e",
              "0xd56e4eab23cb81f43168f9f45211eb027b9ac7cc",
            ],
            optionalDVNThreshold: 1,
          },
        },
        receiveConfig: {
          ulnConfig: {
            confirmations: BigInt(20),
            requiredDVNs: [
              "0x9e059a54699a285714207b43b055483e78faac25",
              "0xcd37ca043f8479064e10635020c65ffc005d36f6",
            ],
            optionalDVNs: [
              "0x133e9fb2d339d8428476a714b1113b024343811e",
              "0xd56e4eab23cb81f43168f9f45211eb027b9ac7cc",
            ],
            optionalDVNThreshold: 1,
          },
        },
      },
    },
    // Optimism to Base
    {
      from: optimismContract,
      to: baseContract,
      config: {
        sendLibrary: "0x1322871e4ab09Bc7f5717189434f97bBD9546e95",
        receiveLibraryConfig: {
          receiveLibrary: "0x3c4962Ff6258dcfCafD23a814237B7d6Eb712063",
          gracePeriod: 0n,
        },
        sendConfig: {
          executorConfig: {
            maxMessageSize: 10000,
            executor: "0x2D2ea0697bdbede3F01553D2Ae4B8d0c486B666e",
          },
          ulnConfig: {
            confirmations: BigInt(20),
            requiredDVNs: [
              "0x6a02d83e8d433304bba74ef1c427913958187142",
              "0xa7b5189bca84cd304d8553977c7c614329750d99",
            ],
            optionalDVNs: [
              "0xf24dc834039a1e39f6b99a51df05df9c91e35b2d",
              "0xd56e4eab23cb81f43168f9f45211eb027b9ac7cc",
            ],
            optionalDVNThreshold: 1,
          },
        },
        receiveConfig: {
          ulnConfig: {
            confirmations: BigInt(10),
            requiredDVNs: [
              "0x6a02d83e8d433304bba74ef1c427913958187142",
              "0xa7b5189bca84cd304d8553977c7c614329750d99",
            ],
            optionalDVNs: [
              "0xf24dc834039a1e39f6b99a51df05df9c91e35b2d",
              "0xd56e4eab23cb81f43168f9f45211eb027b9ac7cc",
            ],
            optionalDVNThreshold: 1,
          },
        },
      },
    },
    // Arbitrum to Optimism
    {
      from: arbitrumContract,
      to: optimismContract,
      config: {
        sendLibrary: "0x975bcD720be66659e3EB3C0e4F1866a3020E493A",
        receiveLibraryConfig: {
          receiveLibrary: "0x7B9E184e07a6EE1aC23eAe0fe8D6Be2f663f05e6",
          gracePeriod: 0n,
        },
        sendConfig: {
          executorConfig: {
            maxMessageSize: 10000,
            executor: "0x31CAe3B7fB82d847621859fb1585353c5720660D",
          },
          ulnConfig: {
            confirmations: BigInt(20),
            requiredDVNs: [
              "0x2f55c492897526677c5b68fb199ea31e2c126416",
              "0xa7b5189bca84cd304d8553977c7c614329750d99",
            ],
            optionalDVNs: [
              "0x0711dd777ae626ef5e0a4f50e199c7a0e0666857",
              "0xd56e4eab23cb81f43168f9f45211eb027b9ac7cc",
            ],
            optionalDVNThreshold: 1,
          },
        },
        receiveConfig: {
          ulnConfig: {
            confirmations: BigInt(20),
            requiredDVNs: [
              "0x2f55c492897526677c5b68fb199ea31e2c126416",
              "0xa7b5189bca84cd304d8553977c7c614329750d99",
            ],
            optionalDVNs: [
              "0x0711dd777ae626ef5e0a4f50e199c7a0e0666857",
              "0xd56e4eab23cb81f43168f9f45211eb027b9ac7cc",
            ],
            optionalDVNThreshold: 1,
          },
        },
      },
    },
    // Optimism to Arbitrum
    {
      from: optimismContract,
      to: arbitrumContract,
      config: {
        sendLibrary: "0x1322871e4ab09Bc7f5717189434f97bBD9546e95",
        receiveLibraryConfig: {
          receiveLibrary: "0x3c4962Ff6258dcfCafD23a814237B7d6Eb712063",
          gracePeriod: 0n,
        },
        sendConfig: {
          executorConfig: {
            maxMessageSize: 10000,
            executor: "0x2D2ea0697bdbede3F01553D2Ae4B8d0c486B666e",
          },
          ulnConfig: {
            confirmations: BigInt(20),
            requiredDVNs: [
              "0x6a02d83e8d433304bba74ef1c427913958187142",
              "0xa7b5189bca84cd304d8553977c7c614329750d99",
            ],
            optionalDVNs: [
              "0xf24dc834039a1e39f6b99a51df05df9c91e35b2d",
              "0xd56e4eab23cb81f43168f9f45211eb027b9ac7cc",
            ],
            optionalDVNThreshold: 1,
          },
        },
        receiveConfig: {
          ulnConfig: {
            confirmations: BigInt(20),
            requiredDVNs: [
              "0x6a02d83e8d433304bba74ef1c427913958187142",
              "0xa7b5189bca84cd304d8553977c7c614329750d99",
            ],
            optionalDVNs: [
              "0xf24dc834039a1e39f6b99a51df05df9c91e35b2d",
              "0xd56e4eab23cb81f43168f9f45211eb027b9ac7cc",
            ],
            optionalDVNThreshold: 1,
          },
        },
      },
    },
  ],
};

export default config;
