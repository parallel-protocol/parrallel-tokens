# Parallel Tokens

## Summary

This repository contains all the contracts of Parallel Tokens with associated contract.

## Architecture

- [TokenP](./contracts/tokens/TokenP/TokenP.sol) contract is the ERC20 stablecoin.
- [BridgeableTokenP](./contracts/tokens/BridgeableTokenP/BridgeableTokenP.sol) is an OFT (layerZero standard) contract that unlock the power of TokenP to be bridgeable between specific chains.
- [FlashParallelToken](./contracts/flashloan/FlashParallelToken.sol) is the flashloan contract on top of TokenP's contracts.

## Documentation Links

## Deployment Addresses

### Mainnet

### Testnet

#### Sepolia

| Contract           | Explore                                                                                                                       |
| ------------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| USDp               | [0xe8a3DA6f5ed1cf04c58ac7f6A7383641e877517b](https://sepolia.etherscan.io/address/0xe8a3DA6f5ed1cf04c58ac7f6A7383641e877517b) |
| FlashParallelToken | [0x8B899796b4a442e7723E02f8b5B65a39F27EDAf1](https://sepolia.etherscan.io/address/0x8B899796b4a442e7723E02f8b5B65a39F27EDAf1) |
| BridgeableUSDp     | [0xFeFc8635edf0fAAD83312A713Cb67722D049C9Bc](https://sepolia.etherscan.io/address/0xFeFc8635edf0fAAD83312A713Cb67722D049C9Bc) |

#### Arbitrum Sepolia

| Contract       | Explore                                                                                                                      |
| -------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| USDp           | [0xA7eb076F57960E265B91514c03d1d1281055a75c](https://sepolia.arbiscan.io/address/0xA7eb076F57960E265B91514c03d1d1281055a75c) |
| BridgeableUSDp | [0xA8FE9843B4Cc2aAB136209B49E2c3E2A7ebD5CFA](https://sepolia.arbiscan.io/address/0xA8FE9843B4Cc2aAB136209B49E2c3E2A7ebD5CFA) |

## Security

### Assumptions

- Every restricted access is managed by an [AccessManager](https://github.com/parallel-protocol/parallel-core/blob/main/contracts/access/AccessManager.sol) contract following the OpenZeppelin standard
- The owner of [BridgeableTokenP](./contracts/tokens/BridgeableTokenP/BridgeableTokenP.sol) will be the AccessManager contract or a multisig.

### Known Issues

- When updating the FlashloanFeeRecipient current fees are not sent to the current recipient before update (to prevent that this function could be restricted with a timelock role on the AccessManager).
- In BridgeableTokenP, LZ messages can be received (causing tokens to be credited) even when the contract is paused. DAO must unlink peers with others chains when pausing a BridgeableTokenP.
- Fee rate changes can lead to unexpected number of received tokens if fees are updated during an ongoing bridge.
- When feesRate=0 in the BridgeableToken, bridge can be done repeatedly to DOS swaps from
  LZ->Principal token. However, user will still pay fees to LZ.

### Audits

#### Bailsec

Audited by Bailsec in March/April 2025:

- [1st report](./docs/audits/Bailsec%20-%20Parallel%20Protocol%20-%20V3%20Core%20-%201st%20Report.pdf)
- [final report](./docs/audits/Bailsec%20-%20Parallel%20Protocol%20-%20V3%20Core%20-%20Final%20Report.pdf)

#### Certora

Formal Verification by Certora in March/April 2025:

- [1st report](./docs/audits/Certora_Draft_Report_Parallel_Parallelizer_BridgeToken.pdf)
- [final report](./docs/audits/Certora_Report_Parallel_Parallelizer_BridgeToken_final.pdf)

## Development

### Foundry

[Install foundry follow the instructions.](https://book.getfoundry.sh/getting-started/installation)

### Install js dependencies

```bash
bun install
```

### Setup `.env` file

In order to interact with non local networks, you must create an `.env` that has:

```bash
PRIVATE_KEY="PRIVATE_KEY"
ALCHEMY_API_KEY="ALCHEMY_API_KEY"
MAINNET_ETHERSCAN_API_KEY="MAINNET_ETHERSCAN_API_KEY"
```

For additional keys, you can check the `.env.example` file.

**Warning: always keep your confidential information safe**

### Compile contracts

```bash
bun run compile
```

### Run tests

```bash
bun run test
```

### [Slither](https://github.com/crytic/slither)

```bash
bun run slither
```

You will find other useful commands in the [package.json](./package.json) file.

## Contributing

If you're interested in contributing, please see our [contributions guidelines](./CONTRIBUTING.md).

## Questions & Feedback

For any question or feedback you can use [discord](https://discord.com/invite/mimodao). Don't hesitate to reach out on
[Twitter](https://twitter.com/mimo_labs) as well.

## Licensing

The primary license for this repository is the MIT license. See [`LICENSE`](./LICENSE).
Minus the following exceptions:

- tests files are under UNLICENSED license
- mocks contracts are under UNLICENSED license

Each of these files states their license type.
