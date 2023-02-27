# AOUTE THE SCRIPTS OF INVOKING FUNCTIONS

### To invoke the setRouter1 function using ether.js:

```
This code creates a new instance of the ethers.Contract object using the contract address of the UniswapV2Router02 contract and the ABI (Application Binary Interface) of the setRouter1 function. It also creates a new ethers.Wallet object using your private key to sign the transaction.

Then, the setRouter1 function is defined, which sends a transaction to the setRouter1 function on the UniswapV2Router02 contract with the new router address as a parameter.

When you run this code, it should send a transaction to the Ethereum network to update the router address of the UniswapV2Router02 contract. The transaction hash and confirmation block number will be logged to the console. Note that you will need to have enough Ether in your wallet to cover the gas fees for the transaction.
```

### To invoke the setRevertMsg function using ether.js:

```
This code creates a new instance of the ethers.Contract object using the contract address of the UniswapV2Router02 contract and the ABI (Application Binary Interface) of the setRevertMsg function. It also creates a new ethers.Wallet object using your private key to sign the transaction.

Then, the setRevertMsg function is defined, which sends a transaction to the setRevertMsg function on the UniswapV2Router02 contract with the new custom revert message as a parameter.

When you run this code, it should send a transaction to the Ethereum network to update the custom revert message of the UniswapV2Router02 contract. The transaction hash and confirmation block number will be logged to the console. Note that you will need to have enough Ether in your wallet to cover the gas fees for the transaction.
```

### To invoke the setPairInitHash function using ether.js:

```
This code creates a new instance of the ethers.Contract object using the contract address of the UniswapV2Router02 contract and the ABI (Application Binary Interface) of the setPairInitHash function. It also creates a new ethers.Wallet object using your private key to sign the transaction.

Then, the setPairInitHash function is defined, which sends a transaction to the setPairInitHash function on the UniswapV2Router02 contract with the new pair initialization hash as a parameter.

When you run this code, it should send a transaction to the Ethereum network to update the pair initialization hash of the UniswapV2Router02 contract. The transaction hash and confirmation block number will be logged to the console. Note that you will need to have enough Ether in your wallet to cover the gas fees for the transaction.
```

### To invoke the WETH function using ether.js:

```
This code creates a new instance of the ethers.Contract object using the contract address of the UniswapV2Router02 contract and the ABI (Application Binary Interface) of the WETH function. It also creates a new ethers.providers.InfuraProvider object using your Infura API key to connect to the Ethereum network.

Then, the getWETH function is defined, which calls the WETH function on the UniswapV2Router02 contract to retrieve the address of the WETH token.

When you run this code, it should log the address of the WETH token to the console. Note that this code does not require any transactions or signing, since the WETH function is a view function that does not modify the contract state.
```

### To invoke the factory function using ether.js:

```
This code creates a new instance of the ethers.Contract object using the contract address of the UniswapV2Router02 contract and the ABI (Application Binary Interface) of the factory function. It also creates a new ethers.providers.InfuraProvider object using your Infura API key to connect to the Ethereum network.

Then, the getFactory function is defined, which calls the factory function on the UniswapV2Router02 contract to retrieve the address of the UniswapV2Factory contract.

When you run this code, it should log the address of the UniswapV2Factory contract to the console. Note that this code does not require any transactions or signing, since the factory function is a view function that does not modify the contract state.
```

### To invoke the getAmountsOut function using ether.js:

```
This code creates a new instance of the ethers.Contract object using the contract address of the UniswapV2Router02 contract and the ABI (Application Binary Interface) of the getAmountsOut function. It also creates a new ethers.providers.InfuraProvider object using your Infura API key to connect to the Ethereum network.

Then, the getAmountsOut function is defined, which calls the getAmountsOut function on the UniswapV2Router02 contract to calculate the output amount for a given input amount and token path.

In this example, we're calculating the output amount for trading 1 ETH for a specific token (replace <insert token address here> with the token's address). We first convert 1 ETH to its equivalent Wei value using the ethers.utils.parseEther function, and define the path as an array with the zero address (representing ETH) as the input token and the token address as the output token.

When you run this code, it should log the amount of tokens you would receive for trading 1 ETH to the console. Note that this code does not require any transactions or signing, since the getAmountsOut function is a view function that does not modify the contract state.
```

### To invoke the getAmountsIn function using ether.js:

```
This code creates a new instance of the ethers.Contract object using the contract address of the UniswapV2Router02 contract and the ABI (Application Binary Interface) of the getAmountsIn function. It also creates a new ethers.providers.InfuraProvider object using your Infura API key to connect to the Ethereum network.

Then, the getAmountsIn function is defined, which calls the getAmountsIn function on the UniswapV2Router02 contract to calculate the input amount for a given output amount and token path.

In this example, we're calculating the input amount for receiving 1000 tokens in exchange for a specific token (replace <insert token address here> with the token's address). We first convert 1000 tokens to its equivalent Wei value using the ethers.utils.parseEther function, and define the path as an array with the token address as the input token and the zero address (representing ETH) as the output token.

When you run this code, it should log the amount of tokens you would need to trade to receive 1000 tokens in exchange to the console. Note that this code does not require any transactions or signing, since the getAmountsIn function is a view function that does not modify the contract state.
```

### To invoke the swapExactTokensForTokens function using ether.js:

```
This code creates a new instance of the ethers.Contract object using the contract address of the UniswapV2Router02 contract and the ABI (Application Binary Interface) of the swapExactTokensForTokens function. It also creates a new ethers.providers.InfuraProvider object using your Infura API key to connect to the Ethereum network, and a ethers.Wallet object using your private key to sign the transaction.

Then, the swapTokensForTokens function is defined, which calls the swapExactTokensForTokens function on the UniswapV2Router02 contract to swap a specified amount of input tokens for output tokens, subject to a minimum output amount.

In this example, we're swapping 1 token of the first token address in the path array (replace <insert token 1 address here> with the first token's address) for a minimum of 0.5 tokens of the second token address in the path array (replace <insert token 2 address here> with the second token's address). The to parameter is set to a recipient address (replace <insert recipient address here> with the recipient's address), and the deadline parameter is set to 10 minutes from now to ensure that the transaction is valid for at least that amount of time.

When you run this code, it should send a transaction to the Ethereum network to swap the specified amount of input tokens for output tokens. The transaction hash will be logged to the console. Note that you may need to adjust the gasLimit parameter to ensure that the transaction is successfully mined.
```

### To invoke the swapTokensForExactTokens function using ether.js:

```
This code creates a new instance of the ethers.Contract object using the contract address of the UniswapV2Router02 contract and the ABI (Application Binary Interface) of the swapTokensForExactTokens function. It also creates a new ethers.providers.InfuraProvider object using your Infura API key to connect to the Ethereum network, and a ethers.Wallet object using your private key to sign the transaction.

Then, the swapTokensForExactTokens function is defined, which calls the swapTokensForExactTokens function on the UniswapV2Router02 contract to swap a specified amount of output tokens for input tokens, subject to a maximum input amount.

In this example, we're swapping for 0.5 tokens of the second token address in the path array (replace <insert token 2 address here> with the second token's address), using up to 1 token of the first token address in the path array (replace <insert token 1 address here> with the first token's address). The to parameter is set to a recipient address (replace <insert recipient address here> with the recipient's address), and the deadline parameter is set to 10 minutes from now to ensure that the transaction is valid for at least that amount of time.

When you run this code, it should send a transaction to the Ethereum network to swap the specified amount of output tokens for input tokens. The transaction hash will be logged to the console. Note that you may need to adjust the gasLimit parameter to ensure that the transaction is successfully mined.
```

### To invoke the swapExactETHForTokens function using ether.js:

```
This code creates a new instance of the ethers.Contract object using the contract address of the UniswapV2Router02 contract and the ABI (Application Binary Interface) of the swapExactETHForTokens function. It also creates a new ethers.providers.InfuraProvider object using your Infura API key to connect to the Ethereum network, and a ethers.Wallet object using your private key to sign the transaction.

Then, the swapExactETHForTokens function is defined, which calls the swapExactETHForTokens function on the UniswapV2Router02 contract to swap a specified amount of ETH for a minimum amount of output tokens.

In this example, we're swapping exactly 1 ETH for a minimum of 0.5 tokens of the token address specified in the path array (replace <insert token address here> with the token's address). The to parameter is set to a recipient address (replace <insert recipient address here> with the recipient's address), and the deadline parameter is set to 10 minutes from now to ensure that the transaction is valid for at least that amount of time.

When you run this code, it should send a transaction to the Ethereum network to swap the specified amount of ETH for tokens. The transaction hash will be logged to the console. Note that you may need to adjust the gasLimit parameter to ensure that the transaction is successfully mined.
```

### To invoke the swapTokensForExactETH function using ether.js:

```
This code creates a new instance of the ethers.Contract object using the contract address of the UniswapV2Router02 contract and the ABI (Application Binary Interface) of the swapTokensForExactETH function. It also creates a new ethers.providers.InfuraProvider object using your Infura API key to connect to the Ethereum network, and a ethers.Wallet object using your private key to sign the transaction.

Then, the swapTokensForExactETH function is defined, which calls the swapTokensForExactETH function on the UniswapV2Router02 contract to swap a maximum amount of input tokens for a specified amount of ETH.

In this example, we're swapping a maximum of 10 tokens of the token address specified in the path array (replace <insert token address here> with the token's address) for exactly 1 ETH. The to parameter is set to a recipient address (replace <insert recipient address here> with the recipient's address), and the deadline parameter is set to 10 minutes from now to ensure that the transaction is valid for at least that amount of time.

When you run this code, it should send a transaction to the Ethereum network to swap the specified amount of tokens for ETH. The transaction hash will be logged to the console. Note that you may need to adjust the gasLimit parameter to ensure that the transaction is successfully mined.
```

### To invoke the swapExactTokensForETH function using ether.js:

```
This code creates a new instance of the ethers.Contract object using the contract address of the UniswapV2Router02 contract and the ABI (Application Binary Interface) of the swapExactTokensForETH function. It also creates a new ethers.providers.InfuraProvider object using your Infura API key to connect to the Ethereum network, and a ethers.Wallet object using your private key to sign the transaction.

Then, the swapExactTokensForETH function is defined, which calls the swapExactTokensForETH function on the UniswapV2Router02 contract to swap a specified amount of input tokens for at least a minimum amount of ETH.

In this example, we're swapping exactly 10 tokens of the token address specified in the path array (replace <insert token address here> with the token's address) for at least 1 ETH. The to parameter is set to a recipient address (replace <insert recipient address here> with the recipient's address), and the deadline parameter is set to 10 minutes from now to ensure that the transaction is valid for at least that amount of time.

When you run this code, it should send a transaction to the Ethereum network to swap the specified amount of tokens for ETH. The transaction hash will be logged to the console. Note that you may need to adjust the gasLimit parameter to ensure that the transaction is successfully mined.
```

### To invoke the swapETHForExactTokens function using ether.js:

```
This code creates a new instance of the ethers.Contract object using the contract address of the UniswapV2Router02 contract and the ABI (Application Binary Interface) of the swapETHForExactTokens function. It also creates a new ethers.providers.InfuraProvider object using your Infura API key to connect to the Ethereum network, and a ethers.Wallet object using your private key to sign the transaction.

Then, the swapETHForExactTokens function is defined, which calls the swapETHForExactTokens function on the UniswapV2Router02 contract to swap a specified amount of ETH for exactly the specified amount of output tokens.

In this example, we're swapping up to 10 tokens of the token address specified in the path array (replace <insert token address here> with the token's address) for exactly 1 ETH. The to parameter is set to a recipient address (replace <insert recipient address here> with the recipient's address), and the deadline parameter is set to 10 minutes from now to ensure that the transaction is valid for at least that amount of time. The value parameter is set to 1 ETH to send with the transaction.

When you run this code, it should send a transaction to the Ethereum network to swap the specified amount of ETH for tokens. The transaction hash will be logged to the console. Note that you may need to adjust the gasLimit parameter to ensure that the transaction is successfully mined.
```

### To invoke the addLiquidity function using ether.js:

```
This code creates a new instance of the ethers.Contract object using the contract address of the UniswapV2Router02 contract and the ABI (Application Binary Interface) of the addLiquidity function. It also creates a new ethers.providers.InfuraProvider object using your Infura API key to connect to the Ethereum network, and a ethers.Wallet object using your private key to sign the transaction.

Then, the addLiquidity function is defined, which calls the addLiquidity function on the UniswapV2Router02 contract to add liquidity to a specified token pair.

In this example, we're adding liquidity to the token pair specified by the tokenA and tokenB addresses (replace <insert token A address here> and <insert token B address here> with the respective token addresses). We want to add 10 of token A and 5 of token B, but we specify minimum amounts of 9 of token A and 4 of token B using the amountAMin and amountBMin parameters, respectively. The to parameter is set to a recipient address (replace <insert recipient address here> with the recipient's address), and the deadline parameter is set to 10 minutes from now to ensure that the transaction is valid for at least that amount of time. Since we're not sending any ETH with this transaction, the value parameter is set to 0.

When you run this code, it should send a transaction to the Ethereum network to add liquidity to the specified token pair. The transaction hash will be logged to the console. Note that you may need to adjust the gasLimit parameter to ensure that the transaction is successfully mined.
```