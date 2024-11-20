// scripts/deploy.js

async function main() {
  const Storix = await ethers.getContractFactory("Storix");
  const storix = await Storix.deploy();

  await storix.deployed();

  console.log("Storix deployed to:", storix.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
