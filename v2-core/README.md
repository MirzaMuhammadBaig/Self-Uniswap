# ABOUT UNISWAP-V2 CORE CONTRACTS:

## After deploying the UniswapV2 Factory contract, the following functions become available:

### createPair(address tokenA, address tokenB) 
- This function creates a new pair for the two tokens specified. The pair will be used for trading on UniswapV2.

### getPair(address tokenA, address tokenB) 
- This function returns the address of the pair created for the two tokens specified.

### setFeeTo(address _feeTo) 
- This function sets the address to which trading fees will be sent.

### setFeeToSetter(address _feeToSetter) 
- This function sets the address that can change the feeTo address.

### feeTo() 
- This function returns the address to which trading fees will be sent.

### feeToSetter() 
- This function returns the address that can change the feeTo address.

### allPairs 
- This variable is an array that contains the addresses of all the pairs that have been created through the createPair() function.

### allPairsLength 
- This variable is an integer that represents the length of the allPairs array.

## Here's a guide for each function:

### createPair(address tokenA, address tokenB) 
- This function creates a new pair for the two tokens specified. The function takes two arguments, which are the addresses of the two tokens to be paired. The function then checks if the pair already exists, and if not, it creates a new pair and returns the pair's address.

### getPair(address tokenA, address tokenB) 
- This function takes two arguments, which are the addresses of the two tokens that form the pair. It then returns the address of the pair that was created for these tokens. If the pair doesn't exist, the function returns the zero address.

### setFeeTo(address _feeTo) 
- This function takes one argument, which is the address to which trading fees will be sent. The address is stored in the contract state variable, and all trading fees will be sent to this address.

### setFeeToSetter(address _feeToSetter) 
- This function takes one argument, which is the address that can change the feeTo address. This is used as a security measure to prevent unauthorized changes to the feeTo address. Only the address set by this function can change the feeTo address.

### feeTo() 
- This function returns the address to which trading fees will be sent. This is the address that was set by the setFeeTo() function.

### feeToSetter() 
- This function returns the address that can change the feeTo address. This is the address that was set by the setFeeToSetter() function.

### allPairs 
- This variable is an array that contains the addresses of all the pairs that have been created through the createPair() function. Whenever a new pair is created, its address is added to the allPairs array. This variable allows anyone to see a list of all the pairs that have been created through the UniswapV2 Factory contract.

### allPairsLength 
- This variable is an integer that represents the length of the allPairs array. Whenever a new pair is created, the allPairsLength variable is incremented by one. This variable allows anyone to easily determine the number of pairs that have been created through the UniswapV2 Factory contract.