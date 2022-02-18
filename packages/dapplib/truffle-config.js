require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz kiwi october slab chapter deny radar purpose gesture father flock tray'; 
let testAccounts = [
"0x1f1db1ca28f8c96de9b017a59be5044824fc733928679a238726530016faa575",
"0x04050890943321392a68331c0996aa28a63b93ead98e451633bb6d95343caa20",
"0xda0e680eaf11bbb5716bdb813c494f18e482d7eb3146c22394500dbb076c9b92",
"0x050a0c885b354a2109dd50ccff670d65cbd02c27a89571786b4b01fe9a642840",
"0x8d7b253356c9f223155d379fe357094f63f93c5080035895242201925418ef14",
"0xf0dd87b3c88bfed2b1328a3df0fc4cace5966f8c103318b12f589b05f98a2926",
"0xd0e8071e5a55a223edad326646530fcbf62c8298c7cef0ccbb09eaed4c719030",
"0xe1829776ad39aaca88bc9cf8733b58636211dfbd23b29d5190bf3e61919af398",
"0x4bf11f8f0f7e73cf3c69e3a6bc43edaa11d4b81b5698276e4ade05c4ff9b94fc",
"0x4369356992a01631cce3003792d607e38ade0c6b9205d732301fe7fa80bcfd0a"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

