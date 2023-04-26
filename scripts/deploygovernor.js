async function main() {
    // Grab the contract factory 
    const MyGovernor = await ethers.getContractFactory("MyGovernor");
 
    // Start deployment, returning a promise that resolves to a contract object
    const myGovernor = await MyGovernor.deploy("0x5683E252018498d0feDA61B7a2BF6b5CDCACDE61"); // Instance of the contract taking token contract address as input
    console.log("Contract deployed to address:", myGovernor.address);
 }
 
 main()
   .then(() => process.exit(0))
   .catch(error => {
     console.error(error);
     process.exit(1);
   });