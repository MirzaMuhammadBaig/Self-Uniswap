# ABOUT THE SCRIPTS OF INVOKING FUNCTIONS

### createPair.js

- Invoke the createPair function of the UniswapV2 core contract using the ethers.js library:

### getPair.js

- Invoke the getPair function of the UniswapV2 core contract using the ethers.js library:
```
You should also replace the example tokenAAddress and tokenBAddress with the actual addresses of the tokens you want to get the pair address for. The getPair function returns the address of the pair that matches the specified token addresses, or 0x0000000000000000000000000000000000000000 if no such pair exists.
```

### setFeeTo.js

- Invoke the setFeeTo function of the UniswapV2 core contract using the ethers.js library:
```
The setFeeTo function sets the address that will receive the protocol fee on each trade.
```

### setFeeToSetter.js

- Invoke the setFeeToSetter function of the UniswapV2 core contract using the ethers.js library:
```
The setFeeToSetter function sets the address that is authorized to change the protocol fee and fee recipient.
```

### feeTo.js

- To invoke the feeTo function of the UniswapV2 core contract using the ethers.js library:
```
The feeTo function returns the current address that is set as the fee recipient for Uniswap trades. When you call this function, the result will be stored in the feeTo variable, which you can then log to the console.
```

### feeToSetter.js

- To invoke the feeToSetter function of the UniswapV2 core contract using the ethers.js library:
```
The feeToSetter function returns the current address that is authorized to change the protocol fee and fee recipient for Uniswap trades. When you call this function, the result will be stored in the feeToSetter variable, which you can then log to the console.
```

### allPairs.js

- To invoke the allPairs function of the UniswapV2 core contract using the ethers.js library:
```
The allPairsLength function returns the total number of pairs created on the UniswapV2 factory contract. You can use this value to loop through all the pairs and get their addresses using the allPairs function. When you run this code, it will log an array of pair addresses to the console.
```

### allPairsLength.js

- To invoke the allPairsLength function of the UniswapV2 core contract using the ethers.js library
```
The allPairsLength function returns the total number of pairs created on the UniswapV2 factory contract. When you call this function, the result will be stored in the allPairsLength variable, which you can then log to the console using the toNumber() method to convert the result to a JavaScript number.
```