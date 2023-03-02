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

- 0x5060acfdcdb733670daff4135f805de61ea9b12668c634358e08c0f8bb3f7527

##### Contract address of UniswapV2Factory:

- 0xef030f901571359827ed7835b8fe95be5dff76ea

##### Goerli WETH Address:

- 0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6
