# v2-Periphery-Deployment

This is the deployment folder of UniswapV2Router02 of uniswapV2 periphery.

1. First I install hardhat in our folder, using run:

```
npm install --save-dev hardhat
```

2. Then for the creation of hardhat files & folders & config file using:

```
npx hardhat
```

3. Some optimization according to my requirements.

4. Then install some libraries using:

```
npm i @uniswap/v2-core
npm i @uniswap/lib
```

5. After installation, for compile the contracts, run:

```
npx hardhat compile
```

4. After compile the contracts, for deploy on testnet(goerli), I run:

```
npx hardhat run --network goerli scripts/deploy.js
```

##### Transaction Hash:

- 0x9f9ecb608777832fac1a8be464130c623d21f3ed4a4f3a5d22957166d25fdcfa

##### Contract Address Of Contract:

- 0x36b1f5c335311013011175d5fb5363bec0e2a54d
