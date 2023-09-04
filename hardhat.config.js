/** @type import('hardhat/config').HardhatUserConfig */
require("@nomicfoundation/hardhat-toolbox");

require("dotenv").config();
/** @type import('hardhat/config').HardhatUserConfig */
const GOERLI_URL =
  "https://eth-sepolia.g.alchemy.com/v2/RH6VcmGJIcEG6s1pZntrErRZQLg3UhEm";
const PRIVATE_KEY =
  "31b6b6ac032e82f619e531b7bdc3970c208b58b851e13390417173dbdb1d31ea";
module.exports = {
  solidity: "0.8.17",
  networks: {
    sepolia: {
      url: GOERLI_URL,
      accounts: [PRIVATE_KEY],
    },
  },
};
