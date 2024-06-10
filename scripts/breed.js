const { ethers } = require('hardhat')
const fs = require('fs')

const toWei = (num) => ethers.parseEther(num.toString())
const mintCost = 0.02

async function mintNFT(contract) {
  const tx = await contract.mint({
    value: toWei(mintCost),
  })
  await tx.wait()
}

async function breedNft(contract, fatherToken, motherToken) {
  const tx = await contract.breedNft(fatherToken, motherToken, {
    value: toWei(mintCost),
  })
  await tx.wait()
}

async function getNFTs(contract) {
  const result = await contract.getAllNfts()
  console.log('ALL NFTs:', result)
}

async function getNFT(contract, tokenId) {
  const result = await contract.getNft(tokenId)
  console.log('Single NFTs:', result)
}

async function getBreededNFTs(contract) {
  const result = await contract.getBreededNfts()
  console.log('Breeded NFTs:', result)
}

async function getNFTParentsOf(contract, breededToken) {
  const result = await contract.getParentsOf(breededToken)
  console.log('Breeded NFT Parents:', result)
}

async function main() {
  try {
    const contractAddress = fs.readFileSync('./contracts/contractAddress.json', 'utf8')
    const { contract: address } = JSON.parse(contractAddress)
    const contract = await ethers.getContractAt('Breeder', address)
    // console.log(contract);

    // Mint x2 new NFTs for testing purposes
    await mintNFT(contract)
    // await mintNFT(contract)
    await getNFTs(contract)

    // await breedNft(contract, 1, 2)
    // await getNFTs(contract)

    // await getBreededNFTs(contract)
    // await getNFTParentsOf(contract, 3)
    // await getNFT(contract, 3)
  } catch (error) {
    console.error('Unhandled error:', error)
  }
}

main().catch((error) => {
  console.error('Unhandled error:', error)
  process.exitCode = 1
})
