const { ethers } = require("hardhat");

async function main() {
    // Grab the contract factory 
    const MyToken = await ethers.getContractFactory("MyToken");
  
    // Start deployment, returning a promise that resolves to a contract object
    const myToken = await MyToken.deploy(); // Instance of the contract 
    //const [deployer] = await ethers.getSigners();
    console.log("Contract deployed to address:", deployer.address);
    //console.log("Account balance:", (await deployer.getBalance()).toString());
  }
  
  main()
   .then(() => process.exit(0))
   .catch(error => {
     console.error(error);
     process.exit(1);
   });