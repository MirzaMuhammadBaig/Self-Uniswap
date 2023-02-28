const { ethers } = require("ethers");
require("dotenv").config();
const { API_URL_INFURA, routerAddress, tokenAAddress, WETH_address} = process.env;

// Initialize provider and signer
const provider = new ethers.providers.JsonRpcProvider(API_URL_INFURA);

// Initialize UniswapV2Router02 contract instance
const routerAbi = require("../artifacts/contracts/UniswapV2Router02.sol/UniswapV2Router02.json");
const routerContract = new ethers.Contract(routerAddress, routerAbi.abi, provider);

// Example trade: Swap 1 ETH for DAI
const amountIn = ethers.utils.parseEther("0.0000000000000001");
console.log(amountIn);
const path = [WETH_address, tokenAAddress];

// Call getAmountsOut function
routerContract.getAmountsOut(amountIn, path)
  .then(amounts => {
    console.log("Expected output amounts:", amounts.map(a => ethers.utils.formatEther(a)));
  })
  .catch(error => {
    console.error("Error calling getAmountsOut:", error);
  });
