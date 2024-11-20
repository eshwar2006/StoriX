require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    sepolia: {
      url: "https://sepolia.infura.io/v3/40ffafab26084105bb44568abe554d50",
      accounts: [""]//enter your private key of wallet 
    }
  }
};
