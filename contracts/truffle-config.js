const { readFileSync } = require('fs');
const LoomTruffleProvider = require('loom-truffle-provider');

const chainId = 'default';
const writeUrl = 'http://192.168.99.100:46658/rpc';
const readUrl = 'http://192.168.99.100:46658/query';

const privateKey = readFileSync('./priv', 'utf-8');
const localLoomTruffleProvider = new LoomTruffleProvider(chainId, writeUrl, readUrl, privateKey);

module.exports = {
  networks: {
    development: {
      provider: localLoomTruffleProvider,
      network_id: '*'
    }
  }
};
