const { ethers } = require("ethers");
require("dotenv").config();

// imports from .env file
const { API_URL_INFURA, routerAddress, PRIVATE_KEY, TOKEN_1, TOKEN_2, user} = process.env;

// Define the contract ABI
const abi = require("../artifacts/contracts/UniswapV2Router02.sol/UniswapV2Router02.json");

// Connect to Ethereum network
const provider = new ethers.providers.JsonRpcProvider(API_URL_INFURA);
const wallet = new ethers.Wallet(PRIVATE_KEY, provider);

// Create a contract instance
const contract = new ethers.Contract(routerAddress, abi.abi, wallet);

// Sets the function parameters
const amountOut = ethers.BigNumber.from('500000000000000000'); // 0.5 tokens
const amountInMax = ethers.BigNumber.from('1000000000000000000'); // maximum 1 token in
const path = [TOKEN_1, TOKEN_2]; // token1 to token2
const to = user; // recipient address
const deadline = Math.floor(Date.now() / 1000) + 60 * 10; // 10 minutes from now

async function swapTokensForExactTokens() {
  const signer = contract.connect(wallet);
  // Invoke the approve function
  const tx = await signer.functions.swapTokensForExactTokens(
    amountOut,
    amountInMax,
    path,
    to,
    deadline,
    { gasLimit: 400000 }
  );
  console.log("Transaction hash:", tx.hash);
  // Transaction hash: 0x8be7c5d301ce94603efb6c2a5bf3114ed7eb9978dd719dea19bdf03d493b8e4e
}

swapTokensForExactTokens();
