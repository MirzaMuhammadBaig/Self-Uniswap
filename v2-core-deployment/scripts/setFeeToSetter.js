const { ethers } = require("ethers");
require("dotenv").config();

// imports from .env file
const { API_URL_INFURA, PRIVATE_KEY, uniswapV2FactoryAddress, PUBLIC_KEY } = process.env;

// Define the contract ABI
const uniswapV2FactoryABI = require("../artifacts/contracts/UniswapV2Factory.sol/UniswapV2Factory.json");

// set up provider and signer
const provider = new ethers.providers.JsonRpcProvider(API_URL_INFURA);
const wallet = new ethers.Wallet(PRIVATE_KEY, provider);

// Create a contract instance
const uniswapV2FactoryContract = new ethers.Contract(uniswapV2FactoryAddress, uniswapV2FactoryABI.abi, wallet);

const feeToAddress = PUBLIC_KEY; // example feeTo address

// call setFeeToSetter function
async function setFeeToSetter() {
    const signer = uniswapV2FactoryContract.connect(wallet);
    const tx = await signer.functions.setFeeToSetter(feeToAddress, { gasLimit: 100000 });
    console.log("Transaction hash:", tx.hash);
};
setFeeToSetter();
