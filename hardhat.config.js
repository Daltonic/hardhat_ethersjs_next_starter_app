require('@nomicfoundation/hardhat-toolbox')
require('dotenv').config()

module.exports = {
  defaultNetwork: 'localhost',
  networks: {
    hardhat: {},
    localhost: {
      url: 'http://127.0.0.1:8545',
    },
    sepolia: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/nUTdVHx8zxFQvxD8XbuTtSzeavPL6Pga',
      accounts: ['0x84b20ebf8ef5f0a871f088df888e12bc8905fe5cc81702f0da9c509ee0119b2d'],
      chainId: 11155111,
    },
  },
  solidity: {
    version: '0.8.17',
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  mocha: {
    timeout: 40000,
  },
}
