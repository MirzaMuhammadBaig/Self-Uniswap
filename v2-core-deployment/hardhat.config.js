require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");
require("dotenv").config();

const { API_URL_INFURA, PRIVATE_KEY } = process.env;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.5.16",
  defaultNetwork: "goerli",
  networks: {
    hardhat: {},
    goerli: {
      url: API_URL_INFURA,
      accounts: [`0x${PRIVATE_KEY}`],
      gasMultiplier: 1,
      gas: 210000,
      gasPrice: 800000000,
      timeout: 20000,
      saveDeployments: true,
      chainId: 5,
    },
  },
};