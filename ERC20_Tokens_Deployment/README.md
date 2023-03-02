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
- TOKEN_1 tx_hash: 0x65a5f589646b687fc5c5623e0cb5983acec570703bbb1dc1efe9d45d15509372
- TOKEN_2 tx_hash: 0x8ffba602a30d1d58403f44c3de8b156a9fac6ca3dd1c3ea5e824691be3893ce1
- TOKEN_3 tx_hash: 0x8a72c6ab922a927958dc00005f341c7e3bd3b63d780dad06b1a03a9cf5603992
- TOKEN_4 tx_hash: 0x7c22d82bd6085b451da4cdf74cb844deb2a8d3f8d95634960019517a1a6b231c

##### Contract Address Of Contract:
- TOKEN_1 contract deployed at: 0xa928926721178a299328377fdb72a250248a822a
- TOKEN_2 contract deployed at: 0x1710d5f0d33f745f943ce8990e49774b34aacb5e
- TOKEN_3 contract deployed at: 0x95463eafa38d7c4e0d9d143152f9bdd8518ccf66
- TOKEN_4 contract deployed at: 0xdb11d2896c96181639639fdda9400c806c5f3eab