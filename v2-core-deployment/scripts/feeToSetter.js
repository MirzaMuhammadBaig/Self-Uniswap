const { ethers } = require("ethers");
require("dotenv").config();

// imports from .env file
const { API_URL_INFURA, uniswapV2FactoryAddress } = process.env;

// Define the contract ABI
const uniswapV2FactoryABI = require("../artifacts/contracts/UniswapV2Factory.sol/UniswapV2Factory.json");

// set up provider
const provider = new ethers.providers.JsonRpcProvider(API_URL_INFURA);

// set up contract interface
const uniswapV2FactoryContract = new ethers.Contract(uniswapV2FactoryAddress, uniswapV2FactoryABI.abi, provider);

async function feeToSetter() {
    // call feeToSetter function
    const feeToSetter = await uniswapV2FactoryContract.feeToSetter();
    console.log("Fee setter address:", feeToSetter);
    // Fee setter address: 0xb189d95c7CbAA430Cd835c1191A5CF60E008A1b1
};
feeToSetter();