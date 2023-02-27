const { ethers } = require("ethers");
require("dotenv").config();
const { API_URL_INFURA, PRIVATE_KEY, uniswapV2FactoryAddress, PUBLIC_KEY} = process.env;

// set up provider and signer
const provider = new ethers.providers.JsonRpcProvider(API_URL_INFURA);
const signer = new ethers.Wallet(PRIVATE_KEY, provider);

// set up contract interface
const uniswapV2FactoryABI = require("../artifacts/contracts/UniswapV2Factory.sol/UniswapV2Factory.json");
const uniswapV2FactoryContract = new ethers.Contract(uniswapV2FactoryAddress, uniswapV2FactoryABI.abi, signer);

// call setFeeTo function
const feeToAddress = PUBLIC_KEY; // example feeTo address

async function setFeeTo() {
    const tx = await uniswapV2FactoryContract.setFeeTo(feeToAddress, {gasLimit:100000});
    console.log("Transaction hash:", tx.hash);
    // Transaction hash: 0x056eb76b68d65e0749698381422c8b971e1d3d3a4f8ab114eb24b4777744c001
};
setFeeTo();
