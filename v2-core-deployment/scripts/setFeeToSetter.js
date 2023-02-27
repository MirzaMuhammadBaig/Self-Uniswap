const { ethers } = require("ethers");
require("dotenv").config();
const { API_URL_INFURA, PRIVATE_KEY, uniswapV2FactoryAddress, PUBLIC_KEY} = process.env;

// set up provider and signer
const provider = new ethers.providers.JsonRpcProvider(API_URL_INFURA);
const signer = new ethers.Wallet(PRIVATE_KEY, provider);

// set up contract interface
const uniswapV2FactoryABI = require("../artifacts/contracts/UniswapV2Factory.sol/UniswapV2Factory.json");
const uniswapV2FactoryContract = new ethers.Contract(uniswapV2FactoryAddress, uniswapV2FactoryABI.abi, signer);

const feeToAddress = PUBLIC_KEY; // example feeTo address

// call setFeeToSetter function
async function setFeeToSetter() {
    const tx = await uniswapV2FactoryContract.setFeeToSetter(feeToAddress, {gasLimit:100000});
    console.log("Transaction hash:", tx.hash);
    // Transaction hash: 0x06bf2dc38c357d60898dedf684c1e3f76c352fcdc32c4f62c207e5b81e3133d2
};
setFeeToSetter();
