const { network, ethers } = require("hardhat")
const { developmentChanins} = require ("../helper-hardhat-config")

const BASE_FEE = ethers.utils.parseEther("0.25");
const GAS_PRICE_LINK = 1e9

module.exports = async function ({ getNamedAccounts, deployments }) {
    const { deploy, log } = deployments
    const { deployer } = await getNamedAccounts()
    const args = [BASE_FEE, GAS_PRICE_LINK]

    if(developmentChanins.includes(network.name)) {
        console.log("local network detected! Deploying mocks...");
        await deploy("VRFCoordinatorV2Mock", {
            from: deployer,
            log: true,
            args: args,
        })
        console.log("Mocks Deployed!");
        console.log("--------------------------------------------------------");
    }
    
}

module.exports.tags = ["all", "mocks"]