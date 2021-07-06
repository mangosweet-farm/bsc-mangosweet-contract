Hi MangoSweet Team!!!

Required global library
========================
1. truffle
2. ganache-cli

```code
npm install -g ganache-cli truffle
```






Deployment Networks
====================

```code
 truffle migrate --network testnet
```

|  Networks | Required    |
|-----------|------------|
| develop   |             |
| testnet   |   .secret   |
|  bsc      |   .secret   |

**.secret** files, store mnemonic 12 words


Documents
=========
1. [Interacting with Smart Contract](https://www.trufflesuite.com/docs/truffle/getting-started/interacting-with-your-contracts)
