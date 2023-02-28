const { ethers } = require("ethers");
require("dotenv").config();
const { API_URL_INFURA, PRIVATE_KEY, routerAddress} = process.env;

const abi = require("../artifacts/contracts/UniswapV2Router02.sol/UniswapV2Router02.json");

const provider = new ethers.providers.JsonRpcProvider(API_URL_INFURA);
const wallet = new ethers.Wallet(PRIVATE_KEY, provider);


const contract = new ethers.Contract(routerAddress, abi.abi, wallet);

const newRevertMsg = "New revert message";

async function setRevertMsg() {
  const tx = await contract.setRevertMsg(newRevertMsg);
  const receipt = await tx.wait();
  console.log("Transaction hash:", tx.hash);
  console.log("Transaction confirmed in block:", receipt.blockNumber);
}

setRevertMsg();
