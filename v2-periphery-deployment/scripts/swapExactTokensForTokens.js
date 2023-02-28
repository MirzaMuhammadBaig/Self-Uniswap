const { ethers } = require("ethers");
require("dotenv").config();
const { API_URL_INFURA, routerAddress, PRIVATE_KEY, tokenAAddress, tokenBAddress, user } = process.env;

const provider = new ethers.providers.JsonRpcProvider(API_URL_INFURA);
const wallet = new ethers.Wallet(PRIVATE_KEY, provider);

const abi = require("../artifacts/contracts/UniswapV2Router02.sol/UniswapV2Router02.json");

const contract = new ethers.Contract(routerAddress, abi.abi, wallet);

const amountIn = ethers.utils.parseEther("1"); // 1 token
const amountOutMin = ethers.utils.parseEther("0.5"); // minimum 0.5 tokens out
const path = [tokenAAddress, tokenBAddress]; // token1 to token2
const to = user; // recipient address
const deadline = Math.floor(Date.now() / 1000) + 60 * 10; // 10 minutes from now

async function swapTokensForTokens() {
  const tx = await contract.swapExactTokensForTokens(
    amountIn,
    amountOutMin,
    path,
    to,
    deadline,
    { gasLimit: 6000000 }
  );
  console.log("Transaction successfull & Transaction hash is:", tx.hash);
  // Transaction successfull & Transaction hash is: 0x79cffbe3dd5251afbf6100d8b459b558e48f1c26694574f7a1dc657e7d7060c6
}

swapTokensForTokens();
