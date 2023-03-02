const { ethers } = require("ethers");
require("dotenv").config();
const { API_URL_INFURA, PRIVATE_KEY, uniswapV2FactoryAddress, tokenAAddress, tokenBAddress } = process.env;

// set up provider and signer
const provider = new ethers.providers.JsonRpcProvider(API_URL_INFURA);
const signer = new ethers.Wallet(PRIVATE_KEY, provider);

// set up contract interface
const uniswapV2FactoryABI = require("../artifacts/contracts/UniswapV2Factory.sol/UniswapV2Factory.json");
const uniswapV2FactoryContract = new ethers.Contract(uniswapV2FactoryAddress, uniswapV2FactoryABI.abi, signer);

async function createPair() {
    const tx = await uniswapV2FactoryContract.createPair(tokenAAddress, tokenBAddress);
    console.log("Transaction hash:", tx.hash);
    // Transaction hash: 0x64abdcfdebefdf3a1fd8408104bf07cab2b23b30cd462de0d316ac503482902f};
}
createPair();
