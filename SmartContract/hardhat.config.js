// https://eth-goerli.g.alchemy.com/v2/k9R2Eh7V8_mAhJPBwwq8R3xTf8xrEY69

require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity: "0.8.18",
  networks:{
    goerli:{
      url: 'https://eth-goerli.g.alchemy.com/v2/k9R2Eh7V8_mAhJPBwwq8R3xTf8xrEY69',
      accounts: ['c3ff8e37897f2ccc5dbc88781768b218306fd0efa174d3d13a8d6c8065678847']
    }
  }
};
