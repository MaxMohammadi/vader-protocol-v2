const Vader = artifacts.require("Vader");
const VaderReserve = artifacts.require("VaderReserve");
const USDV = artifacts.require("USDV");

module.exports = async function (deployer, network) {
    // skip development
    if (network == "development") {
        return
    }
    const vader = await Vader.deployed();
    const reserve = await VaderReserve.deployed();

    await deployer.deploy(USDV, vader.address, reserve.address);
};
