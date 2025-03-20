# Parallel Tokens

## Summary

This repository contains all the contracts of Parallel Tokens with associated contract.

## Architecture

- [TokenP](./contracts/tokens/TokenP/TokenP.sol) contract is the ERC20 stablecoin.
- [BridgeableTokenP](./contracts/tokens/BridgeableTokenP/BridgeableTokenP.sol) is an OFT (layerZero standard) contract that unlock the power of TokenP to be bridgeable between specific chains.
- [FlashParallelToken](./contracts/flashloan/FlashParallelToken.sol) is the flashloan contract on top of TokenP's contracts.

## Documentation Links

## Deployment Addresses

## Security

### Assumptions

- Every restricted access is managed by an [AccessManager](https://github.com/parallel-protocol/parallel-core/blob/main/contracts/access/AccessManager.sol) contract following the OpenZeppelin standard
- The owner of [BridgeableTokenP](./contracts/tokens/BridgeableTokenP/BridgeableTokenP.sol) will be the AccessManager contract or a multisig.

### Known Issues

- When updating the FlashloanFeeRecipient current fees are not sent to the current recipient before update (to prevent that this function could be restricted with a timelock role on the AccessManager).

### Audits

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
