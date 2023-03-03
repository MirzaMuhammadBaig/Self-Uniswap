const { ethers } = require("ethers");
require("dotenv").config();

// imports from .env file
const { API_URL_INFURA, routerAddress, tokenAAddress, WETH_address} = process.env;

// Define the contract ABI
const routerAbi = require("../artifacts/contracts/UniswapV2Router02.sol/UniswapV2Router02.json");

// Initialize provider and signer
const provider = new ethers.providers.JsonRpcProvider(API_URL_INFURA);

// Initialize UniswapV2Router02 contract instance
const routerContract = new ethers.Contract(routerAddress, routerAbi.abi, provider);

// Example trade: Swap 1 ETH for DAI
const amountIn = ethers.utils.parseEther("1000000000000000000"); // 1 ETH
const path = [WETH_address, tokenAAddress];

// Call getAmountsOut function
async function getAmountsOut() {
  // Invoke the approve function
  const amounts = await routerContract.getAmountsOut(amountIn, path);
  const amountOut = amounts[amounts.length - 1]; // the last element in the array is the output amount
  console.log("Amount out:", ethers.utils.formatEther(amountOut));
}

getAmountsOut();