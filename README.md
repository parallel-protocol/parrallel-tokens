# Parallel Tokens

## What is it?

This repository contains all the contracts of Parallel Tokens with associated contract.

## Architecture

- the [TokenP](./contracts/tokens/TokenP/TokenP.sol) is the stablecoin contract
- the [BridgeableTokenP](./contracts/tokens/BridgeableTokenP/BridgeableTokenP.sol) is an OFT (layerZero standard) contract that unlock the power of TokenP to be bridgeable between specific chains.
- the [FlashParallelToken](./contracts/flashloan/FlashParallelToken.sol) is the flashloan contract on top of TokenP.

## Documentation Links

## Security

### Trust assumptions of the Parallelizer system

- BridgeableTokenP owner will be an accessManager contract.

### Known Issues

- When updating the FlashloanFeeRecipient current fees are not sent to the current recipient before update (to prevent that this function will be callable with a timelock role access managed on the accessManager).

## Development

### Install packages

You can install all dependencies by running

```bash
bun install
```

### Create `.env` file

In order to interact with non local networks, you must create an `.env` that has:

- `PRIVATE_KEY`
- `MNEMONIC`
- network key (eg. `ALCHEMY_NETWORK_KEY`)
- `ETHERSCAN_API_KEY`

For additional keys, you can check the `.env.example` file.

Warning: always keep your confidential information safe.

## Hardhat Command line completion

Follow these instructions to have hardhat command line arguments completion: <https://hardhat.org/hardhat-runner/docs/guides/command-line-completion>

## Foundry Installation

```bash
curl -L https://foundry.paradigm.xyz | bash

source /root/.zshrc
# or, if you're under bash: source /root/.bashrc

foundryup
```

To install the standard library:

```bash
forge install foundry-rs/forge-std
```

To update libraries:

```bash
forge update
```

### Foundry on Docker 🐳

**If you don’t want to install Rust and Foundry on your computer, you can use Docker**
Image is available here [ghcr.io/foundry-rs/foundry](http://ghcr.io/foundry-rs/foundry).

```bash
docker pull ghcr.io/foundry-rs/foundry
docker tag ghcr.io/foundry-rs/foundry:latest foundry:latest
```

### Tests

You can run tests as follows:

```bash
bun run test
```

### Gas report

```bash
bun run gas
```

## Contributing

If you're interested in contributing, please see our [contributions guidelines](./CONTRIBUTING.md).

## Questions & Feedback

For any question or feedback you can use [discord](https://discord.com/invite/mimodao). Don't hesitate to reach out on
[Twitter](https://twitter.com/mimo_labs)🐦 as well.

## Licensing

The primary license for this repository is the MIT license. See [`LICENSE`](./LICENSE).
Minus the following exceptions:

Each of these files states their license type.
