const { ethers } = require("ethers");
require("dotenv").config();
const { API_URL_INFURA, uniswapV2FactoryAddress } = process.env;

// set up provider
const provider = new ethers.providers.JsonRpcProvider(API_URL_INFURA);

// set up contract interface
const uniswapV2FactoryABI = require("../artifacts/contracts/UniswapV2ERC20.sol/UniswapV2ERC20.json");

const uniswapV2FactoryContract = new ethers.Contract(uniswapV2FactoryAddress, uniswapV2FactoryABI.abi, provider);

async function getInitCode() {
    const init_code_hash = await uniswapV2FactoryContract.INIT_CODE_HASH();
    console.log("INIT CODE HASH:", init_code_hash);
    // Pair address: 0x86B56B345b8F1bfbB5f422652506102877e80B20;
}
getInitCode();
