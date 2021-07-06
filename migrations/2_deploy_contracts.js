var Mangosweet = artifacts.require("./Mangosweet.sol");

module.exports = function(deployer) {
  // Deploy Mangosweet Token
  deployer.deploy(Mangosweet);

};
