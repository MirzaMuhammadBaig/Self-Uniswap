# v2-Core-Deployment

This is the deployment folder of UniswapV2Factory of uniswapV2 core.

1. First I install hardhat in our folder, using run:
```
npm install --save-dev hardhat
```

2. Then for the creation of hardhat files & folders & config file using:
```
npx hardhat
```

3. Some optimization according to my requirements.

4. After installation, for compile the contracts, run:
```
npx hardhat compile
```

5. After compile the contracts, for deploy on testnet(goerli), I run:
```
npx hardhat run --network goerli scripts/deploy.js
```

##### Transaction Hash:
- 0x9ee7804153bb15fab282a80eeb871433d966ed0102af993529e9f8dde05aa829

##### Contract address of UniswapV2Factory:
- 0xA2dD0C12b7e2D0c1b1ac7Bb2fd0A8826CD58A3A3

##### Goerli WETH Address:
- 0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6
