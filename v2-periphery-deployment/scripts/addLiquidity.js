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
const amountADesired = ethers.BigNumber.from('10000000000000000000'); // 10 token A desired
const amountBDesired = ethers.BigNumber.from('5000000000000000000'); // 5 token B desired
const amountAMin = ethers.BigNumber.from('9000000000000000000'); // 9 token A minimum
const amountBMin = ethers.BigNumber.from('4000000000000000000'); // 4 token B minimum
const to = user; // recipient address
const deadline = Math.floor(Date.now() / 1000) + 60 * 10; // 10 minutes from now

async function addLiquidity() {
  const signer = contract.connect(wallet);
  // Invoke the approve function
  const tx = await signer.functions.addLiquidity(
    tokenAAddress,
    tokenBAddress,
    amountADesired,
    amountBDesired,
    amountAMin,
    amountBMin,
    to,
    deadline,
    { gasLimit: 100000 }
  );
  console.log("Transaction hash:", tx.hash);
  // Transaction hash: 0x51921ea78d2fc7a48e2af16c57099ff9704a0ac3f52f7dcf93c0ed627774dd95
}

addLiquidity();
