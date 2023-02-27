const { ethers } = require("ethers");
require("dotenv").config();
const { API_URL_INFURA, PRIVATE_KEY, uniswapV2FactoryAddress, PUBLIC_KEY} = process.env;

// set up provider and signer
const provider = new ethers.providers.JsonRpcProvider(API_URL_INFURA);
const signer = new ethers.Wallet(PRIVATE_KEY, provider);

// set up contract interface
const uniswapV2FactoryABI = require("../artifacts/contracts/UniswapV2Factory.sol/UniswapV2Factory.json");
const uniswapV2FactoryContract = new ethers.Contract(uniswapV2FactoryAddress, uniswapV2FactoryABI.abi, signer);

async function setFeeToSetter() {
    const tx = await uniswapV2FactoryContract.setFeeToSetter(PUBLIC_KEY, {gasLimit:100000});
    console.log("Transaction hash:", tx.hash);
    // Transaction hash: 0xbcd9e4cee62cc6db3328954e11a78676d3d2dae115c5393a726c3f1cc60ee3ab
    // Transaction hash: 0x617f02a760072538c504a611665af38589bca4cde4414402fb78390582198de1
    // Transaction hash: 0xeef5fd02e2cf8b5d1a0c7cffba98cae3a8bcfac7586ed1e4abb63b7bdcaf699e
};
setFeeToSetter();
