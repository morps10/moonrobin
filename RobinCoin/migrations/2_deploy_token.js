const BananaToken = artifacts.require("BananaToken");

module.exports = async function (deployer) {
    await deployer.deploy(BananaToken);

    let tokenInstance = await BananaToken.deployed();

    let accounts = await web3.eth.getAccounts();

    //let tokenTotalSupply = await tokenInstance.balanceOf.call(accounts[0], {from: accounts[0]});
    //console.log(JSON.stringify(tokenTotalSupply));

    //get owner
    let tokenOwner = await tokenInstance.owner.call({from: accounts[0]});
    console.log("token owner " + JSON.stringify(tokenOwner));

    //let approveResult = await tokenInstance.approve.sendTransaction("0xD99D1c33F9fC3444f8101754aBC46c52416550D1", tokenTotalSupply, {from: accounts[0]});
    //console.log(JSON.stringify(approveResult));

    await tokenInstance.initialize.sendTransaction({from: accounts[0]});


};

