var MangoSweet = artifacts.require("./MangoSweet.sol");

module.exports = function (deployer) {
  // Deploy Mangosweet Token
  deployer.deploy(MangoSweet);
};
