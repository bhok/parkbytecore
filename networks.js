var Put = require('bufferput');
var buffertools = require('buffertools');
var hex = function(hex) {
  return new Buffer(hex, 'hex');
};

exports.livenet = {
  name: 'livenet',
  magic: hex('e4c2d8e6'),
  addressVersion: 0x37,
  privKeyVersion: 0xb7,
  P2SHVersion: 0x37,
  hkeyPublicVersion: 0x0488b21e,
  hkeyPrivateVersion: 0x0488ade4,
  genesisBlock: {
    hash: hex('7cabd029a000fa22204b554b533877e9cd43b24fd89407e51c096496a4000000'),
    merkle_root: hex('c8cf9167025e3d991c035b1cb703a9fbcf1ea48a9d5323d58110689c8bfc1b33'),
    height: 0,
    nonce: 21380081,
    version: 1,
    prev_hash: buffertools.fill(new Buffer(32), 0),
    timestamp: 1430485959,
    bits: 503382015,
  },
  dnsSeeds: [
    'parkbyte.com'
  ],
  defaultClientPort: 58060
};

exports.mainnet = exports.livenet;

exports.testnet = {
  name: 'testnet',
  magic: hex('0b110907'),
  addressVersion: 0x6f,
  privKeyVersion: 239,
  P2SHVersion: 196,
  hkeyPublicVersion: 0x043587cf,
  hkeyPrivateVersion: 0x04358394,
  genesisBlock: {
    hash: hex('43497FD7F826957108F4A30FD9CEC3AEBA79972084E90EAD01EA330900000000'),
    merkle_root: hex('3BA3EDFD7A7B12B27AC72C3E67768F617FC81BC3888A51323A9FB8AA4B1E5E4A'),
    height: 0,
    nonce: 414098458,
    version: 1,
    prev_hash: buffertools.fill(new Buffer(32), 0),
    timestamp: 1296688602,
    bits: 486604799,
  },
  dnsSeeds: [
    'testnet-seed.bitcoin.petertodd.org',
    'testnet-seed.bluematt.me'
  ],
  defaultClientPort: 18333
};
