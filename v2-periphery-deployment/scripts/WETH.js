const { ethers } = require("ethers");
require("dotenv").config();

// imports from .env file
const { API_URL_INFURA, routerAddress} = process.env

// Define the contract ABI
const abi = require("../artifacts/contracts/UniswapV2Router02.sol/UniswapV2Router02.json");

// Connect to Ethereum network
const provider = new ethers.providers.JsonRpcProvider(API_URL_INFURA);

// Create a contract instance
const contract = new ethers.Contract(routerAddress, abi.abi, provider);

async function getWETH() {
  // Invoke the approve function
  const wethAddress = await contract.WETH();
  console.log("WETH address:", wethAddress);
  // WETH address: 0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6
}

getWETH();
