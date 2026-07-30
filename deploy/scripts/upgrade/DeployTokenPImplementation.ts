import assert from "assert";
import { deployScript, artifacts } from "@rocketh";
import { encodeFunctionData } from "viem";

/// Deploys ONLY the new TokenP implementation (no proxy upgrade), then prints the `upgradeToAndCall`
/// transaction for the multisig. The proxy is owned by governance (AccessManager GOVERNOR_ROLE), so the
/// deployer cannot upgrade it. The current TokenP has no reinitializer, so the upgrade calldata is empty.
const token = "USDp";

export default deployScript(
  async ({ namedAccounts, name: networkName, deploy, get }) => {
    const { deployer } = namedAccounts;
    assert(deployer, "Missing named deployer account");
    console.log(
      `Network: ${networkName}\nDeployer: ${deployer}\nDeploying TokenP implementation (no wiring)`,
    );

    // TokenP's constructor calls _disableInitializers(), so the implementation is safe to leave
    // uninitialized. Re-runs only redeploy when the bytecode changed.
    const implementation = await deploy(`TokenP_${token}_Implementation`, {
      account: deployer,
      artifact: artifacts.TokenP,
      args: [],
    });
    console.log(`New TokenP implementation: ${implementation.address}`);

    // No reinitializer on TokenP -> upgradeToAndCall is called with empty calldata.
    const upgradeToAndCallData = encodeFunctionData({
      abi: artifacts.TokenP.abi,
      functionName: "upgradeToAndCall",
      args: [implementation.address, "0x"],
    });

    // Proxy address is read from this network's deployment, so the printed multisig tx is never
    // tied to a hardcoded chain.
    const proxy = get(`TokenP_${token}`);

    console.log("\n=== Multisig action: TokenP proxy upgrade ===");
    console.log(`to:    ${proxy.address}`);
    console.log(`value: 0`);
    console.log(`data:  ${upgradeToAndCallData}`);
    console.log(
      `decoded: upgradeToAndCall(${implementation.address}, 0x)`,
    );
  },
  {
    tags: ["UpgradeTokenP", "TokenPImplementation"],
  },
);
