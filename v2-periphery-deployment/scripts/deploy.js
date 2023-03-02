const hre = require("hardhat");
require("dotenv").config();
const { factoryAddress, WETH_address } = process.env;

async function main() {
  const UniswapV2Router02 = await hre.ethers.getContractFactory("UniswapV2Router02");
  const uniswapV2Router02 = await UniswapV2Router02.deploy(factoryAddress, WETH_address);
  
  console.log(
    `Contract address of UniswapV2Router02: ${uniswapV2Router02.address}`
  );
};

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
