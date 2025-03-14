# Parallel Tokens

This repository contains all the contracts of Parallel Tokens with associated contract (flashloan)

## Starting

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
