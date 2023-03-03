const { ethers } = require("ethers");
require("dotenv").config();

// imports from .env file
const { API_URL_INFURA, PRIVATE_KEY, uniswapV2FactoryAddress, tokenAAddress, tokenBAddress } = process.env;

// Define the contract ABI
const uniswapV2FactoryABI = require("../artifacts/contracts/UniswapV2Factory.sol/UniswapV2Factory.json");

// Connect to Ethereum network
const provider = new ethers.providers.JsonRpcProvider(API_URL_INFURA);
const wallet = new ethers.Wallet(PRIVATE_KEY, provider);

// Create a contract instance
const uniswapV2FactoryContract = new ethers.Contract(uniswapV2FactoryAddress, uniswapV2FactoryABI.abi, wallet);

async function createPair() {
    const signer = uniswapV2FactoryContract.connect(wallet);
    // Invoke the approve function
    const tx = await signer.functions.createPair(tokenAAddress, tokenBAddress);
    console.log("Transaction hash:", tx.hash);
    // Transaction hash: 0x64abdcfdebefdf3a1fd8408104bf07cab2b23b30cd462de0d316ac503482902f};
}
createPair();
