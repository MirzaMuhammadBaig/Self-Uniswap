const { ethers } = require("ethers");
require("dotenv").config();

// imports from .env file
const { API_URL_INFURA, PRIVATE_KEY, routerAddress, factoryAddress, TOKEN_4 } = process.env;

// Define the contract ABI and address
const abi = require("../artifacts/contracts/TOKEN_4.sol/TOKEN_4.json");

// Connect to Ethereum network
const provider = new ethers.providers.JsonRpcProvider(API_URL_INFURA);
const wallet = new ethers.Wallet(PRIVATE_KEY, provider);

// Create a contract instance
const tokenContract = new ethers.Contract(TOKEN_4, abi.abi, wallet);

const amount = "5000000000000000000";

async function setAllowance() {
    const signer = tokenContract.connect(wallet);
    // Invoke the approve function
    const tx = await signer.functions.approve(routerAddress, amount);
    // Wait for the transaction to be confirmed
    await tx.wait();
    console.log("Allowance approved!");
    // Tx hash is: 0x55ec4d740131ef1f960de12a89e39fc09cd979376d0fb4eb8a027675b79545da
};
setAllowance();