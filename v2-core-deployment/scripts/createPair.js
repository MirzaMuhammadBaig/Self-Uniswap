const { ethers } = require("ethers");
require("dotenv").config();
const { API_URL_INFURA, PRIVATE_KEY, uniswapV2FactoryAddress, tokenAAddress, tokenBAddress} = process.env;

// set up provider and signer
const provider = new ethers.providers.JsonRpcProvider(API_URL_INFURA);
const signer = new ethers.Wallet(PRIVATE_KEY, provider);

// set up contract interface
const uniswapV2FactoryABI = require("../artifacts/contracts/UniswapV2Factory.sol/UniswapV2Factory.json");
const uniswapV2FactoryContract = new ethers.Contract(uniswapV2FactoryAddress, uniswapV2FactoryABI.abi, signer);

// Set custom nonce
const customNonce = 606;

// Set up transaction parameters
const txParams = {
    to: '0xRECIPIENTADDRESS',
    value: ethers.utils.parseEther('1.0'),
    nonce: customNonce,
    gasLimit: 21000,
    gasPrice: ethers.utils.parseUnits('10', 'gwei')
};

async function createPair() {
    const getNounce = await signer.getTransactionCount()
    console.log("getTransactionCount",getNounce);
    const tx = await uniswapV2FactoryContract.createPair(tokenAAddress, tokenBAddress);
    console.log("Transaction hash:", tx.hash);
    // Transaction hash: 0xa5b93d84c8a2ba438da07f684e2c5da1c610c015b19dd2898c88f6f7c1cb6169};
}
createPair();
