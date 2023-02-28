const { ethers } = require("ethers");
require("dotenv").config();
const { API_URL_INFURA, PRIVATE_KEY, routerAddress} = process.env;

// Define the contract ABI and address
const routerABI = require("../artifacts/contracts/UniswapV2Router02.sol/UniswapV2Router02.json");

// Connect to Ethereum network
const provider = new ethers.providers.JsonRpcProvider(API_URL_INFURA);
const signer = new ethers.Wallet(PRIVATE_KEY, provider);

// Create a contract instance
const routerContract = new ethers.Contract(routerAddress, routerABI.abi, signer);

// Define the new factory address
const newFactoryAddress = "<address-of-new-UniswapV2Factory-contract>";

async function setFactory() {
    // Invoke the setFactory function
    const tx = await routerContract.setFactory(newFactoryAddress); 
    // Wait for the transaction to be confirmed
    await tx.wait();
    console.log("Factory address updated!");
};
setFactory();