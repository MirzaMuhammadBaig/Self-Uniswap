const hre = require("hardhat");
const fee_to_set = "0xb189d95c7CbAA430Cd835c1191A5CF60E008A1b1";

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
