const { ethers } = require("ethers");
require("dotenv").config();

const { API_URL_INFURA, routerAddress} = process.env
const provider = new ethers.providers.JsonRpcProvider(API_URL_INFURA);

const abi = require("../artifacts/contracts/UniswapV2Router02.sol/UniswapV2Router02.json");

const contract = new ethers.Contract(routerAddress, abi.abi, provider);

async function getWETH() {
  const wethAddress = await contract.WETH();
  console.log("WETH address:", wethAddress);
  // WETH address: 0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6
}

getWETH();
