import type { BigNumberish } from "ethers";

export type Address = `0x${string}`;

export type DeployToken = {
  name: string;
  symbol: string;
};

export type BridgeableTokenPConfig = {
  lzName: string;
  lzSymbol: string;
  principalToken: string;
  dailyCreditLimit: BigNumberish;
  globalCreditLimit: BigNumberish;
  dailyDebitLimit: BigNumberish;
  globalDebitLimit: BigNumberish;
  feesRecipient: string;
  feesRate: number;
  isIsolateMode: boolean;
};

export type ConfigData = {
  accessManager: Address;
  wallets: {
    dao: Address;
  };
  tokens: {
    [tokenP: string]: DeployToken;
  };
  bridgeableTokenP: {
    [tokenP: string]: BridgeableTokenPConfig;
  };
  flashParallelToken: {
    feeRecipient: string;
  };
};
