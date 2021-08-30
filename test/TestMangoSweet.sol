// SPDX-License-Identifier: GPL-3.0

pragma solidity >= 0.8.0 < 0.8.7;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/MangoSweet.sol";

contract TestMangoSweet is MangoSweet {

    uint initialSupply;

    function beforeEach() public {
        initialSupply = 1000000000000000000000000000;
    }

    function testNameShouldBeMangoSweetToken() public {
        string memory expected = "MangoSweet Token";
        Assert.equal(name(), expected, "name should be MangoSweet Token");
    }

    function testSymbolShouldBeSWEET() public {
        string memory expected = "SWEET";
        Assert.equal(symbol(), expected, "symbol should be `SWEET`");
    }

    function testInitialBalanceUingNewMangoSweet() public {
        Assert.equal(totalSupply(), initialSupply, "owner should have `1000000000000000000000000000`");
    }
}