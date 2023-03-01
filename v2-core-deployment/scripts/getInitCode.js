const { ethers } = require("ethers");
require("dotenv").config();
const { API_URL_INFURA, uniswapV2FactoryAddress } = process.env;

// set up provider
const provider = new ethers.providers.JsonRpcProvider(API_URL_INFURA);

// set up contract interface
const uniswapV2FactoryABI = require("../artifacts/contracts/UniswapV2Factory.sol/UniswapV2Factory.json");

const uniswapV2FactoryContract = new ethers.Contract(uniswapV2FactoryAddress, uniswapV2FactoryABI.abi, provider);

async function getInitCode() {
    const init_code_hash = await uniswapV2FactoryContract.INIT_CODE_HASH();
    console.log("INIT CODE HASH:", init_code_hash);
    // INIT CODE HASH: 0x7beb88f9bbd0ed45ee5366b951e02100d51484639e43d50441ad9504f0e67d9d
}
getInitCode();
