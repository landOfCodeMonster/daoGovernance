/** @type import('hardhat/config').HardhatUserConfig */
require('dotenv').config();
require("@nomiclabs/hardhat-ethers");

const { API_URL, PRIVATE_KEY } = process.env;
module.exports = {
  solidity: {
    version: "0.8.18", 
    optimizer: {

      enabled: true,

      runs: 200,
    },
  }, 
   defaultNetwork: "sepolia",
   networks: {
    hardhat: {
    },
    sepolia: {
      url: API_URL,
      accounts: {
        mnemonic: PRIVATE_KEY,
        path: "m/44'/60'/0'/0",
        initialIndex: 0,
        count: 20,
        passphrase: "",
      },
    }
  },
}


