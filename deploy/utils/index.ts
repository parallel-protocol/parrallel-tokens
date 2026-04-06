import { BigNumber, BigNumber, ethers } from "ethers";
import { Address, BridgeableTokenPConfig, ConfigData } from "./types";
import { EndpointId } from "@layerzerolabs/lz-definitions";
import { readFileSync } from "fs";
import path from "path";

export const getLzEidReceiver = (mainchain: string) => {
  if (mainchain === "sepolia") return EndpointId.SEPOLIA_V2_TESTNET;
  if (mainchain === "arbiSepolia") return EndpointId.ARBSEP_V2_TESTNET;
  if (mainchain === "mainnet") return EndpointId.ETHEREUM_V2_MAINNET;
  if (mainchain === "fantom") return EndpointId.FANTOM_V2_MAINNET;
  if (mainchain === "polygon") return EndpointId.POLYGON_V2_MAINNET;
  throw new Error(`Unsupported lzEidReceiver: ${mainchain}`);
};

// return token address defined in config.tokens
export const getTokenAddressFromConfig = (
  token: string,
  config: ConfigData,
) => {
  if (!Object.keys(config.tokens).includes(token.toLowerCase()))
    throw new Error(`Token ${token} not found in config`);
  const tokenAddress =
    config.tokens[token.toLowerCase() as keyof typeof config.tokens].address;
  if (!isAddressValid(tokenAddress))
    throw new Error(`Invalid ${token} address: ${tokenAddress}`);
  return tokenAddress;
};

export const getWalletAddressFromConfig = (
  wallet: string,
  config: ConfigData,
) => {
  if (!Object.keys(config.wallets).includes(wallet.toLowerCase()))
    throw new Error(`Wallet ${wallet} not found in config`);
  const walletAddress =
    config.wallets[wallet.toLowerCase() as keyof typeof config.wallets];
  if (!isAddressValid(walletAddress))
    throw new Error(`Invalid ${wallet} address: ${walletAddress}`);
  return walletAddress;
};

export const checkAddressValid = (address: Address, label: string) => {
  if (!isAddressValid(address))
    throw new Error(`Invalid ${label} address: ${address}`);
  return address;
};

export const isAddressValid = (address: string) => {
  return (
    ethers.utils.isAddress(address) && ethers.constants.AddressZero !== address
  );
};

export const parseBridgeableTokenPConfig = (config: BridgeableTokenPConfig) => {
  return {
    dailyCreditLimit: BigInt(config.dailyCreditLimit),
    globalCreditLimit: BigInt(config.globalCreditLimit),
    dailyDebitLimit: BigInt(config.dailyDebitLimit),
    globalDebitLimit: BigInt(config.globalDebitLimit),
    feesRecipient: config.feesRecipient,
    feesRate: config.feesRate,
    isIsolateMode: config.isIsolateMode,
  };
};

const LZ_NETWORK_MAP: Record<string, string> = {
  mainnet: "ethereum-mainnet",
  polygon: "polygon-mainnet",
  arbitrum: "arbitrum-mainnet",
  optimism: "optimism-mainnet",
  base: "base-mainnet",
  sonic: "sonic-mainnet",
  sei: "sei-mainnet",
  avalanche: "avalanche-mainnet",
  bsc: "bsc-mainnet",
  berachain: "bera-mainnet",
  scroll: "scroll-mainnet",
  gnosis: "gnosis-mainnet",
  unichain: "unichain-mainnet",
  ink: "ink-mainnet",
  hyperevm: "hyperliquid-mainnet",
  xlayer: "xlayer-mainnet",
  plume: "plumephoenix-mainnet",
  plasma: "plasma-mainnet",
  linea: "zkconsensys-mainnet",
  katana: "katana-mainnet",
  fraxtal: "fraxtal-mainnet",
  worldchain: "worldchain-mainnet",
  hemi: "hemi-mainnet",
};

export const getLzEndpointV2Address = (networkName: string): Address => {
  const lzNetworkName = LZ_NETWORK_MAP[networkName];
  if (!lzNetworkName) {
    throw new Error(
      `No LayerZero network mapping found for "${networkName}"`,
    );
  }
  const deploymentPath = path.resolve(
    "node_modules/@layerzerolabs/lz-evm-sdk-v2/deployments",
    lzNetworkName,
    "EndpointV2.json",
  );
  const deployment = JSON.parse(readFileSync(deploymentPath).toString());
  return deployment.address as Address;
};
