const { ethers } = require("ethers");
require("dotenv").config();
const { API_URL_INFURA, PRIVATE_KEY, routerAddress, factoryAddress, TOKEN_2 } = process.env;

// Define the contract ABI and address
const abi = require("../artifacts/contracts/TOKEN_2.sol/TOKEN_2.json");

// Connect to Ethereum network
const provider = new ethers.providers.JsonRpcProvider(API_URL_INFURA);
const signer = new ethers.Wallet(PRIVATE_KEY, provider);

// Create a contract instance
const tokenContract = new ethers.Contract(TOKEN_2, abi.abi, signer);

const amount = "5000000000000000000";

async function setAllowance() {
    // Invoke the setFactory function
    const tx = await tokenContract.approve(routerAddress, amount);
    // Wait for the transaction to be confirmed
    await tx.wait();
    console.log("Allowance approved!");
    // Tx hash is: 0x1c6a3e2b57bed18bf7392fa1529ffed6ca1c7ef6b7a02dcd8312dab28fd0544b
};
setAllowance();