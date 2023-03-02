const hre = require("hardhat");

async function main() {

  const TOKEN_1 = await hre.ethers.getContractFactory("TOKEN_1");
  const TOKEN_2 = await hre.ethers.getContractFactory("TOKEN_2");
  const TOKEN_3 = await hre.ethers.getContractFactory("TOKEN_3");
  const TOKEN_4 = await hre.ethers.getContractFactory("TOKEN_4");

  const token_1 = await TOKEN_1.deploy(10000000);
  const token_2 = await TOKEN_2.deploy(10000000);
  const token_3 = await TOKEN_3.deploy(10000000);
  const token_4 = await TOKEN_4.deploy(10000000);

  await token_1.deployed();
  await token_2.deployed();
  await token_3.deployed();
  await token_4.deployed();

  console.log(
    `TOKEN_1 contract deployed at: ${token_1.address}`
  );
  console.log(
    `TOKEN_2 contract deployed at: ${token_2.address}`
  );console.log(
    `TOKEN_3 contract deployed at: ${token_3.address}`
  );console.log(
    `TOKEN_4 contract deployed at: ${token_4.address}`
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
