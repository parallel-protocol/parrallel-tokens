export type Address = `0x${string}`;

export type DeployToken = {
  name: string;
  symbol: string;
};

export type BridgeableTokenPConfig = {
  lzName: string;
  lzSymbol: string;
  principalToken: string;
  dailyCreditLimit: bigint;
  globalCreditLimit: bigint;
  dailyDebitLimit: bigint;
  globalDebitLimit: bigint;
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
