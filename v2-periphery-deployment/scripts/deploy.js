const hre = require("hardhat");
const factory_address = "0xA2dD0C12b7e2D0c1b1ac7Bb2fd0A8826CD58A3A3";
const WETH_address = "0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6";

async function main() {
  const UniswapV2Router02 = await hre.ethers.getContractFactory("UniswapV2Router02");
  const uniswapV2Router02 = await UniswapV2Router02.deploy(factory_address, WETH_address);

  await uniswapV2Router02.deployed();

  console.log(
    `Contract address of UniswapV2Router02: ${uniswapV2Router02.address}`
  );
};

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
