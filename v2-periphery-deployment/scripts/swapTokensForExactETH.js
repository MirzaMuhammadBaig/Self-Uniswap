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
const amountOut = ethers.BigNumber.from('1000000000000000000'); // 1 ETH out
const amountInMax = ethers.BigNumber.from('10000000000000000000'); // maximum 10 tokens in
const path = [TOKEN_1, "ETH"]; // token to ETH
const to = user; // recipient address
const deadline = Math.floor(Date.now() / 1000) + 60 * 10; // 10 minutes from now

async function swapTokensForExactETH() {
  const signer = contract.connect(wallet);
  // Invoke the approve function
  const tx = await signer.functions.swapTokensForExactETH(
    amountOut,
    amountInMax,
    path,
    to,
    deadline,
    { gasLimit: 400000 }
  );
  console.log("Transaction hash:", tx.hash);
}

swapTokensForExactETH();
