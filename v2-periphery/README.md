# About UniswapV2-Periphery:

## After deploying the UniswapV2Router02 contract, the following functions become available:

The UniswapV2Router02.sol contract is the main router contract used in the Uniswap decentralized exchange protocol. It provides functions for swapping tokens, adding and removing liquidity, and managing token approvals, among other functions.

### Here is a detailed guide to the various functions in the UniswapV2Router02.sol contract:

#### constructor: 
- This function is called when the contract is deployed and sets the address of the Uniswap factory contract and the WETH (Wrapped Ether) contract.

#### setRevertMsg: 
- This function sets the custom revert message that will be used for all subsequent failed transactions on this contract.

#### setFactory: 
- This function allows the contract owner to update the address of the Uniswap factory contract.

#### setRouter1: 
- This function allows the contract owner to update the address of the Uniswap V1 router contract.

#### setPairInitHash: 
- This function allows the contract owner to update the hash of the init code for creating Uniswap pairs.

#### WETH: 
- This function returns the address of the WETH contract.

#### factory: 
- This function returns the address of the Uniswap factory contract.

#### getAmountsOut: 
- This function takes in an input amount of a token, a path of tokens to trade through, and returns the estimated output amount of the last token in the path.

#### getAmountsIn: 
- This function takes in an output amount of a token, a path of tokens to trade through, and returns the estimated input amount of the first token in the path.

#### swapExactTokensForTokens: 
- This function swaps an exact amount of an input token for an output token. It takes in the input token amount, the minimum output token amount, a path of tokens to trade through, the recipient of the output tokens, and a deadline for the transaction.

#### swapTokensForExactTokens: 
- This function swaps a maximum amount of an input token for an exact amount of an output token. It takes in the maximum input token amount, the output token amount, a path of tokens to trade through, the recipient of the output tokens, and a deadline for the transaction.

#### swapExactETHForTokens: 
- This function swaps an exact amount of ETH for an output token. It takes in the minimum output token amount, a path of tokens to trade through, the recipient of the output tokens, and a deadline for the transaction.

#### swapTokensForExactETH: 
- This function swaps a maximum amount of an input token for an exact amount of ETH. It takes in the output ETH amount, a path of tokens to trade through, the recipient of the output ETH, and a deadline for the transaction.

#### swapExactTokensForETH: 
- This function swaps an exact amount of an input token for ETH. It takes in the input token amount, the minimum output ETH amount, a path of tokens to trade through, the recipient of the output ETH, and a deadline for the transaction.

#### swapETHForExactTokens: 
- This function swaps a maximum amount of ETH for an exact amount of an output token. It takes in the output token amount, a path of tokens to trade through, the recipient of the output tokens, and a deadline for the transaction.

#### addLiquidity: 
- This function adds liquidity to a Uniswap pair. It takes in the two tokens being added, the amount of each token being added, the minimum amount of liquidity
