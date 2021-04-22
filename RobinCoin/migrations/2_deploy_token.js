const BananaToken = artifacts.require("BananaToken");

module.exports = function (deployer) {
    deployer.deploy(BananaToken);
};
