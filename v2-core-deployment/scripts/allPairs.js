const { ethers } = require("ethers");
require("dotenv").config();
const { API_URL_INFURA, uniswapV2FactoryAddress} = process.env;

// set up provider
const provider = new ethers.providers.JsonRpcProvider(API_URL_INFURA);

// set up contract interface
const uniswapV2FactoryABI = require("../artifacts/contracts/UniswapV2Factory.sol/UniswapV2Factory.json");
const uniswapV2FactoryContract = new ethers.Contract(uniswapV2FactoryAddress, uniswapV2FactoryABI.abi, provider);

async function allPairs() {
  // call allPairsLength function to get the total number of pairs
  const allPairsLength = await uniswapV2FactoryContract.allPairsLength();
  
  // loop through all pairs and get their addresses
  const pairs = [];
  for (let i = 0; i < allPairsLength; i++) {
    const pairAddress = await uniswapV2FactoryContract.allPairs(i);
    pairs.push(pairAddress);
  }
  console.log("Pairs:", pairs);
  // Pairs: [ '0x86B56B345b8F1bfbB5f422652506102877e80B20' ]
};
allPairs();