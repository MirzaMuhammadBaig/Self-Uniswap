const { ethers } = require("ethers");
require("dotenv").config();
const { API_URL_INFURA, routerAddress, PRIVATE_KEY, tokenAAddress, tokenBAddress, user} = process.env;

const provider = new ethers.providers.JsonRpcProvider(API_URL_INFURA);
const wallet = new ethers.Wallet(PRIVATE_KEY, provider);

const abi = require("../artifacts/contracts/UniswapV2Router02.sol/UniswapV2Router02.json");

const contract = new ethers.Contract(routerAddress, abi, wallet);

const amountOut = ethers.utils.parseEther("1"); // 1 ETH out
const amountInMax = ethers.utils.parseEther("10"); // maximum 10 tokens in
const path = [tokenAAddress, "ETH"]; // token to ETH
const to = user; // recipient address
const deadline = Math.floor(Date.now() / 1000) + 60 * 10; // 10 minutes from now

async function swapTokensForExactETH() {
  const tx = await contract.swapTokensForExactETH(
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
