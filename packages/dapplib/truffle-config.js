require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid nation flock system egg develop remain smile hope clog bottom giggle'; 
let testAccounts = [
"0xa84ba64cc050b5e02297890e7e7bcbb1b66577309ee1f13744b99accbc30a268",
"0x8f3ff43d50cda2fd2a194804e7b4d3eb06cea113f133341ec867503df5e4a230",
"0x2366a072b8274e548a7b57e9d1c436edc5835623904d15129f55e61ff651fb81",
"0x4c33659f83f13b912fb7f829b740ab9d5137f41df915768f4941c04b91e65f5f",
"0xa632bed6d9d92dd397a6e54ed04dd1609062dcf3d16245f6f33cda3130e9e4a5",
"0x612f3ff4fa7a0bcc5090f6d5bd3b1928e887cd8b72440e3d92ce1e13052a658a",
"0x81f5fdfe8ca1bdd0a66f4f231884d5d2f477e7fde44aac267c09a4dff10f1f14",
"0xaecb6cca7cf8ff2a3626c12e9c246af09933654a00dda4144f0be33d0f818c7b",
"0x54d903eb9552083f8aaa02b2515290f4462249fc153732295eebfbf56492057d",
"0x4da3ea264c0c89571b877b7083814c36d6ad0cb733b285c5703f80d061f3f045"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

