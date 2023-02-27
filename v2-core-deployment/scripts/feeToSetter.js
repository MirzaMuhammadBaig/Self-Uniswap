const { ethers } = require("ethers");
require("dotenv").config();
const { API_URL_INFURA, uniswapV2FactoryAddress} = process.env;

// set up provider
const provider = new ethers.providers.JsonRpcProvider(API_URL_INFURA);

// set up contract interface
const uniswapV2FactoryABI = require("../artifacts/contracts/UniswapV2Factory.sol/UniswapV2Factory.json");
const uniswapV2FactoryContract = new ethers.Contract(uniswapV2FactoryAddress, uniswapV2FactoryABI.abi, provider);

async function feeToSetter() {    
    // call feeToSetter function
    const feeToSetter = await uniswapV2FactoryContract.feeToSetter();
    console.log("Fee setter address:", feeToSetter);
    // Fee setter address: 0x107F6A9104de8d364449aeb3598fE61Af0E1F4F5
};
feeToSetter();