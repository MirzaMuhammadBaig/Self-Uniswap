const { ethers } = require("ethers");
require("dotenv").config();
const { API_URL_INFURA, routerAddress, PRIVATE_KEY, tokenAAddress, tokenBAddress, user} = process.env;

const provider = new ethers.providers.JsonRpcProvider(API_URL_INFURA);
const wallet = new ethers.Wallet(PRIVATE_KEY, provider);

const abi = require("../artifacts/contracts/UniswapV2Router02.sol/UniswapV2Router02.json");

const contract = new ethers.Contract(routerAddress, abi.abi, wallet);

const amountADesired = ethers.utils.parseEther("10"); // 10 token A desired
const amountBDesired = ethers.utils.parseEther("5"); // 5 token B desired
const amountAMin = ethers.utils.parseEther("9"); // 9 token A minimum
const amountBMin = ethers.utils.parseEther("4"); // 4 token B minimum
const to = user; // recipient address
const deadline = Math.floor(Date.now() / 1000) + 60 * 10; // 10 minutes from now

async function addLiquidity() {
  const tx = await contract.addLiquidity(
    tokenAAddress,
    tokenBAddress,
    amountADesired,
    amountBDesired,
    amountAMin,
    amountBMin,
    to,
    deadline,
    { gasLimit: 100000, value: 0 } // no ETH to send
  );
  console.log("Transaction hash:", tx.hash);
}

addLiquidity();
