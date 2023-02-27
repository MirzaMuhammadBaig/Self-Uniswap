const { ethers } = require("ethers");
require("dotenv").config();
const { API_URL_INFURA, routerAddress, PRIVATE_KEY, tokenAAddress, tokenBAddress, user} = process.env;

const provider = new ethers.providers.JsonRpcProvider(API_URL_INFURA);
const wallet = new ethers.Wallet(PRIVATE_KEY, provider);

const abi = require("../artifacts/contracts/UniswapV2Router02.sol/UniswapV2Router02.json");

const contract = new ethers.Contract(routerAddress, abi, wallet);

const amountOut = ethers.utils.parseEther("10"); // 10 tokens out
const path = ["ETH", tokenAAddress]; // ETH to token
const to = user; // recipient address
const deadline = Math.floor(Date.now() / 1000) + 60 * 10; // 10 minutes from now

async function swapETHForExactTokens() {
  const tx = await contract.swapETHForExactTokens(
    amountOut,
    path,
    to,
    deadline,
    { gasLimit: 400000, value: ethers.utils.parseEther("1") } // sending 1 ETH
  );
  console.log("Transaction hash:", tx.hash);
}

swapETHForExactTokens();
