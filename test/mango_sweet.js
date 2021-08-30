const MangoSweet = artifacts.require("MangoSweet");

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("MangoSweet", async (accounts) => {
  it("should return the name is `MangoSweet Token`", async () => {
    const instance = await MangoSweet.deployed();
    const _name = await instance.name.call();
    assert.equal(_name.valueOf(), "MangoSweet Token");
  });

  it("should return the symbol is `SWEET`", async () => {
    const instance = await MangoSweet.deployed();
    const _symbol = await instance.symbol.call();
    assert.equal(_symbol.valueOf(), "SWEET");
  });

  it("should put 1000000000000000000000000000 SWEET in the first account", async () => {
    const instance = await MangoSweet.deployed();
    const balance = await instance.balanceOf.call(accounts[0]);
    assert.equal(balance.valueOf(), 1000000000000000000000000000);
  });
});
