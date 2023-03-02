const { ethers } = require("ethers");
require("dotenv").config();
const { API_URL_INFURA, PRIVATE_KEY, uniswapV2FactoryAddress, fee_to} = process.env;

// set up provider and signer
const provider = new ethers.providers.JsonRpcProvider(API_URL_INFURA);
const signer = new ethers.Wallet(PRIVATE_KEY, provider);

// set up contract interface
const uniswapV2FactoryABI = require("../artifacts/contracts/UniswapV2Factory.sol/UniswapV2Factory.json");
const uniswapV2FactoryContract = new ethers.Contract(uniswapV2FactoryAddress, uniswapV2FactoryABI.abi, signer);

// call setFeeTo function
const feeToAddress = fee_to; // example feeTo address

async function setFeeTo() {
    const tx = await uniswapV2FactoryContract.setFeeTo(feeToAddress, {gasLimit:100000});
    console.log("Transaction hash:", tx.hash);
    // Transaction hash: 0x8d09210b0bb25c6bd6ee12efdfd28c3e5a67d84e405a9fc94cc51c6bd53612da
};
setFeeTo();
