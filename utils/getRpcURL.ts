export const getRpcURL = (network: string): string => {
  const apiKey = process.env.ALCHEMY_API_KEY;
  if (!apiKey) throw new Error("ALCHEMY_API_KEY is not set");
  switch (network) {
    case "mainnet": {
      return `https://eth-mainnet.g.alchemy.com/v2/${apiKey}`;
    }
    case "sepolia": {
      return `https://eth-sepolia.g.alchemy.com/v2/${apiKey}`;
    }
    case "polygon": {
      return `https://polygon-mainnet.g.alchemy.com/v2/${apiKey}`;
    }
    case "amoy": {
      return `https://polygon-amoy.g.alchemy.com/v2/${apiKey}`;
    }
    case "arbiSepolia": {
      return `https://arb-sepolia.g.alchemy.com/v2/${apiKey}`;
    }
    case "optimism": {
      return `https://opt-mainnet.g.alchemy.com/v2/${apiKey}`;
    }
    case "base": {
      return `https://base-mainnet.g.alchemy.com/v2/${apiKey}`;
    }
    case "arbitrum": {
      return `https://arb-mainnet.g.alchemy.com/v2/${apiKey}`;
    }
    case "sonic": {
      return `https://sonic-mainnet.g.alchemy.com/v2/${apiKey}`;
    }
    case "sei": {
      return `https://sei-mainnet.g.alchemy.com/v2/${apiKey}`;
    }
    case "avalanche": {
      return `https://avax-mainnet.g.alchemy.com/v2/${apiKey}`;
    }
    case "bsc": {
      return `https://bnb-mainnet.g.alchemy.com/v2/${apiKey}`;
    }
    case "berachain": {
      return `https://berachain-mainnet.g.alchemy.com/v2/${apiKey}`;
    }
    case "scroll": {
      return `https://scroll-mainnet.g.alchemy.com/v2/${apiKey}`;
    }
    case "mantle": {
      return `https://mantle-mainnet.g.alchemy.com/v2/${apiKey}`;
    }
    case "gnosis": {
      return `https://gnosis-mainnet.g.alchemy.com/v2/${apiKey}`;
    }
    case "unichain": {
      return `https://unichain-mainnet.g.alchemy.com/v2/${apiKey}`;
    }
    case "ink": {
      return `https://ink-mainnet.g.alchemy.com/v2/${apiKey}`;
    }
    case "hyperevm": {
      return `https://rpc.hyperliquid.xyz/evm`;
    }
    case "tac": {
      return `https://rpc.ankr.com/tac`;
    }
    case "plume": {
      return `https://rpc.plume.org`;
    }
    case "xlayer": {
      return `https://rpc.ankr.com/xlayer`;
    }
    case "plasma": {
      return `https://plasma-mainnet.g.alchemy.com/v2/${apiKey}`;
    }
    case "linea": {
      return `https://linea-mainnet.g.alchemy.com/v2/${apiKey}`;
    }
    case "katana": {
      return `https://rpc.katana.network`;
    }
    case "fraxtal": {
      return `https://frax-mainnet.g.alchemy.com/v2/${apiKey}`;
    }
    case "world": {
      return `https://worldchain-mainnet.g.alchemy.com/v2/${apiKey}`;
    }
    case "monad": {
      return `https://rpc.ankr.com/monad`;
    }
    case "plume": {
      return `https://rpc.plume.org`;
    }
    case "hemi": {
      return `https://hemi.drpc.org`;
    }
    default: {
      throw new Error(`${network} Network RPC not configured`);
    }
  }
};
