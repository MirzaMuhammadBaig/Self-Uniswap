const { ethers } = require("ethers");
require("dotenv").config();

// imports from .env file
const { API_URL_INFURA, routerAddress, PRIVATE_KEY, tokenAAddress, tokenBAddress, user} = process.env;

// Define the contract ABI
const abi = require("../artifacts/contracts/UniswapV2Router02.sol/UniswapV2Router02.json");

// Connect to Ethereum network
const provider = new ethers.providers.JsonRpcProvider(API_URL_INFURA);
const wallet = new ethers.Wallet(PRIVATE_KEY, provider);

// Create a contract instance
const contract = new ethers.Contract(routerAddress, abi.abi, wallet);

// Sets the function parameters
const amountOutMin = ethers.BigNumber.from('500000000000000000'); // minimum 0.5 tokens out
const path = ["ETH", tokenAAddress]; // ETH to token
const to = user; // recipient address
const deadline = Math.floor(Date.now() / 1000) + 60 * 10; // 10 minutes from now

async function swapExactETHForTokens() {
  const signer = contract.connect(wallet);
  // Invoke the approve function
  const tx = await signer.functions.swapExactETHForTokens(
    amountOutMin,
    path,
    to,
    deadline,
    { value: ethers.utils.parseEther("0.5"), gasLimit: 400000 }
  );
  console.log("Transaction hash:", tx.hash);
  //Transaction hash: 0x99069b41c487ec1e6f428bac8065fba3ab3b981b853c14c8b2ba846d2b02abe5
}

swapExactETHForTokens();
