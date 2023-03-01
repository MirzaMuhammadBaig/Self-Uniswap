const hre = require("hardhat");
require("dotenv").config();
const { fee_to_set } = process.env;

async function main() {
  const UniswapV2Factory = await hre.ethers.getContractFactory("UniswapV2Factory");
  const uniswapV2Factory = await UniswapV2Factory.deploy(fee_to_set);

  await uniswapV2Factory.deployed();

  console.log(
    `Contract address of UniswapV2Factory: ${uniswapV2Factory.address}`
  );
};

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
