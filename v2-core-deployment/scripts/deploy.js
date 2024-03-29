const {ethers} = require("hardhat");
require("dotenv").config();

async function main() {
  const UniswapV2Factory = await ethers.getContractFactory("UniswapV2Factory");
  const uniswapV2Factory = await UniswapV2Factory.deploy(process.env.fee_to_set);

  console.log(
    `Contract address of UniswapV2Factory: ${uniswapV2Factory.address}`
  );
};

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
