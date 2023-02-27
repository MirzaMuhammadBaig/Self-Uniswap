const { ethers } = require("ethers");
require("dotenv").config();
const { API_URL_INFURA, routerAddress, tokenAAddress} = process.env;

const provider = new ethers.providers.JsonRpcProvider(API_URL_INFURA);

// Define the contract ABI and address
const abi = require("../artifacts/contracts/UniswapV2Router02.sol/UniswapV2Router02.json");

const contract = new ethers.Contract(routerAddress, abi, provider);

const amountIn = ethers.utils.parseEther("1"); // 1 ETH
const path = [ethers.constants.AddressZero, tokenAAddress]; // ETH to token

async function getAmountsOut() {
  const amounts = await contract.getAmountsOut(amountIn, path);
  const amountOut = amounts[amounts.length - 1]; // the last element in the array is the output amount
  console.log("Amount out:", ethers.utils.formatEther(amountOut));
}

getAmountsOut();
