const { ethers } = require("ethers");
require("dotenv").config();
const { API_URL_INFURA, routerAddress} = process.env;

const provider = new ethers.providers.JsonRpcProvider(API_URL_INFURA);

const abi = require("../artifacts/contracts/UniswapV2Router02.sol/UniswapV2Router02.json");

const contract = new ethers.Contract(routerAddress, abi, provider);

async function getFactory() {
  const factoryAddress = await contract.factory();
  console.log("Factory address:", factoryAddress);
}

getFactory();
