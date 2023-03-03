const { ethers } = require("ethers");
require("dotenv").config();

// imports from .env file
const { API_URL_INFURA, routerAddress, PRIVATE_KEY, TOKEN_1, user } = process.env;

// Define the contract ABI
const abi = require("../artifacts/contracts/UniswapV2Router02.sol/UniswapV2Router02.json");

// Connect to Ethereum network
const provider = new ethers.providers.JsonRpcProvider(API_URL_INFURA);
const wallet = new ethers.Wallet(PRIVATE_KEY, provider);

// Create a contract instance
const contract = new ethers.Contract(routerAddress, abi.abi, wallet);

// create the parameters
const amountIn = ethers.BigNumber.from('300000000000000000');
console.log("amountIn", amountIn);
const amountOutMin = ethers.BigNumber.from('200000000000000000');
console.log("amountOutMin", amountOutMin);
const path = [TOKEN_1, tokenBAddress]; // token1 to token2
console.log("path", path);
const to = user; // recipient address
console.log("to", to);
const deadline = Math.floor(Date.now() / 1000) + 60 * 10; // 10 minutes from now
console.log("deadline", deadline);

async function swapTokensForTokens() {
  const signer = contract.connect(wallet);
  // Invoke the setFactory function
  const tx = await signer.functions.swapExactTokensForTokens(
    amountIn,
    amountOutMin,
    path,
    to,
    deadline,
    { gasLimit: 600000 }
  );
  console.log("Transaction successfull & Transaction hash is:", tx.hash);
  // Transaction successfull & Transaction hash is: 0x97634ada78bfa996d7f703d921a801c68530cb6c57b53d542eb8a08f9e3a0718
}

swapTokensForTokens();
