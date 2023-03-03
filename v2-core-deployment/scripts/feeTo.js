const { ethers } = require("ethers");
require("dotenv").config();

// imports from .env file
const { API_URL_INFURA, uniswapV2FactoryAddress } = process.env;

// Define the contract ABI
const uniswapV2FactoryABI = require("../artifacts/contracts/UniswapV2Factory.sol/UniswapV2Factory.json");

// Connect to Ethereum network
const provider = new ethers.providers.JsonRpcProvider(API_URL_INFURA);

// Create a contract instance
const uniswapV2FactoryContract = new ethers.Contract(uniswapV2FactoryAddress, uniswapV2FactoryABI.abi, provider);

async function feeTo() {
    // call feeTo function
    const feeTo = await uniswapV2FactoryContract.feeTo();
    console.log("Fee recipient address:", feeTo);
    // Fee recipient address: 0xb189d95c7CbAA430Cd835c1191A5CF60E008A1b1
};
feeTo();