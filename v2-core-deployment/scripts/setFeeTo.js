const { ethers } = require("ethers");
require("dotenv").config();

// imports from .env file
const { API_URL_INFURA, PRIVATE_KEY, uniswapV2FactoryAddress, fee_to } = process.env;

// Define the contract ABI
const uniswapV2FactoryABI = require("../artifacts/contracts/UniswapV2Factory.sol/UniswapV2Factory.json");

// set up provider and signer
const provider = new ethers.providers.JsonRpcProvider(API_URL_INFURA);
const wallet = new ethers.Wallet(PRIVATE_KEY, provider);

// Create a contract instance
const uniswapV2FactoryContract = new ethers.Contract(uniswapV2FactoryAddress, uniswapV2FactoryABI.abi, wallet);

const feeToAddress = fee_to; // feeTo address

async function setFeeTo() {
    const signer = uniswapV2FactoryContract.connect(wallet);
    // call setFeeTo function
    const tx = await signer.functions.setFeeTo(feeToAddress, { gasLimit: 100000 });
    console.log("Transaction hash:", tx.hash);
    // Transaction hash: 0x298505ff7bdf1fb17c2a617e3fbed0919cf9c467df4bc8b480d6b23f51c3cb6a
};
setFeeTo();
