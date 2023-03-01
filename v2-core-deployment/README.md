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

- 0xd105f429e82beaae7617429ee522dc1f1d59dc38be463b5356e4503748690be3

##### Contract address of UniswapV2Factory:

- 0xe2a55f3494e7956a9bbe258e5173378b5a053861

##### Goerli WETH Address:

- 0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6
