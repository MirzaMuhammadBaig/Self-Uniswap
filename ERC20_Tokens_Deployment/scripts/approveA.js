const { ethers } = require("ethers");
require("dotenv").config();

// imports from .env file
const { API_URL_INFURA, PRIVATE_KEY, routerAddress, TOKEN_1 } = process.env;

// Define the contract ABI
const abi = require("../artifacts/contracts/TOKEN_1.sol/TOKEN_1.json");

// Connect to Ethereum network
const provider = new ethers.providers.JsonRpcProvider(API_URL_INFURA);
const wallet = new ethers.Wallet(PRIVATE_KEY, provider);

// Create a contract instance
const tokenContract = new ethers.Contract(TOKEN_1, abi.abi, wallet);

const amount = "5000000000000000000";

async function setAllowance() {
    const signer = tokenContract.connect(wallet);
    // Invoke the approve function
    const tx = await signer.functions.approve(routerAddress, amount);
    // Wait for the transaction to be confirmed
    await tx.wait();
    console.log("Allowance approved!");
    // Tx hash is: 0x9f21d21cd06f87a95669727dd7d99aa78f929a0542f4f0b738d5795d273d0a29
};
setAllowance();