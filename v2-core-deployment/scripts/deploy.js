const hre = require("hardhat");
const fee_to_set = "0xb189d95c7CbAA430Cd835c1191A5CF60E008A1b1";

async function main() {
  const UniswapV2Router02 = await hre.ethers.getContractFactory("UniswapV2Router02");
  const uniswapV2Router02 = await UniswapV2Router02.deploy(fee_to_set);

  await uniswapV2Router02.deployed();

  console.log(
    `Contract address of UniswapV2Router02: ${uniswapV2Router02.address}`
  );
};

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
