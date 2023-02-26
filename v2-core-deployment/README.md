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
- 0xb3ac4e2697c11938a17cf5e462ce0894236990f1a748bc8ade236d5c0f214cc7

##### Contract Address Of Contract:
- 0xb273eE85699c47ec19A435eA0E21e0a81630549d