const { ethers } = require("ethers");
require("dotenv").config();
const { API_URL_INFURA, PRIVATE_KEY, uniswapV2FactoryAddress, tokenAAddress, tokenBAddress} = process.env;

// set up provider
const provider = new ethers.providers.JsonRpcProvider(API_URL_INFURA);

// set up contract interface
const uniswapV2FactoryABI = require("../artifacts/contracts/UniswapV2Factory.sol/UniswapV2Factory.json");

const uniswapV2FactoryContract = new ethers.Contract(uniswapV2FactoryAddress, uniswapV2FactoryABI, provider);

const pairAddress = await uniswapV2FactoryContract.getPair(tokenAAddress, tokenBAddress);
console.log("Pair address:", pairAddress);
