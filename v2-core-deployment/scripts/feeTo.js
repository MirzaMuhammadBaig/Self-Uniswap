const { ethers } = require("ethers");
require("dotenv").config();
const { API_URL_INFURA, uniswapV2FactoryAddress} = process.env;

// set up provider
const provider = new ethers.providers.JsonRpcProvider(API_URL_INFURA);

// set up contract interface
const uniswapV2FactoryABI = require("../artifacts/contracts/UniswapV2Factory.sol/UniswapV2Factory.json");
const uniswapV2FactoryContract = new ethers.Contract(uniswapV2FactoryAddress, uniswapV2FactoryABI.abi, provider);

async function feeTo() {
    // call feeTo function
    const feeTo = await uniswapV2FactoryContract.feeTo();
    console.log("Fee recipient address:", feeTo);
    // Fee recipient address: 0x107F6A9104de8d364449aeb3598fE61Af0E1F4F5
};
feeTo();