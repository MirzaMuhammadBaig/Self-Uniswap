const { ethers } = require("ethers");
require("dotenv").config();
const { API_URL_INFURA, routerAddress, tokenAAddress} = process.env;

const provider = new ethers.providers.JsonRpcProvider(API_URL_INFURA);

const abi = require("../artifacts/contracts/UniswapV2Router02.sol/UniswapV2Router02.json");

const contract = new ethers.Contract(routerAddress, abi, provider);

const amountOut = ethers.utils.parseEther("1000"); // 1000 tokens
const path = [tokenAAddress, ethers.constants.AddressZero]; // token to ETH

async function getAmountsIn() {
  const amounts = await contract.getAmountsIn(amountOut, path);
  const amountIn = amounts[0]; // the first element in the array is the input amount
  console.log("Amount in:", ethers.utils.formatEther(amountIn));
}

getAmountsIn();
