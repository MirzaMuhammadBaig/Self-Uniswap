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
- 0xff528902bc29170b459f0189743501181a3d0242ff611eb4e4123051827ca728

##### Contract Address Of Contract:
- 0xbe72909609e9B7Fb1546BA46420b3482f89837a5