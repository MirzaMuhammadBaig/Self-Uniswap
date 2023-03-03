const { ethers } = require("ethers");
require("dotenv").config();

// imports from .env file
const { API_URL_INFURA, routerAddress, tokenAAddress, WETH_address} = process.env;

// Define the contract ABI
const abi = require("../artifacts/contracts/UniswapV2Router02.sol/UniswapV2Router02.json");

// Connect to Ethereum network
const provider = new ethers.providers.JsonRpcProvider(API_URL_INFURA);

// Create a contract instance
const contract = new ethers.Contract(routerAddress, abi.abi, provider);

// Sets the function parameters
const amountOut = ethers.BigNumber.from('1000000000000000000000'); // 1000 tokens
const path = [tokenAAddress, WETH_address]; // token to ETH

async function getAmountsIn() {
  // Invoke the approve function
  const amounts = await contract.getAmountsIn(amountOut, path);
  console.log(`Amounts: ${amounts}`);
  const amountIn = amounts[0]; // the first element in the array is the input amount
  console.log("Amount in:", ethers.utils.formatEther(amountIn));
}

getAmountsIn();
