const { ethers } = require("ethers");
require("dotenv").config();
const { API_URL_INFURA, PRIVATE_KEY, uniswapV2FactoryAddress, tokenAAddress, tokenBAddress} = process.env;

// set up provider and signer
const provider = new ethers.providers.JsonRpcProvider(API_URL_INFURA);
const signer = new ethers.Wallet(PRIVATE_KEY, provider);

// set up contract interface
const uniswapV2FactoryABI = require("../artifacts/contracts/UniswapV2Factory.sol/UniswapV2Factory.json");
const uniswapV2FactoryContract = new ethers.Contract(uniswapV2FactoryAddress, uniswapV2FactoryABI.abi, signer);

async function createPair() {
    const tx = await uniswapV2FactoryContract.createPair(tokenAAddress, tokenBAddress);
    console.log("Transaction hash:", tx.hash);
    // Transaction hash: 0xcf3c4d1f9ee8a0bf33f5ddb28e611478fcf2b56619224ec7e0c87efb2441260a
};
createPair();
