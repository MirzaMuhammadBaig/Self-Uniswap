const { ethers } = require("ethers");
require("dotenv").config();

// imports from .env file
const { API_URL_INFURA, uniswapV2FactoryAddress} = process.env;

// set up contract interface
const uniswapV2FactoryABI = require("../artifacts/contracts/UniswapV2Factory.sol/UniswapV2Factory.json");

// set up provider
const provider = new ethers.providers.JsonRpcProvider(API_URL_INFURA);

// Create a contract instance
const uniswapV2FactoryContract = new ethers.Contract(uniswapV2FactoryAddress, uniswapV2FactoryABI.abi, provider);

async function allPairsLength() {
    // call allPairsLength function to get the total number of pairs
    const allPairsLength = await uniswapV2FactoryContract.allPairsLength();
    console.log("Total number of pairs:", allPairsLength.toNumber());
    // Total number of pairs: 1
};
allPairsLength();