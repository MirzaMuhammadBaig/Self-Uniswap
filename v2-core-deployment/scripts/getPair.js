const { ethers } = require("ethers");
require("dotenv").config();

// imports from .env file
const { API_URL_INFURA, uniswapV2FactoryAddress, TOKEN_1, TOKEN_2 } = process.env;

// Define the contract ABI
const uniswapV2FactoryABI = require("../artifacts/contracts/UniswapV2Factory.sol/UniswapV2Factory.json");

// set up provider
const provider = new ethers.providers.JsonRpcProvider(API_URL_INFURA);

// Create a contract instance
const uniswapV2FactoryContract = new ethers.Contract(uniswapV2FactoryAddress, uniswapV2FactoryABI.abi, provider);

async function getPair() {
    // Invoke the approve function
    const pairAddress = await uniswapV2FactoryContract.getPair(TOKEN_1, TOKEN_2);
    console.log("Pair address:", pairAddress);
    // Pair address: 0xde21b10fAf1FB9C6351a65DbD9088746b098b649
}
getPair();
