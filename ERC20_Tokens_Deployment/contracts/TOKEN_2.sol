// SPDX-License-Identifier: MIT
pragma solidity 0.8.16;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract TOKEN_2 is ERC20, Ownable {

    /**
     * @dev constructor is used to add the _initial_supply of tokens.
     * In constructor I am passing token name & symbol in the inharetied ERC20 contract parameter.
     * @param _initial_supply - _initial_supply
    */
    constructor(uint256 _initial_supply) ERC20("TOKEN_2", "T2") {
        _mint(msg.sender, _initial_supply * 10 ** decimals());
    }

    /**
     * @dev mint is used to add the supply of tokens & also add the tokens in the address whose will pass in to.
     * Requirement:
     * - This function can only called by the owner of the contract
     * @param to - to
     * @param amount - amount
    */
    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }
}
