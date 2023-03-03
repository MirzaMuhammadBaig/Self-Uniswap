const { ethers } = require("ethers");
require("dotenv").config();

// imports from .env file
const { API_URL_INFURA, routerAddress, PRIVATE_KEY, TOKEN_1, user} = process.env;

// Define the contract ABI
const abi = require("../artifacts/contracts/UniswapV2Router02.sol/UniswapV2Router02.json");

// Connect to Ethereum network
const provider = new ethers.providers.JsonRpcProvider(API_URL_INFURA);
const wallet = new ethers.Wallet(PRIVATE_KEY, provider);

// Create a contract instance
const contract = new ethers.Contract(routerAddress, abi, wallet);

// Sets the function parameters
const amountOut = ethers.BigNumber.from('10000000000000000000'); // 10 tokens out
const path = ["ETH", TOKEN_1]; // ETH to token
const to = user; // recipient address
const deadline = Math.floor(Date.now() / 1000) + 60 * 10; // 10 minutes from now

async function swapETHForExactTokens() {
  const signer = contract.connect(wallet);
  // Invoke the approve function
  const tx = await signer.functions.swapETHForExactTokens(
    amountOut,
    path,
    to,
    deadline,
    { gasLimit: 400000, value: ethers.utils.parseEther("0.5") } // sending 1 ETH
  );
  console.log("Transaction hash:", tx.hash);
}

swapETHForExactTokens();
