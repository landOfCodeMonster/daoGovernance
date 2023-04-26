const { ethers } = require("hardhat");

async function main() {
    // Grab the contract factory 
    const MyToken = await ethers.getContractFactory("MyToken");

  // Start deployment, returning a promise that resolves to a contract object
  const myToken = await MyToken.deploy(); // Instance of the contract 
  console.log("Contract deployed to address:", myToken.address)
    
    
    //const [deployer] = await ethers.getSigners();
    //console.log("Contract deployed to address:", deployer.address);
    //console.log("Account balance:", (await deployer.getBalance()).toString());

    /* const gasPrice = await MyToken.signer.getGasPrice();
    console.log(gasPrice);
  const estimatedGas2 = await ethers.provider.estimateGas(MyToken.getDeployTransaction().data)
  const estGas = await MyToken.signer.estimateGas({
    maxFeePerGas: gasPrice + 1,
    gasLimit: estimatedGas2,
    maxPriorityFeePerGas: gasPrice + 1,
    value: 0
  });
  console.log(estGas);
  console.log (gasPrice * estimatedGas2);
  console.log(await MyToken.signer.getBalance());
  const myNFT = await MyToken.deploy();
  await myNFT.deployed(); */




  /* const MyNFT = await ethers.getContractFactory('MyToken');

  const gasPrice = await MyNFT.signer.getGasPrice();
  console.log(`Current gas price: ${gasPrice}`);

  const estimatedGas = await MyNFT.signer.estimateGas(
    MyNFT.getDeployTransaction(),
  );
  console.log(`Estimated gas: ${estimatedGas}`);

  const deploymentPrice = gasPrice.mul(estimatedGas);
  const deployerBalance = await MyNFT.signer.getBalance();
  console.log(`Deployer balance:  ${ethers.utils.formatEther(deployerBalance)}`);
  console.log(`Deployment price:  ${ethers.utils.formatEther(deploymentPrice)}`);
  if (deployerBalance.lt(deploymentPrice)) {
    throw new Error(
      `Insufficient funds. Top up your account balance by ${ethers.utils.formatEther(
        deploymentPrice.sub(deployerBalance),
      )}`,
    );
  }

  const myNFT = await MyNFT.deploy();
  await myNFT.deployed(); */
  }
  
  main()
   .then(() => process.exit(0))
   .catch(error => {
     console.error(error);
     process.exit(1);
   });