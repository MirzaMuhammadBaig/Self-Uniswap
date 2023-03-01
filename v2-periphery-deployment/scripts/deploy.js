const hre = require("hardhat");
const { factory_address, WETH_address} = process.env;

async function main() {
  const UniswapV2Router02 = await hre.ethers.getContractFactory("UniswapV2Router02");
  const uniswapV2Router02 = await UniswapV2Router02.deploy(factory_address, WETH_address);

  // await uniswapV2Router02.deployed();

  console.log(
    `Contract address of UniswapV2Router02: ${uniswapV2Router02.address}`
  );
};

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
