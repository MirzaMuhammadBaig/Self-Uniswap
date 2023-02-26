# ERC20 TOKENS CONTRACT DEPLOYMENT

### For deploy the contracts:

1. Install hardhat library, using run :
```
npm install --save-dev hardhat
```

2. Then for create files, run:
```
npx hardhat
```

3. Then optimize folder according to requirements & install some dependencies using:
```
npm i @nomiclabs/hardhat-ethers @nomiclabs/hardhat-waffle @openzeppelin/contracts dotenv
```

4. Then for compile the contracts, run:
```
npx hardhat compile
```

5. Then for deploy the contracts on goerli network:
```
npx hardhat run --network goerli scripts/deploy.js
```

##### Transaction Hash:
- TOKEN_1 tx_hash: 0xc0796b5e6a7ae9383ea7dcdf435cf81e1b1ddf8c02ec197cddd1502e4cdf8ee9
- TOKEN_2 tx_hash: 0x2490688136c56af0f5cf4663281442938d5e3c70e8f2c4c440c77a460373e505
- TOKEN_3 tx_hash: 0x7797987fbcea9161075d177b541be123a4805285c525833720727e649bfc158b
- TOKEN_4 tx_hash: 0x162bda375aa55ff9f97f189ab5c42f31d65c9f6335f3aa39f4e16aa405146c01

##### Contract Address Of Contract:
- TOKEN_1 contract deployed at: 0x1fE3503c0E8A239Ee6FbBe8139d66183792A0fE4
- TOKEN_2 contract deployed at: 0xC8f811d7E0ae3379A2a7904bD3Da5580d93616a3
- TOKEN_3 contract deployed at: 0xBAF4F7e468Be7F2D84f1Fa0a3aCf9De9871F3F83
- TOKEN_4 contract deployed at: 0x0DeBC4DA499141baEbc1AdaC1508Ea6Cc416d822