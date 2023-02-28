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

##### Contract address of UniswapV2Router02:
- 0xbaa4974844E0Cc51d5086877073AF10D346B34b6

##### Goerli WETH Address:
- 0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6
