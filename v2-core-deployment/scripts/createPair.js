const { ethers } = require("ethers");
require("dotenv").config();
const { API_URL_INFURA, PRIVATE_KEY, UniswapV2FactoryContract, tokenAAddress, tokenBAddress} = process.env;

// set up provider and signer
const provider = new ethers.providers.JsonRpcProvider(API_URL_INFURA);
const signer = new ethers.Wallet(PRIVATE_KEY, provider);

// set up contract interface
const uniswapV2FactoryABI = require("../artifacts/contracts/UniswapV2Factory.sol/UniswapV2Factory.json");
const uniswapV2FactoryContract = new ethers.Contract(UniswapV2FactoryContract, uniswapV2FactoryABI, signer);

const tx = await uniswapV2FactoryContract.createPair(tokenAAddress, tokenBAddress);
console.log("Transaction hash:", tx.hash);
