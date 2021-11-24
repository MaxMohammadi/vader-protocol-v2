const BN = require("bn.js");
const { VADER, CONVERTER, VESTING } = require("./constants");
const Vader = artifacts.require("Vader");

const VESTERS = {
    mainnet: [],
    kovan: ["0x1b83E9b5FC38f7db0D5672279D45EFEC0F72C394"],
};

const TEAM_ALLOCATION = new BN(2_500_000_000).mul(new BN(10).pow(new BN(18)));

const VESTING_AMOUNTS = {
    mainnet: [],
    kovan: [TEAM_ALLOCATION],
};

module.exports = async function (deployer, network) {
    // skip development
    if (network == "development") {
        return;
    }

    if (network !== "kovan") {
        throw new Error("fix parameters for mainnet");
    }

    const vader = await Vader.at(VADER[network]);
    const converter = CONVERTER[network];
    const vesting = VESTING[network];

    const vesters = VESTERS[network];
    const amounts = VESTING_AMOUNTS[network];

    const tx = await vader.setComponents(converter, vesting, vesters, amounts);

    console.log(tx);
};
