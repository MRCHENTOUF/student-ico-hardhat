// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract StudentICO {

    IERC20 public token;

    address public owner;

    uint256 public tokenPrice;

    uint256 public tokensSold;

    constructor(
        address _tokenAddress,
        uint256 _tokenPrice
    ) {
        token = IERC20(_tokenAddress);
        tokenPrice = _tokenPrice;
        owner = msg.sender;
    }

    function buyTokens(uint256 _amount) public payable {

    uint256 cost = _amount * tokenPrice;

    require(msg.value >= cost, "Not enough ETH");

    uint256 tokenAmount = _amount * 10 ** 18;

    require(
        token.balanceOf(address(this)) >= tokenAmount,
        "Not enough tokens in ICO"
    );

    tokensSold += _amount;

    bool success = token.transfer(
        msg.sender,
        tokenAmount
    );

    require(success, "Token transfer failed");
}

    function withdraw() public {

        require(
            msg.sender == owner,
            "Only owner can withdraw"
        );

        (bool success, ) = payable(owner).call{
    value: address(this).balance
}("");

require(success, "ETH transfer failed");
    }
}