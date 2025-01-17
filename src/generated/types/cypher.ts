export type Cypher = {
  "version": "3.0.0",
  "name": "cypher",
  "instructions": [
    {
      "name": "cacheOraclePrices",
      "accounts": [
        {
          "name": "cacheAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "oracleProducts",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "cacheIndex",
          "type": "u64"
        }
      ]
    },
    {
      "name": "claimIdoProceeds",
      "accounts": [
        {
          "name": "market",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "quotePoolNode",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "quoteVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "destinationTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "idoAuthority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "vaultSigner",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "claimLiquidityMiningRewards",
      "accounts": [
        {
          "name": "market",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "quotePoolNode",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "quoteVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "destinationTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "idoAuthority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "vaultSigner",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "closeAccount",
      "accounts": [
        {
          "name": "account",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "rentDestination",
          "isMut": true,
          "isSigner": true
        }
      ],
      "args": []
    },
    {
      "name": "closeCacheAccount",
      "accounts": [
        {
          "name": "cacheAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "rentDestination",
          "isMut": true,
          "isSigner": true
        }
      ],
      "args": []
    },
    {
      "name": "closeClearing",
      "accounts": [
        {
          "name": "clearing",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "rentDestination",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true
        }
      ],
      "args": []
    },
    {
      "name": "closeFuturesMarket",
      "accounts": [
        {
          "name": "market",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "orderbook",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "bids",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "asks",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "eventQueue",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "oracleProducts",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "priceHistory",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "rentDestination",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true
        }
      ],
      "args": []
    },
    {
      "name": "closeOracleProducts",
      "accounts": [
        {
          "name": "cacheAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "oracleProducts",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "rentDestination",
          "isMut": true,
          "isSigner": true
        }
      ],
      "args": []
    },
    {
      "name": "closeOrdersAccount",
      "accounts": [
        {
          "name": "masterAccount",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "market",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "openOrders",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        }
      ],
      "args": []
    },
    {
      "name": "closePerpMarket",
      "accounts": [
        {
          "name": "market",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "orderbook",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "bids",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "asks",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "eventQueue",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "oracleProducts",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "rentDestination",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true
        }
      ],
      "args": []
    },
    {
      "name": "closePool",
      "accounts": [
        {
          "name": "pool",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "oracleProducts",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "rentDestination",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "closePoolNode",
      "accounts": [
        {
          "name": "pool",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "poolNode",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "vaultSigner",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rentDestination",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "closeSubAccount",
      "accounts": [
        {
          "name": "account",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "subAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "rentDestination",
          "isMut": true,
          "isSigner": true
        }
      ],
      "args": []
    },
    {
      "name": "createAccount",
      "accounts": [
        {
          "name": "clearing",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "masterAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "accountNumber",
          "type": "u8"
        },
        {
          "name": "accountBump",
          "type": "u8"
        }
      ]
    },
    {
      "name": "createPublicClearing",
      "accounts": [
        {
          "name": "clearing",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "args",
          "type": {
            "defined": "CreateClearingArgs"
          }
        }
      ]
    },
    {
      "name": "createPrivateClearing",
      "accounts": [
        {
          "name": "clearing",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "privateClearing",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "args",
          "type": {
            "defined": "CreateClearingArgs"
          }
        }
      ]
    },
    {
      "name": "createOracleStub",
      "accounts": [
        {
          "name": "oracleStub",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "symbol",
          "type": {
            "array": [
              "u8",
              32
            ]
          }
        }
      ]
    },
    {
      "name": "createOrdersAccount",
      "accounts": [
        {
          "name": "masterAccount",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "market",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "openOrders",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "createFuturesMarket",
      "accounts": [
        {
          "name": "clearing",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "cacheAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "market",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "priceHistory",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "oracleProducts",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "quotePool",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "orderbook",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "bids",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "asks",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "eventQueue",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "args",
          "type": {
            "defined": "CreateFuturesMarketArgs"
          }
        }
      ]
    },
    {
      "name": "createPerpMarket",
      "accounts": [
        {
          "name": "clearing",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "cacheAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "market",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "oracleProducts",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "quotePool",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "orderbook",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "bids",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "asks",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "eventQueue",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "args",
          "type": {
            "defined": "CreatePerpetualMarketArgs"
          }
        }
      ]
    },
    {
      "name": "createPool",
      "accounts": [
        {
          "name": "clearing",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "cacheAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "pool",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "poolNode",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "vaultSigner",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "oracleProducts",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "dexMarket",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "args",
          "type": {
            "defined": "CreatePoolArgs"
          }
        }
      ]
    },
    {
      "name": "createPoolNode",
      "accounts": [
        {
          "name": "clearing",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "pool",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "poolNode",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "vaultSigner",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "vaultSignerBump",
          "type": "u8"
        },
        {
          "name": "nodeNumber",
          "type": "u8"
        }
      ]
    },
    {
      "name": "createSubAccount",
      "accounts": [
        {
          "name": "masterAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "subAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "subAccountNumber",
          "type": "u8"
        },
        {
          "name": "subAccountBump",
          "type": "u8"
        },
        {
          "name": "subAccountAlias",
          "type": {
            "array": [
              "u8",
              32
            ]
          }
        }
      ]
    },
    {
      "name": "createWhitelist",
      "accounts": [
        {
          "name": "clearing",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "whitelist",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "accountOwner",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "createWhitelistedAccount",
      "accounts": [
        {
          "name": "clearing",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "whitelist",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "masterAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "accountNumber",
          "type": "u8"
        },
        {
          "name": "accountBump",
          "type": "u8"
        }
      ]
    },
    {
      "name": "depositDeliverable",
      "accounts": [
        {
          "name": "market",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "pool",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "poolNode",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "sourceTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "depositFunds",
      "accounts": [
        {
          "name": "clearing",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "cacheAccount",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "masterAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "subAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "pool",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "poolNode",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "sourceTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "editSubAccountMargining",
      "accounts": [
        {
          "name": "masterAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "subAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "marginingType",
          "type": {
            "defined": "SubAccountMargining"
          }
        }
      ]
    },
    {
      "name": "createOracleProducts",
      "accounts": [
        {
          "name": "cacheAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "oracleProducts",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "args",
          "type": {
            "defined": "CreateOracleProductsArgs"
          }
        }
      ]
    },
    {
      "name": "initCacheAccount",
      "accounts": [
        {
          "name": "clearing",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "cacheAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true
        }
      ],
      "args": []
    },
    {
      "name": "liquidateFuturesPosition",
      "accounts": [
        {
          "name": "cacheAccount",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "liqorClearing",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "liqorAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "liqorSubAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "liqeeClearing",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "liqeeAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "liqeeSubAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "asset",
          "type": "publicKey"
        },
        {
          "name": "liability",
          "type": "publicKey"
        }
      ]
    },
    {
      "name": "liquidatePerpPosition",
      "accounts": [
        {
          "name": "cacheAccount",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "liqorClearing",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "liqorAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "liqorSubAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "liqeeClearing",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "liqeeAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "liqeeSubAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "asset",
          "type": "publicKey"
        },
        {
          "name": "liability",
          "type": "publicKey"
        }
      ]
    },
    {
      "name": "liquidateSpotPosition",
      "accounts": [
        {
          "name": "cacheAccount",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "liqorClearing",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "liqorAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "liqorSubAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "liqeeClearing",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "liqeeAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "liqeeSubAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "assetMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "assetPoolNode",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "liabilityMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "liabilityPool",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "liabilityPoolNode",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        }
      ],
      "args": []
    },
    {
      "name": "rollMarketExpiry",
      "accounts": [
        {
          "name": "clearing",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "cacheAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "market",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "expirationTs",
          "type": "u64"
        }
      ]
    },
    {
      "name": "setAccountDelegate",
      "accounts": [
        {
          "name": "masterAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "delegate",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "setAccountFeeTier",
      "accounts": [
        {
          "name": "clearing",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "masterAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "tier",
          "type": "u8"
        }
      ]
    },
    {
      "name": "setClearingAuthority",
      "accounts": [
        {
          "name": "clearing",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "newAuthority",
          "type": "publicKey"
        }
      ]
    },
    {
      "name": "setClearingFeeTiers",
      "accounts": [
        {
          "name": "clearing",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "feeTiers",
          "type": {
            "vec": {
              "defined": "FeeTierArgs"
            }
          }
        }
      ]
    },
    {
      "name": "setClearingFeeMint",
      "accounts": [
        {
          "name": "clearing",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "feeMint",
          "type": "publicKey"
        }
      ]
    },
    {
      "name": "setFuturesMarketAuthority",
      "accounts": [
        {
          "name": "market",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "newAuthority",
          "type": "publicKey"
        }
      ]
    },
    {
      "name": "setFuturesMarketLiquidityMiningInfo",
      "accounts": [
        {
          "name": "market",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "args",
          "type": {
            "defined": "LiquidityMiningArgs"
          }
        }
      ]
    },
    {
      "name": "setFuturesMarketParams",
      "accounts": [
        {
          "name": "cache",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "market",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "maxBaseOrderSize",
          "type": {
            "option": "u64"
          }
        },
        {
          "name": "maxQuoteOrderSize",
          "type": {
            "option": "u64"
          }
        },
        {
          "name": "initAssetWeight",
          "type": {
            "option": "u8"
          }
        },
        {
          "name": "maintAssetWeight",
          "type": {
            "option": "u8"
          }
        },
        {
          "name": "initLiabWeight",
          "type": {
            "option": "u8"
          }
        },
        {
          "name": "maintLiabWeight",
          "type": {
            "option": "u8"
          }
        }
      ]
    },
    {
      "name": "setFuturesMarketStatus",
      "accounts": [
        {
          "name": "market",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "status",
          "type": {
            "defined": "OperatingStatus"
          }
        }
      ]
    },
    {
      "name": "setPerpetualMarketAuthority",
      "accounts": [
        {
          "name": "market",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "newAuthority",
          "type": "publicKey"
        }
      ]
    },
    {
      "name": "setPerpetualMarketLiquidityMiningInfo",
      "accounts": [
        {
          "name": "market",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "args",
          "type": {
            "defined": "LiquidityMiningArgs"
          }
        }
      ]
    },
    {
      "name": "setPerpetualMarketParams",
      "accounts": [
        {
          "name": "cache",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "market",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "impactQuantity",
          "type": {
            "option": "u64"
          }
        },
        {
          "name": "maxBaseOrderSize",
          "type": {
            "option": "u64"
          }
        },
        {
          "name": "maxQuoteOrderSize",
          "type": {
            "option": "u64"
          }
        },
        {
          "name": "initAssetWeight",
          "type": {
            "option": "u8"
          }
        },
        {
          "name": "maintAssetWeight",
          "type": {
            "option": "u8"
          }
        },
        {
          "name": "initLiabWeight",
          "type": {
            "option": "u8"
          }
        },
        {
          "name": "maintLiabWeight",
          "type": {
            "option": "u8"
          }
        }
      ]
    },
    {
      "name": "setPerpetualMarketStatus",
      "accounts": [
        {
          "name": "market",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "status",
          "type": {
            "defined": "OperatingStatus"
          }
        }
      ]
    },
    {
      "name": "setPoolNodeStatus",
      "accounts": [
        {
          "name": "poolNode",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "status",
          "type": {
            "defined": "OperatingStatus"
          }
        }
      ]
    },
    {
      "name": "setPoolStatus",
      "accounts": [
        {
          "name": "pool",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "status",
          "type": {
            "defined": "OperatingStatus"
          }
        }
      ]
    },
    {
      "name": "setOracleProducts",
      "accounts": [
        {
          "name": "clearing",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "oracleProducts",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "setOracleStubPrice",
      "accounts": [
        {
          "name": "oracleStub",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "price",
          "type": "i128"
        }
      ]
    },
    {
      "name": "setSubAccountDelegate",
      "accounts": [
        {
          "name": "subAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "delegate",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "setPoolDexMarket",
      "accounts": [
        {
          "name": "clearing",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "pool",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "dexMarket",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true
        }
      ],
      "args": []
    },
    {
      "name": "settlePositionWithDelivery",
      "accounts": [
        {
          "name": "cacheAccount",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "masterAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "subAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "market",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "underlyingPoolNode",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "quotePoolNode",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "settlePosition",
      "accounts": [
        {
          "name": "cacheAccount",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "masterAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "subAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "market",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "quotePoolNode",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "sweepMarketFees",
      "accounts": [
        {
          "name": "clearing",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "market",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "quotePoolNode",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "quoteVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "destinationTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "vaultSigner",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "sweepPoolFees",
      "accounts": [
        {
          "name": "tokenPool",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "quotePoolNode",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "quoteVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "destinationTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "vaultSigner",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "transferBetweenSubAccounts",
      "accounts": [
        {
          "name": "clearing",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "cacheAccount",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "masterAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "fromSubAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "toSubAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "assetMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "assetPoolNode",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "updateAccountMargin",
      "accounts": [
        {
          "name": "cacheAccount",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "masterAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "signer",
          "isMut": true,
          "isSigner": true
        }
      ],
      "args": []
    },
    {
      "name": "updateFundingRate",
      "accounts": [
        {
          "name": "cacheAccount",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "market",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "orderbook",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "bids",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "asks",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "updateMarketExpiration",
      "accounts": [
        {
          "name": "clearing",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "market",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "expirationTs",
          "type": "u64"
        }
      ]
    },
    {
      "name": "updateTokenIndex",
      "accounts": [
        {
          "name": "cacheAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "pool",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "withdrawFunds",
      "accounts": [
        {
          "name": "clearing",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "cacheAccount",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "masterAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "subAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "pool",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "poolNode",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "destinationTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "vaultSigner",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "cancelSpotOrder",
      "accounts": [
        {
          "name": "clearing",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "cacheAccount",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "masterAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "subAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "assetPoolNode",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "quotePoolNode",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "assetMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "assetVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "quoteVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "dex",
          "accounts": [
            {
              "name": "market",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "openOrders",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "eventQueue",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "bids",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "asks",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "coinVault",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "pcVault",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "vaultSigner",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "tokenProgram",
              "isMut": false,
              "isSigner": false
            },
            {
              "name": "dexProgram",
              "isMut": false,
              "isSigner": false
            }
          ]
        }
      ],
      "args": [
        {
          "name": "args",
          "type": {
            "defined": "CancelOrderArgs"
          }
        }
      ]
    },
    {
      "name": "closeSpotOpenOrders",
      "accounts": [
        {
          "name": "masterAccount",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "subAccount",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "assetPool",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "dexMarket",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "openOrders",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "dexProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "initSpotOpenOrders",
      "accounts": [
        {
          "name": "masterAccount",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "subAccount",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "pool",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "dexMarket",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "openOrders",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "dexProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "newSpotOrder",
      "accounts": [
        {
          "name": "clearing",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "cacheAccount",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "masterAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "subAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "assetPoolNode",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "quotePoolNode",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "assetMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "assetVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "quoteVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "vaultSigner",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "dex",
          "accounts": [
            {
              "name": "market",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "openOrders",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "eventQueue",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "requestQueue",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "bids",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "asks",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "coinVault",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "pcVault",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "vaultSigner",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "rent",
              "isMut": false,
              "isSigner": false
            },
            {
              "name": "tokenProgram",
              "isMut": false,
              "isSigner": false
            },
            {
              "name": "dexProgram",
              "isMut": false,
              "isSigner": false
            }
          ]
        }
      ],
      "args": [
        {
          "name": "args",
          "type": {
            "defined": "NewSpotOrderArgs"
          }
        }
      ]
    },
    {
      "name": "settleSpotFunds",
      "accounts": [
        {
          "name": "clearing",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "cacheAccount",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "masterAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "subAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "assetPoolNode",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "quotePoolNode",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "assetMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "assetVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "quoteVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "dex",
          "accounts": [
            {
              "name": "market",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "openOrders",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "coinVault",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "pcVault",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "vaultSigner",
              "isMut": false,
              "isSigner": false
            },
            {
              "name": "tokenProgram",
              "isMut": false,
              "isSigner": false
            },
            {
              "name": "dexProgram",
              "isMut": false,
              "isSigner": false
            }
          ]
        }
      ],
      "args": []
    },
    {
      "name": "cancelFuturesOrder",
      "accounts": [
        {
          "name": "clearing",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "cacheAccount",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "masterAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "subAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "market",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "openOrders",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "orderbook",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "eventQueue",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "bids",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "asks",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "quotePoolNode",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "args",
          "type": {
            "defined": "CancelOrderArgs"
          }
        }
      ]
    },
    {
      "name": "consumeFuturesEvents",
      "accounts": [
        {
          "name": "clearing",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "market",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "orderbook",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "eventQueue",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "limit",
          "type": "u16"
        }
      ]
    },
    {
      "name": "newFuturesOrder",
      "accounts": [
        {
          "name": "clearing",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "cacheAccount",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "masterAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "subAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "market",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "openOrders",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "priceHistory",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "orderbook",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "eventQueue",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "bids",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "asks",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "quotePoolNode",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "args",
          "type": {
            "defined": "NewDerivativeOrderArgs"
          }
        }
      ]
    },
    {
      "name": "pruneFuturesOrders",
      "accounts": [
        {
          "name": "clearing",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "cacheAccount",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "masterAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "subAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "market",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "openOrders",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "orderbook",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "eventQueue",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "bids",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "asks",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "quotePoolNode",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "limit",
          "type": "u8"
        }
      ]
    },
    {
      "name": "settleFuturesFunds",
      "accounts": [
        {
          "name": "clearing",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "cacheAccount",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "masterAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "subAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "openOrders",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "market",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "quotePoolNode",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        }
      ],
      "args": []
    },
    {
      "name": "cancelPerpOrder",
      "accounts": [
        {
          "name": "clearing",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "cacheAccount",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "masterAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "subAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "market",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "openOrders",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "orderbook",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "eventQueue",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "bids",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "asks",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "quotePoolNode",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "args",
          "type": {
            "defined": "CancelOrderArgs"
          }
        }
      ]
    },
    {
      "name": "consumePerpEvents",
      "accounts": [
        {
          "name": "clearing",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "market",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "orderbook",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "eventQueue",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "limit",
          "type": "u16"
        }
      ]
    },
    {
      "name": "newPerpOrder",
      "accounts": [
        {
          "name": "clearing",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "cacheAccount",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "masterAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "subAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "market",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "openOrders",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "orderbook",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "eventQueue",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "bids",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "asks",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "quotePoolNode",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "args",
          "type": {
            "defined": "NewDerivativeOrderArgs"
          }
        }
      ]
    },
    {
      "name": "prunePerpOrders",
      "accounts": [
        {
          "name": "clearing",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "cacheAccount",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "masterAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "subAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "market",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "openOrders",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "orderbook",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "eventQueue",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "bids",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "asks",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "quotePoolNode",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "limit",
          "type": "u8"
        }
      ]
    },
    {
      "name": "settlePerpFunds",
      "accounts": [
        {
          "name": "clearing",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "cacheAccount",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "masterAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "subAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "openOrders",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "market",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "quotePoolNode",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "settleFunding",
      "accounts": [
        {
          "name": "cacheAccount",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "masterAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "subAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "openOrders",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "market",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "quotePoolNode",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": []
    }
  ],
  "accounts": [
    {
      "name": "cacheAccount",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "authority",
            "docs": [
              "the authority of the cache"
            ],
            "type": "publicKey"
          },
          {
            "name": "caches",
            "docs": [
              "the price caches, we have enough space here for more oracle maps than ever needed",
              "assuming that oracle products accounts actually get reused"
            ],
            "type": {
              "array": [
                {
                  "defined": "Cache"
                },
                512
              ]
            }
          }
        ]
      }
    },
    {
      "name": "clearing",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "bumpSeed",
            "type": {
              "array": [
                "u8",
                1
              ]
            }
          },
          {
            "name": "clearingType",
            "docs": [
              "the type of the clearing"
            ],
            "type": {
              "defined": "ClearingType"
            }
          },
          {
            "name": "padding1",
            "type": {
              "array": [
                "u8",
                6
              ]
            }
          },
          {
            "name": "clearingNumberSeed",
            "type": {
              "array": [
                "u8",
                1
              ]
            }
          },
          {
            "name": "padding2",
            "type": {
              "array": [
                "u8",
                7
              ]
            }
          },
          {
            "name": "authority",
            "docs": [
              "the clearing's authority"
            ],
            "type": "publicKey"
          },
          {
            "name": "feeMint",
            "docs": [
              "the mint of the token used to calculate fee tiers"
            ],
            "type": "publicKey"
          },
          {
            "name": "padding3",
            "type": {
              "array": [
                "u64",
                4
              ]
            }
          },
          {
            "name": "feeTiers",
            "docs": [
              "the fee tiers"
            ],
            "type": {
              "array": [
                {
                  "defined": "FeeTier"
                },
                10
              ]
            }
          },
          {
            "name": "config",
            "docs": [
              "the config of the clearing"
            ],
            "type": {
              "defined": "ClearingConfig"
            }
          }
        ]
      }
    },
    {
      "name": "whitelist",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "clearing",
            "docs": [
              "the corresponding clearing"
            ],
            "type": "publicKey"
          },
          {
            "name": "authority",
            "docs": [
              "the clearing's authority"
            ],
            "type": "publicKey"
          },
          {
            "name": "accountOwner",
            "docs": [
              "the account owner"
            ],
            "type": "publicKey"
          },
          {
            "name": "account",
            "docs": [
              "the actual cypher account"
            ],
            "type": "publicKey"
          },
          {
            "name": "status",
            "docs": [
              "whitelist status",
              "i.e, when a whitelist status is revoked, the authority of the clearing should be able",
              "to suspend a cypher account"
            ],
            "type": {
              "defined": "WhitelistStatus"
            }
          },
          {
            "name": "padding1",
            "type": {
              "array": [
                "u8",
                7
              ]
            }
          }
        ]
      }
    },
    {
      "name": "futuresMarket",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "inner",
            "docs": [
              "the inner structure which contains all relevant agnostic orderbook related public keys and fields"
            ],
            "type": {
              "defined": "AgnosticMarket"
            }
          },
          {
            "name": "idoAuthority",
            "docs": [
              "the ido authority of the market, if applicable"
            ],
            "type": "publicKey"
          },
          {
            "name": "underlyingMint",
            "docs": [
              "the mint of the underlying token this derivative market may physically deliver"
            ],
            "type": "publicKey"
          },
          {
            "name": "padding1",
            "type": {
              "array": [
                "u64",
                8
              ]
            }
          },
          {
            "name": "tokenSupply",
            "docs": [
              "the supply of the derivative token",
              "i.e in the case of a market being for physical delivery of the underlying asset",
              "the token supply should be equal to the amount of tokens available for delivery"
            ],
            "type": "u64"
          },
          {
            "name": "activatesAt",
            "docs": [
              "timestamp at which the market becomes active"
            ],
            "type": "u64"
          },
          {
            "name": "expiresAt",
            "docs": [
              "timestamp at which the market expires"
            ],
            "type": "u64"
          },
          {
            "name": "positionsCount",
            "docs": [
              "number of open positions in this market"
            ],
            "type": "u64"
          },
          {
            "name": "marketPrice",
            "docs": [
              "the twap price"
            ],
            "type": "i128"
          },
          {
            "name": "totalBorrows",
            "docs": [
              "the total amount of borrows of the derivative"
            ],
            "type": "u64"
          },
          {
            "name": "totalPurchased",
            "docs": [
              "the total amount of purchased tokens in the case of a pre-ido market"
            ],
            "type": "u64"
          },
          {
            "name": "padding2",
            "type": {
              "array": [
                "u64",
                2
              ]
            }
          },
          {
            "name": "totalRaised",
            "docs": [
              "the total amount of quote token that is available for the pre-ido token project's team to be collected"
            ],
            "type": "i128"
          }
        ]
      }
    },
    {
      "name": "perpetualMarket",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "inner",
            "docs": [
              "the inner structure which contains all relevant agnostic orderbook related public keys and fields"
            ],
            "type": {
              "defined": "AgnosticMarket"
            }
          },
          {
            "name": "longFunding",
            "docs": [
              "the long funding"
            ],
            "type": "i128"
          },
          {
            "name": "shortFunding",
            "docs": [
              "the short funding"
            ],
            "type": "i128"
          },
          {
            "name": "lastFundingUpdate",
            "docs": [
              "the timestamp of the last funding update"
            ],
            "type": "u64"
          },
          {
            "name": "impactQuantity",
            "docs": [
              "the impact quantity used when getting bids and asks to calculate book mid price"
            ],
            "type": "u64"
          },
          {
            "name": "padding1",
            "type": {
              "array": [
                "u64",
                10
              ]
            }
          },
          {
            "name": "minFunding",
            "docs": [
              "the minimum funding rate for this market, in percentage"
            ],
            "type": "i8"
          },
          {
            "name": "maxFunding",
            "docs": [
              "the maximum funding rate for this market, in percentage"
            ],
            "type": "i8"
          },
          {
            "name": "padding2",
            "type": {
              "array": [
                "u8",
                6
              ]
            }
          }
        ]
      }
    },
    {
      "name": "oracleProducts",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "productsType",
            "docs": [
              "the products type"
            ],
            "type": {
              "defined": "ProductsType"
            }
          },
          {
            "name": "padding",
            "type": {
              "array": [
                "u8",
                7
              ]
            }
          },
          {
            "name": "symbol",
            "docs": [
              "the symbol of the underlying token that this oracle products account is responsible for",
              "",
              "this is used as a PDA for the oracle products account to more easily derive this account and see if it exists so it is properly reused"
            ],
            "type": {
              "array": [
                "u8",
                32
              ]
            }
          },
          {
            "name": "maxConfidenceInterval",
            "docs": [
              "the maximum confidence interval for the oracle price"
            ],
            "type": "f64"
          },
          {
            "name": "futuresMarket",
            "docs": [
              "the futures market associated with this oracle products account"
            ],
            "type": "publicKey"
          },
          {
            "name": "perpMarket",
            "docs": [
              "the perp market associated with this oracle products account"
            ],
            "type": "publicKey"
          },
          {
            "name": "tokenMint",
            "docs": [
              "the token mint associated with this oracle products account"
            ],
            "type": "publicKey"
          },
          {
            "name": "products",
            "docs": [
              "the product accounts"
            ],
            "type": {
              "vec": {
                "array": [
                  "u8",
                  32
                ]
              }
            }
          },
          {
            "name": "weights",
            "docs": [
              "the weights of the products"
            ],
            "type": {
              "vec": "u16"
            }
          }
        ]
      }
    },
    {
      "name": "oracleStub",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "symbol",
            "docs": [
              "the symbol of the underlying token that this oracle stub provides a feed for"
            ],
            "type": {
              "array": [
                "u8",
                32
              ]
            }
          },
          {
            "name": "price",
            "docs": [
              "The oracle price"
            ],
            "type": "i128"
          }
        ]
      }
    },
    {
      "name": "ordersAccount",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "orderCount",
            "docs": [
              "number of orders"
            ],
            "type": "u8"
          },
          {
            "name": "padding",
            "type": {
              "array": [
                "u8",
                7
              ]
            }
          },
          {
            "name": "authority",
            "docs": [
              "the account's authority"
            ],
            "type": "publicKey"
          },
          {
            "name": "market",
            "docs": [
              "the account's authority"
            ],
            "type": "publicKey"
          },
          {
            "name": "masterAccount",
            "docs": [
              "the master account pubkey"
            ],
            "type": "publicKey"
          },
          {
            "name": "makerBaseVolume",
            "docs": [
              "the accumulated maker base token volume"
            ],
            "type": "u64"
          },
          {
            "name": "makerQuoteVolume",
            "docs": [
              "the accumulated maker quote token volume"
            ],
            "type": "u64"
          },
          {
            "name": "takerBaseVolume",
            "docs": [
              "the accumulated taker base token volume"
            ],
            "type": "u64"
          },
          {
            "name": "takerQuoteVolume",
            "docs": [
              "the accumulated taker quote token volume"
            ],
            "type": "u64"
          },
          {
            "name": "baseTokenFree",
            "docs": [
              "the amount of base token free"
            ],
            "type": {
              "array": [
                "u64",
                24
              ]
            }
          },
          {
            "name": "baseTokenLocked",
            "docs": [
              "the amount of base token locked"
            ],
            "type": {
              "array": [
                "u64",
                24
              ]
            }
          },
          {
            "name": "quoteTokenFree",
            "docs": [
              "the amount of quote token free"
            ],
            "type": {
              "array": [
                "u64",
                24
              ]
            }
          },
          {
            "name": "quoteTokenLocked",
            "docs": [
              "the amount of quote token locked in orders"
            ],
            "type": {
              "array": [
                "u64",
                24
              ]
            }
          },
          {
            "name": "openOrders",
            "docs": [
              "the open orders in this account"
            ],
            "type": {
              "array": [
                {
                  "defined": "OpenOrder"
                },
                128
              ]
            }
          }
        ]
      }
    },
    {
      "name": "poolNode",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "cacheIndex",
            "docs": [
              "the index of the cache for the pool that this node belongs to"
            ],
            "type": "u16"
          },
          {
            "name": "vaultSignerSeed",
            "docs": [
              "the bump seed"
            ],
            "type": {
              "array": [
                "u8",
                1
              ]
            }
          },
          {
            "name": "nodeNumber",
            "docs": [
              "the number of the node, also used as a seed for the pool node pda"
            ],
            "type": "u8"
          },
          {
            "name": "operatingStatus",
            "type": {
              "defined": "OperatingStatus"
            }
          },
          {
            "name": "padding1",
            "type": {
              "array": [
                "u8",
                11
              ]
            }
          },
          {
            "name": "selfAddress",
            "docs": [
              "the pool node's address, used as a seed for the vault signer"
            ],
            "type": "publicKey"
          },
          {
            "name": "authority",
            "docs": [
              "the authority over this account"
            ],
            "type": "publicKey"
          },
          {
            "name": "cache",
            "docs": [
              "the cache account"
            ],
            "type": "publicKey"
          },
          {
            "name": "pool",
            "docs": [
              "the pool this node belongs to"
            ],
            "type": "publicKey"
          },
          {
            "name": "tokenMint",
            "docs": [
              "the node's token mint"
            ],
            "type": "publicKey"
          },
          {
            "name": "tokenVault",
            "docs": [
              "the node's token vault"
            ],
            "type": "publicKey"
          },
          {
            "name": "vaultSigner",
            "docs": [
              "the node's vault signer"
            ],
            "type": "publicKey"
          },
          {
            "name": "deposits",
            "docs": [
              "the amount of deposits"
            ],
            "type": "i128"
          },
          {
            "name": "borrows",
            "docs": [
              "the amount of borrows"
            ],
            "type": "i128"
          },
          {
            "name": "accumBorrows",
            "docs": [
              "accumulated borrows"
            ],
            "type": "i128"
          },
          {
            "name": "accumRepays",
            "docs": [
              "accumulated repays"
            ],
            "type": "i128"
          },
          {
            "name": "protocolFees",
            "docs": [
              "protocol fees accumulated so far"
            ],
            "type": "u64"
          },
          {
            "name": "padding2",
            "type": {
              "array": [
                "u64",
                1
              ]
            }
          }
        ]
      }
    },
    {
      "name": "pool",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "bumpSeed",
            "docs": [
              "the bump seed"
            ],
            "type": {
              "array": [
                "u8",
                1
              ]
            }
          },
          {
            "name": "operatingStatus",
            "docs": [
              "the pool's operating status"
            ],
            "type": {
              "defined": "OperatingStatus"
            }
          },
          {
            "name": "padding1",
            "type": {
              "array": [
                "u8",
                14
              ]
            }
          },
          {
            "name": "poolName",
            "docs": [
              "the name of the pool, which is also used as a seed"
            ],
            "type": {
              "array": [
                "u8",
                32
              ]
            }
          },
          {
            "name": "config",
            "docs": [
              "the pool config"
            ],
            "type": {
              "defined": "PoolConfig"
            }
          },
          {
            "name": "authority",
            "docs": [
              "the authority over this account"
            ],
            "type": "publicKey"
          },
          {
            "name": "tokenMint",
            "docs": [
              "the address of the token mint this pool represents"
            ],
            "type": "publicKey"
          },
          {
            "name": "padding2",
            "type": {
              "array": [
                "u64",
                4
              ]
            }
          },
          {
            "name": "oracleProducts",
            "docs": [
              "the oracle products account"
            ],
            "type": "publicKey"
          },
          {
            "name": "dexMarket",
            "docs": [
              "the dex market for this pool"
            ],
            "type": "publicKey"
          },
          {
            "name": "cache",
            "docs": [
              "the price cache account"
            ],
            "type": "publicKey"
          },
          {
            "name": "padding3",
            "type": {
              "array": [
                "u64",
                8
              ]
            }
          },
          {
            "name": "deposits",
            "docs": [
              "the amount of deposits across all nodes"
            ],
            "type": "i128"
          },
          {
            "name": "borrows",
            "docs": [
              "the amount of borrows across all nodes"
            ],
            "type": "i128"
          },
          {
            "name": "depositIndex",
            "docs": [
              "the deposit index"
            ],
            "type": "i128"
          },
          {
            "name": "borrowIndex",
            "docs": [
              "the borrow index"
            ],
            "type": "i128"
          },
          {
            "name": "accumDepositInterestPayment",
            "docs": [
              "accumulated deposit interest payments denominated in quote currency"
            ],
            "type": "i128"
          },
          {
            "name": "accumBorrowInterestPayment",
            "docs": [
              "accumulated borrow interest payments denominated in quote currency"
            ],
            "type": "i128"
          },
          {
            "name": "indexUpdatedAt",
            "docs": [
              "timestamp of the last index update"
            ],
            "type": "u64"
          },
          {
            "name": "protocolFees",
            "docs": [
              "protocol fees accumulated so far"
            ],
            "type": "u64"
          },
          {
            "name": "insuranceFund",
            "docs": [
              "the insurance fund for this pool"
            ],
            "type": "u64"
          },
          {
            "name": "padding4",
            "type": {
              "array": [
                "u64",
                12
              ]
            }
          },
          {
            "name": "nodes",
            "type": {
              "array": [
                {
                  "defined": "NodeInfo"
                },
                24
              ]
            }
          }
        ]
      }
    },
    {
      "name": "priceHistory",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "market",
            "docs": [
              "market this price history is for"
            ],
            "type": "publicKey"
          },
          {
            "name": "data",
            "docs": [
              "array of price infos."
            ],
            "type": {
              "array": [
                {
                  "defined": "PriceWithTs"
                },
                14400
              ]
            }
          },
          {
            "name": "config",
            "type": {
              "defined": "PriceHistoryConfig"
            }
          },
          {
            "name": "longerHead",
            "docs": [
              "head of prices for longer time horizon."
            ],
            "type": "u16"
          },
          {
            "name": "shorterHead",
            "docs": [
              "head of prices for shorter time horizon."
            ],
            "type": "u16"
          },
          {
            "name": "tail",
            "docs": [
              "tail of prices(most recently added price)."
            ],
            "type": "u16"
          },
          {
            "name": "padding1",
            "type": "u16"
          },
          {
            "name": "padding2",
            "type": {
              "array": [
                "u64",
                8
              ]
            }
          }
        ]
      }
    },
    {
      "name": "cypherAccount",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "bumpSeed",
            "docs": [
              "the bump seed"
            ],
            "type": {
              "array": [
                "u8",
                1
              ]
            }
          },
          {
            "name": "accountNumberSeed",
            "docs": [
              "the account number seed"
            ],
            "type": {
              "array": [
                "u8",
                1
              ]
            }
          },
          {
            "name": "accountType",
            "docs": [
              "the account type"
            ],
            "type": {
              "defined": "AccountType"
            }
          },
          {
            "name": "feeTier",
            "docs": [
              "the fee tier of this account"
            ],
            "type": "u8"
          },
          {
            "name": "padding",
            "type": {
              "array": [
                "u8",
                12
              ]
            }
          },
          {
            "name": "clearing",
            "docs": [
              "the clearing this account belongs to"
            ],
            "type": "publicKey"
          },
          {
            "name": "authority",
            "docs": [
              "the account's authority, should match sub accounts authority"
            ],
            "type": "publicKey"
          },
          {
            "name": "delegate",
            "docs": [
              "the account's delegate"
            ],
            "type": "publicKey"
          },
          {
            "name": "subAccountCaches",
            "docs": [
              "the sub account cache"
            ],
            "type": {
              "array": [
                {
                  "defined": "SubAccountCache"
                },
                24
              ]
            }
          },
          {
            "name": "updatedAt",
            "docs": [
              "slot of the last account update"
            ],
            "type": "u64"
          },
          {
            "name": "padding2",
            "type": {
              "array": [
                "u8",
                8
              ]
            }
          }
        ]
      }
    },
    {
      "name": "cypherSubAccount",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "bumpSeed",
            "docs": [
              "the bump seed"
            ],
            "type": {
              "array": [
                "u8",
                1
              ]
            }
          },
          {
            "name": "accountNumberSeed",
            "docs": [
              "the account number seed"
            ],
            "type": {
              "array": [
                "u8",
                1
              ]
            }
          },
          {
            "name": "marginingType",
            "docs": [
              "the margining type of this account"
            ],
            "type": {
              "defined": "SubAccountMargining"
            }
          },
          {
            "name": "padding",
            "type": {
              "array": [
                "u8",
                13
              ]
            }
          },
          {
            "name": "accountAlias",
            "docs": [
              "the alias of the account"
            ],
            "type": {
              "array": [
                "u8",
                32
              ]
            }
          },
          {
            "name": "clearing",
            "docs": [
              "the associated clearing"
            ],
            "type": "publicKey"
          },
          {
            "name": "masterAccount",
            "docs": [
              "the master account"
            ],
            "type": "publicKey"
          },
          {
            "name": "authority",
            "docs": [
              "the authority"
            ],
            "type": "publicKey"
          },
          {
            "name": "delegate",
            "docs": [
              "the delegate"
            ],
            "type": "publicKey"
          },
          {
            "name": "updatedAt",
            "docs": [
              "the slot of the last update of this account"
            ],
            "type": "u64"
          },
          {
            "name": "claimableRewards",
            "docs": [
              "the amount of claimable liquidity mining rewards"
            ],
            "type": "u64"
          },
          {
            "name": "padding2",
            "type": {
              "array": [
                "u64",
                7
              ]
            }
          },
          {
            "name": "padding3",
            "type": {
              "array": [
                "u8",
                8
              ]
            }
          },
          {
            "name": "positions",
            "docs": [
              "the positions of this sub account"
            ],
            "type": {
              "array": [
                {
                  "defined": "PositionSlot"
                },
                24
              ]
            }
          }
        ]
      }
    }
  ],
  "types": [
    {
      "name": "LiquidityMiningArgs",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "rate",
            "docs": [
              "the rate that is used to convert liquidity points to the LM reward token"
            ],
            "type": "i128"
          },
          {
            "name": "maxDepthBps",
            "docs": [
              "max depth on the book in bps"
            ],
            "type": "i128"
          },
          {
            "name": "periodStart",
            "docs": [
              "timestamp of the start of the liquidity mining incentive period"
            ],
            "type": "u64"
          },
          {
            "name": "targetPeriodLength",
            "docs": [
              "target time length for a liquidity mining period"
            ],
            "type": "u64"
          },
          {
            "name": "tokensLeft",
            "docs": [
              "tokens left for this period."
            ],
            "type": "u64"
          },
          {
            "name": "tokensPerPeriod",
            "docs": [
              "total amount of tokens allocated for a given period"
            ],
            "type": "u64"
          },
          {
            "name": "tokenMint",
            "docs": [
              "the token mint of the token being used for rewards"
            ],
            "type": "publicKey"
          },
          {
            "name": "minRateAdj",
            "docs": [
              "the minimum rate adjustment"
            ],
            "type": "u64"
          },
          {
            "name": "maxRateAdj",
            "docs": [
              "the maximum rate adjusment"
            ],
            "type": "u64"
          },
          {
            "name": "sizeCutoff",
            "docs": [
              "the size cut off for rewards"
            ],
            "type": "u64"
          },
          {
            "name": "tokenDecimals",
            "docs": [
              "the decimals of the token being rewarded"
            ],
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "FeeTierArgs",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "balance",
            "docs": [
              "the token balance necessary for this tier"
            ],
            "type": "u64"
          },
          {
            "name": "tier",
            "docs": [
              "the tier identifier, should start at 1 up to 10"
            ],
            "type": "u8"
          },
          {
            "name": "makerBps",
            "docs": [
              "the maker fee in bps",
              "i.e, if this value is not zero, the rebate bps field can't be positive"
            ],
            "type": "u8"
          },
          {
            "name": "takerBps",
            "docs": [
              "the taker fee in bps"
            ],
            "type": "u8"
          },
          {
            "name": "rebateBps",
            "docs": [
              "the maker rebate in bps",
              "i.e, if this value is positive then the maker bps field should be zero"
            ],
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "CreateOracleProductsArgs",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "productsType",
            "docs": [
              "the products type"
            ],
            "type": {
              "defined": "ProductsType"
            }
          },
          {
            "name": "numProducts",
            "docs": [
              "the number of products that compose the oracle price feed"
            ],
            "type": "u8"
          },
          {
            "name": "maxConfidenceInterval",
            "docs": [
              "the maxmimum confidence interval"
            ],
            "type": "f64"
          },
          {
            "name": "weights",
            "docs": [
              "the weights of those products"
            ],
            "type": {
              "vec": "u16"
            }
          },
          {
            "name": "symbol",
            "docs": [
              "the symbol of this asset, i.e \"SOL\""
            ],
            "type": {
              "array": [
                "u8",
                32
              ]
            }
          }
        ]
      }
    },
    {
      "name": "CreateClearingArgs",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "clearingNumber",
            "docs": [
              "the clearing number, which is also a seed for the clearing to be a signer"
            ],
            "type": "u8"
          },
          {
            "name": "bump",
            "docs": [
              "the bump of the clearing's program derived address"
            ],
            "type": "u8"
          },
          {
            "name": "maintMargin",
            "docs": [
              "the maintenance margin"
            ],
            "type": "u8"
          },
          {
            "name": "initMargin",
            "docs": [
              "the initialization margin"
            ],
            "type": "u8"
          },
          {
            "name": "targetMargin",
            "docs": [
              "the target margin used by liquidators"
            ],
            "type": "u8"
          },
          {
            "name": "liqLiqorFee",
            "docs": [
              "the liquidation fee bonus for the liquidator"
            ],
            "type": "u8"
          },
          {
            "name": "liqInsuranceFee",
            "docs": [
              "the liquidation fee for the insurance fund"
            ],
            "type": "u8"
          },
          {
            "name": "feeMint",
            "docs": [
              "the fee mint"
            ],
            "type": "publicKey"
          },
          {
            "name": "clearingType",
            "docs": [
              "the clearing type"
            ],
            "type": {
              "defined": "ClearingType"
            }
          },
          {
            "name": "feeTiers",
            "docs": [
              "fee tier config"
            ],
            "type": {
              "vec": {
                "defined": "FeeTierArgs"
              }
            }
          }
        ]
      }
    },
    {
      "name": "CreatePerpetualMarketArgs",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "marketType",
            "docs": [
              "the type of the market"
            ],
            "type": {
              "defined": "MarketType"
            }
          },
          {
            "name": "marketBump",
            "docs": [
              "the market's bump"
            ],
            "type": "u8"
          },
          {
            "name": "initAssetWeight",
            "docs": [
              "the weight of this market's positions as an asset for initialization purposes"
            ],
            "type": "u8"
          },
          {
            "name": "initLiabWeight",
            "docs": [
              "the weight of this market's positions as a liability for initialization purposes"
            ],
            "type": "u8"
          },
          {
            "name": "maintAssetWeight",
            "docs": [
              "the weight of this market's positions as an asset for maintenance purposes"
            ],
            "type": "u8"
          },
          {
            "name": "maintLiabWeight",
            "docs": [
              "the weight of this market's positions as a liability for maintenance purposes"
            ],
            "type": "u8"
          },
          {
            "name": "minBaseOrderSize",
            "docs": [
              "the minimum order size in the base token"
            ],
            "type": "u64"
          },
          {
            "name": "tickSize",
            "docs": [
              "the tick size of the market"
            ],
            "type": "u64"
          },
          {
            "name": "baseMultiplier",
            "docs": [
              "the base multiplier for the market"
            ],
            "type": "u64"
          },
          {
            "name": "quoteMultiplier",
            "docs": [
              "the quote multiplier for the market"
            ],
            "type": "u64"
          },
          {
            "name": "impactQuantity",
            "docs": [
              "the impact quantity used when getting bids and asks to calculate book mid price"
            ],
            "type": "u64"
          },
          {
            "name": "minFunding",
            "docs": [
              "the minimum funding rate for this market, in percentage"
            ],
            "type": "i8"
          },
          {
            "name": "maxFunding",
            "docs": [
              "the maximum funding rate for this market, in percentage"
            ],
            "type": "i8"
          },
          {
            "name": "maxBaseOrderSize",
            "docs": [
              "the maximum order base size for non-postOnly orders"
            ],
            "type": "u64"
          },
          {
            "name": "maxQuoteOrderSize",
            "docs": [
              "the maximum order quote size for non-postOnly orders"
            ],
            "type": "u64"
          },
          {
            "name": "decimals",
            "docs": [
              "the decimals used for the derivative asset positions"
            ],
            "type": "u8"
          },
          {
            "name": "marketName",
            "docs": [
              "the market's ticker/name, i.e \"SOL-PERP\""
            ],
            "type": {
              "array": [
                "u8",
                32
              ]
            }
          }
        ]
      }
    },
    {
      "name": "CreateFuturesMarketArgs",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "marketType",
            "docs": [
              "the type of the market"
            ],
            "type": {
              "defined": "MarketType"
            }
          },
          {
            "name": "deliveryType",
            "docs": [
              "the type of settlement"
            ],
            "type": {
              "defined": "SettlementType"
            }
          },
          {
            "name": "expiresAt",
            "docs": [
              "the timestamp at which the market expires"
            ],
            "type": "u64"
          },
          {
            "name": "activatesAt",
            "docs": [
              "the timestamp at which the market activates"
            ],
            "type": "u64"
          },
          {
            "name": "tokenSupply",
            "docs": [
              "the token supply of the derivative asset"
            ],
            "type": "u64"
          },
          {
            "name": "marketBump",
            "docs": [
              "the market's bump"
            ],
            "type": "u8"
          },
          {
            "name": "initAssetWeight",
            "docs": [
              "the weight of this market's positions as an asset for initialization purposes"
            ],
            "type": "u8"
          },
          {
            "name": "initLiabWeight",
            "docs": [
              "the weight of this market's positions as a liability for initialization purposes"
            ],
            "type": "u8"
          },
          {
            "name": "maintAssetWeight",
            "docs": [
              "the weight of this market's positions as an asset for maintenance purposes"
            ],
            "type": "u8"
          },
          {
            "name": "maintLiabWeight",
            "docs": [
              "the weight of this market's positions as a liability for maintenance purposes"
            ],
            "type": "u8"
          },
          {
            "name": "twapLongerTimeHorizon",
            "docs": [
              "the twap's longer time horizon"
            ],
            "type": "u64"
          },
          {
            "name": "twapShorterTimeHorizon",
            "docs": [
              "the twap's shorter time horizon"
            ],
            "type": "u64"
          },
          {
            "name": "twapPriceCollectionTick",
            "docs": [
              "the twap price collection tick"
            ],
            "type": "u64"
          },
          {
            "name": "minBaseOrderSize",
            "docs": [
              "the minimum order size in the base token"
            ],
            "type": "u64"
          },
          {
            "name": "tickSize",
            "docs": [
              "the tick size of the market"
            ],
            "type": "u64"
          },
          {
            "name": "baseMultiplier",
            "docs": [
              "the base multiplier for the market"
            ],
            "type": "u64"
          },
          {
            "name": "quoteMultiplier",
            "docs": [
              "the quote multiplier for the market"
            ],
            "type": "u64"
          },
          {
            "name": "maxBaseOrderSize",
            "docs": [
              "the maximum order base size for non-postOnly orders"
            ],
            "type": "u64"
          },
          {
            "name": "maxQuoteOrderSize",
            "docs": [
              "the maximum order quote size for non-postOnly orders"
            ],
            "type": "u64"
          },
          {
            "name": "decimals",
            "docs": [
              "the decimals used for the derivative asset positions"
            ],
            "type": "u8"
          },
          {
            "name": "marketName",
            "docs": [
              "the market's ticker/name, i.e \"SOL-09/30/22\" for a sept expiry dated future"
            ],
            "type": {
              "array": [
                "u8",
                32
              ]
            }
          }
        ]
      }
    },
    {
      "name": "CreatePoolArgs",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "vaultSignerBump",
            "docs": [
              "the vault signer bump"
            ],
            "type": "u8"
          },
          {
            "name": "poolBump",
            "docs": [
              "the pool bump"
            ],
            "type": "u8"
          },
          {
            "name": "optimalApr",
            "docs": [
              "the optimal apr ratio for the pool"
            ],
            "type": "u16"
          },
          {
            "name": "optimalUtil",
            "docs": [
              "the optimal utilization for the pool"
            ],
            "type": "u16"
          },
          {
            "name": "maxApr",
            "docs": [
              "the max apr for the pool"
            ],
            "type": "u16"
          },
          {
            "name": "decimals",
            "docs": [
              "the decimals of the spl token mint associated with the pool"
            ],
            "type": "u8"
          },
          {
            "name": "initAssetWeight",
            "docs": [
              "the weight of this token as an asset for initialization purposes"
            ],
            "type": "u8"
          },
          {
            "name": "initLiabWeight",
            "docs": [
              "the weight of this token as a liability for initialization purposes"
            ],
            "type": "u8"
          },
          {
            "name": "maintAssetWeight",
            "docs": [
              "the weight of this token as an asset for maintenance purposes"
            ],
            "type": "u8"
          },
          {
            "name": "maintLiabWeight",
            "docs": [
              "the weight of this token as a liability for maintenance purposes"
            ],
            "type": "u8"
          },
          {
            "name": "poolName",
            "docs": [
              "the pool's ticker/name, i.e \"SOL\""
            ],
            "type": {
              "array": [
                "u8",
                32
              ]
            }
          }
        ]
      }
    },
    {
      "name": "NewSpotOrderArgs",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "side",
            "docs": [
              "the side of the order"
            ],
            "type": {
              "defined": "Side"
            }
          },
          {
            "name": "limitPrice",
            "docs": [
              "the limit price for the order"
            ],
            "type": "u64"
          },
          {
            "name": "maxCoinQty",
            "docs": [
              "the base quantity to buy or sell"
            ],
            "type": "u64"
          },
          {
            "name": "maxNativePcQtyIncludingFees",
            "docs": [
              "the max quote quanity to receive or pay"
            ],
            "type": "u64"
          },
          {
            "name": "orderType",
            "docs": [
              "the order type"
            ],
            "type": {
              "defined": "OrderType"
            }
          },
          {
            "name": "selfTradeBehavior",
            "docs": [
              "the self trade behavior"
            ],
            "type": {
              "defined": "SelfTradeBehavior"
            }
          },
          {
            "name": "clientOrderId",
            "docs": [
              "the client order id"
            ],
            "type": "u64"
          },
          {
            "name": "limit",
            "docs": [
              "the maximum number of orders to be matched against"
            ],
            "type": "u16"
          }
        ]
      }
    },
    {
      "name": "NewDerivativeOrderArgs",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "side",
            "docs": [
              "the side of the order"
            ],
            "type": {
              "defined": "Side"
            }
          },
          {
            "name": "limitPrice",
            "docs": [
              "the limit price for the order (as FP32)"
            ],
            "type": "u64"
          },
          {
            "name": "maxBaseQty",
            "docs": [
              "the base quantity to buy or sell"
            ],
            "type": "u64"
          },
          {
            "name": "maxQuoteQty",
            "docs": [
              "the max quote quanity to receive or pay"
            ],
            "type": "u64"
          },
          {
            "name": "orderType",
            "docs": [
              "the order type"
            ],
            "type": {
              "defined": "DerivativeOrderType"
            }
          },
          {
            "name": "clientOrderId",
            "docs": [
              "the client order id"
            ],
            "type": "u64"
          },
          {
            "name": "limit",
            "docs": [
              "the maximum number of orders to be matched against"
            ],
            "type": "u16"
          },
          {
            "name": "maxTs",
            "docs": [
              "the time in force timestamp for this order"
            ],
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "CancelOrderArgs",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "orderId",
            "docs": [
              "the order id"
            ],
            "type": "u128"
          },
          {
            "name": "side",
            "docs": [
              "the side of the order"
            ],
            "type": {
              "defined": "Side"
            }
          },
          {
            "name": "isClientId",
            "docs": [
              "whether the given order id is a a client id"
            ],
            "type": "bool"
          }
        ]
      }
    },
    {
      "name": "Cache",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "oracleProducts",
            "docs": [
              "the oracle products account that is used to derive this price feed"
            ],
            "type": "publicKey"
          },
          {
            "name": "oraclePrice",
            "docs": [
              "the latest price"
            ],
            "type": "i128"
          },
          {
            "name": "marketPrice",
            "docs": [
              "the twap price for the futures market"
            ],
            "type": "i128"
          },
          {
            "name": "updatedAt",
            "docs": [
              "the slot at which this cache was last updated"
            ],
            "type": "u64"
          },
          {
            "name": "padding1",
            "type": {
              "array": [
                "u8",
                8
              ]
            }
          },
          {
            "name": "depositIndex",
            "docs": [
              "the deposit index of the spot token"
            ],
            "type": "i128"
          },
          {
            "name": "borrowIndex",
            "docs": [
              "the borrow index of the spot token"
            ],
            "type": "i128"
          },
          {
            "name": "spotInitAssetWeight",
            "docs": [
              "the init asset weight of the spot token"
            ],
            "type": "u8"
          },
          {
            "name": "spotMaintAssetWeight",
            "docs": [
              "the maint asset weight of the spot token"
            ],
            "type": "u8"
          },
          {
            "name": "spotInitLiabWeight",
            "docs": [
              "the init liab weight of the spot token"
            ],
            "type": "u8"
          },
          {
            "name": "spotMaintLiabWeight",
            "docs": [
              "the maint liab weight of the spot token"
            ],
            "type": "u8"
          },
          {
            "name": "futuresInitAssetWeight",
            "docs": [
              "the init asset weight of the futures position"
            ],
            "type": "u8"
          },
          {
            "name": "futuresMaintAssetWeight",
            "docs": [
              "the maint asset weight of the futures position"
            ],
            "type": "u8"
          },
          {
            "name": "futuresInitLiabWeight",
            "docs": [
              "the init liab weight of the futures position"
            ],
            "type": "u8"
          },
          {
            "name": "futuresMaintLiabWeight",
            "docs": [
              "the maint liab weight of the futures position"
            ],
            "type": "u8"
          },
          {
            "name": "perpInitAssetWeight",
            "docs": [
              "the init asset weight of the perp position"
            ],
            "type": "u8"
          },
          {
            "name": "perpMaintAssetWeight",
            "docs": [
              "the maint asset weight of the perp position"
            ],
            "type": "u8"
          },
          {
            "name": "perpInitLiabWeight",
            "docs": [
              "the init liab weight of the perp position"
            ],
            "type": "u8"
          },
          {
            "name": "perpMaintLiabWeight",
            "docs": [
              "the maint liab weight of the perp position"
            ],
            "type": "u8"
          },
          {
            "name": "decimals",
            "docs": [
              "the decimals of the spl token traded on the spot market and available for deposit"
            ],
            "type": "u8"
          },
          {
            "name": "futuresDecimals",
            "docs": [
              "the decimals of derivative asset for futures markets"
            ],
            "type": "u8"
          },
          {
            "name": "perpDecimals",
            "docs": [
              "the decimals of derivative asset for perpetual markets"
            ],
            "type": "u8"
          },
          {
            "name": "padding2",
            "type": {
              "array": [
                "u8",
                1
              ]
            }
          }
        ]
      }
    },
    {
      "name": "FeeTier",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "balance",
            "docs": [
              "the balance necessary"
            ],
            "type": "u64"
          },
          {
            "name": "makerBps",
            "docs": [
              "the maker fee in bps",
              "i.e, this value should be zero whenever the maker rebate is supposed to be positive"
            ],
            "type": "u8"
          },
          {
            "name": "takerBps",
            "docs": [
              "the taker fee in bps"
            ],
            "type": "u8"
          },
          {
            "name": "rebateBps",
            "docs": [
              "the maker rebate in bps",
              "i.e this value should only be positive whenever the maker rate itself is zero"
            ],
            "type": "u8"
          },
          {
            "name": "tier",
            "docs": [
              "the tier identifier, should start at 1"
            ],
            "type": "u8"
          },
          {
            "name": "padding1",
            "type": {
              "array": [
                "u8",
                4
              ]
            }
          }
        ]
      }
    },
    {
      "name": "ClearingConfig",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "maintMargin",
            "docs": [
              "the maintenance margin"
            ],
            "type": "u8"
          },
          {
            "name": "initMargin",
            "docs": [
              "the initialization margin"
            ],
            "type": "u8"
          },
          {
            "name": "targetMargin",
            "docs": [
              "the target margin used by liquidators"
            ],
            "type": "u8"
          },
          {
            "name": "liqLiqorFee",
            "docs": [
              "the liquidation fee bonus for the liquidator"
            ],
            "type": "u8"
          },
          {
            "name": "liqInsuranceFee",
            "docs": [
              "the liquidation fee for the insurance fund"
            ],
            "type": "u8"
          },
          {
            "name": "padding1",
            "type": {
              "array": [
                "u8",
                3
              ]
            }
          }
        ]
      }
    },
    {
      "name": "MarketConfig",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "signerSeeds",
            "docs": [
              "the signer seeds for this account"
            ],
            "type": {
              "array": [
                "u8",
                1
              ]
            }
          },
          {
            "name": "marketType",
            "docs": [
              "the type of this market"
            ],
            "type": {
              "defined": "MarketType"
            }
          },
          {
            "name": "settlementType",
            "docs": [
              "the type of delivery for this market in case it is a futures market"
            ],
            "type": {
              "defined": "SettlementType"
            }
          },
          {
            "name": "isActive",
            "docs": [
              "whether the market is active",
              "i.e, in the case of a market being for physical delivery of the underlying asset",
              "the market cannot become active until the vault of the underlying asset being delivered has",
              "a balance equivalent to the token supply of the derivative asset"
            ],
            "type": "bool"
          },
          {
            "name": "cacheIndex",
            "docs": [
              "the cache index for this market"
            ],
            "type": "u16"
          },
          {
            "name": "initAssetWeight",
            "docs": [
              "the init asset weight of the pool's positions for margin calculations"
            ],
            "type": "u8"
          },
          {
            "name": "initLiabWeight",
            "docs": [
              "the init liability weight of the pool's positions for margin calculations"
            ],
            "type": "u8"
          },
          {
            "name": "maintAssetWeight",
            "docs": [
              "the maint asset weight of the pool's positions for margin calculations"
            ],
            "type": "u8"
          },
          {
            "name": "maintLiabWeight",
            "docs": [
              "the maint liability weight of the pool's positions for margin calculations"
            ],
            "type": "u8"
          },
          {
            "name": "decimals",
            "docs": [
              "the decimals used for the target oracle price of this pool's asset"
            ],
            "type": "u8"
          },
          {
            "name": "operatingStatus",
            "docs": [
              "the operating status of the market"
            ],
            "type": {
              "defined": "OperatingStatus"
            }
          },
          {
            "name": "padding",
            "type": {
              "array": [
                "u8",
                4
              ]
            }
          }
        ]
      }
    },
    {
      "name": "LiquidityMiningInfo",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "tokenMint",
            "docs": [
              "the token mint of the token being used for rewards"
            ],
            "type": "publicKey"
          },
          {
            "name": "rate",
            "docs": [
              "the rate that is used to convert liquidity points to the LM reward token"
            ],
            "type": "i128"
          },
          {
            "name": "maxDepthBps",
            "docs": [
              "max depth on the book in bps"
            ],
            "type": "i128"
          },
          {
            "name": "periodStart",
            "docs": [
              "timestamp of the start of the liquidity mining incentive period"
            ],
            "type": "u64"
          },
          {
            "name": "targetPeriodLength",
            "docs": [
              "target time length for a liquidity mining period"
            ],
            "type": "u64"
          },
          {
            "name": "tokensLeft",
            "docs": [
              "tokens left for this period."
            ],
            "type": "u64"
          },
          {
            "name": "tokensPerPeriod",
            "docs": [
              "total amount of tokens allocated for a given period"
            ],
            "type": "u64"
          },
          {
            "name": "minRateAdj",
            "docs": [
              "the minimum rate adjustment"
            ],
            "type": "u64"
          },
          {
            "name": "maxRateAdj",
            "docs": [
              "the maximum rate adjusment"
            ],
            "type": "u64"
          },
          {
            "name": "sizeCutoff",
            "docs": [
              "the size cut off for rewards"
            ],
            "type": "u64"
          },
          {
            "name": "tokenDecimals",
            "docs": [
              "the decimals of the token being rewarded"
            ],
            "type": "u8"
          },
          {
            "name": "padding1",
            "type": {
              "array": [
                "u8",
                7
              ]
            }
          }
        ]
      }
    },
    {
      "name": "AgnosticMarket",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "config",
            "docs": [
              "the config of the market"
            ],
            "type": {
              "defined": "MarketConfig"
            }
          },
          {
            "name": "marketName",
            "docs": [
              "the name of the market, which is also used as a seed"
            ],
            "type": {
              "array": [
                "u8",
                32
              ]
            }
          },
          {
            "name": "orderbook",
            "docs": [
              "the order book for this market"
            ],
            "type": "publicKey"
          },
          {
            "name": "bids",
            "docs": [
              "the bids account for this market"
            ],
            "type": "publicKey"
          },
          {
            "name": "asks",
            "docs": [
              "the asks account for this market"
            ],
            "type": "publicKey"
          },
          {
            "name": "eventQueue",
            "docs": [
              "the asks account for this market"
            ],
            "type": "publicKey"
          },
          {
            "name": "authority",
            "docs": [
              "the authority of the market"
            ],
            "type": "publicKey"
          },
          {
            "name": "priceHistory",
            "docs": [
              "the price history account for on-chain twap"
            ],
            "type": "publicKey"
          },
          {
            "name": "oracleProducts",
            "docs": [
              "the oracle products account"
            ],
            "type": "publicKey"
          },
          {
            "name": "padding1",
            "type": {
              "array": [
                "u64",
                8
              ]
            }
          },
          {
            "name": "cache",
            "docs": [
              "the cache account"
            ],
            "type": "publicKey"
          },
          {
            "name": "quotePool",
            "docs": [
              "the quote pool"
            ],
            "type": "publicKey"
          },
          {
            "name": "padding2",
            "type": {
              "array": [
                "u64",
                8
              ]
            }
          },
          {
            "name": "padding3",
            "type": {
              "array": [
                "u64",
                2
              ]
            }
          },
          {
            "name": "baseVolume",
            "docs": [
              "the market's total historical volume in base token"
            ],
            "type": "u64"
          },
          {
            "name": "quoteVolume",
            "docs": [
              "the market's total historical volume in quote token"
            ],
            "type": "u64"
          },
          {
            "name": "liquidityMiningInfo",
            "docs": [
              "the current liquidity mining parameters"
            ],
            "type": {
              "defined": "LiquidityMiningInfo"
            }
          },
          {
            "name": "minBaseOrderSize",
            "docs": [
              "the market's minimum allowed order size in base token amount"
            ],
            "type": "u64"
          },
          {
            "name": "tickSize",
            "docs": [
              "the tick size of the market"
            ],
            "type": "u64"
          },
          {
            "name": "baseMultiplier",
            "docs": [
              "the base currency multiplier"
            ],
            "type": "u64"
          },
          {
            "name": "quoteMultiplier",
            "docs": [
              "the quote currency multiplier"
            ],
            "type": "u64"
          },
          {
            "name": "protocolFees",
            "docs": [
              "the currently accumulated trading fees"
            ],
            "type": "u64"
          },
          {
            "name": "insuranceFund",
            "docs": [
              "the curently accumulated insurance fund for this market"
            ],
            "type": "u64"
          },
          {
            "name": "maxBaseOrderSize",
            "docs": [
              "the maximum order base size for non-postOnly orders"
            ],
            "type": "u64"
          },
          {
            "name": "maxQuoteOrderSize",
            "docs": [
              "the maximum order quote size for non-postOnly orders"
            ],
            "type": "u64"
          },
          {
            "name": "padding4",
            "type": {
              "array": [
                "u64",
                8
              ]
            }
          }
        ]
      }
    },
    {
      "name": "OpenOrder",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "side",
            "docs": [
              "the side of the order"
            ],
            "type": {
              "defined": "Side"
            }
          },
          {
            "name": "subAccountIdx",
            "docs": [
              "the sub account idx"
            ],
            "type": "u8"
          },
          {
            "name": "orderType",
            "docs": [
              "the type of the order"
            ],
            "type": {
              "defined": "DerivativeOrderType"
            }
          },
          {
            "name": "padding",
            "type": {
              "array": [
                "u8",
                5
              ]
            }
          },
          {
            "name": "timestamp",
            "docs": [
              "the timestamp that the order was posted"
            ],
            "type": "u64"
          },
          {
            "name": "clientOrderId",
            "docs": [
              "the client's order id"
            ],
            "type": "u64"
          },
          {
            "name": "orderId",
            "docs": [
              "the order id after being posted on the book"
            ],
            "type": "u128"
          }
        ]
      }
    },
    {
      "name": "NodeInfo",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "poolNode",
            "docs": [
              "the node's pubkey"
            ],
            "type": "publicKey"
          },
          {
            "name": "nodeVault",
            "docs": [
              "the node's vault pubkey"
            ],
            "type": "publicKey"
          },
          {
            "name": "deposits",
            "docs": [
              "the deposits in the node"
            ],
            "type": "i128"
          },
          {
            "name": "borrows",
            "docs": [
              "the borrows in the node"
            ],
            "type": "i128"
          },
          {
            "name": "padding",
            "type": {
              "array": [
                "u64",
                4
              ]
            }
          }
        ]
      }
    },
    {
      "name": "PoolConfig",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "optimalUtil",
            "docs": [
              "optimal utilization ratio for this token"
            ],
            "type": "u16"
          },
          {
            "name": "optimalApr",
            "docs": [
              "optimal apr for this token"
            ],
            "type": "u16"
          },
          {
            "name": "maxApr",
            "docs": [
              "maximum apr for this token"
            ],
            "type": "u16"
          },
          {
            "name": "cacheIndex",
            "docs": [
              "the index of this pool in the cache"
            ],
            "type": "u16"
          },
          {
            "name": "decimals",
            "docs": [
              "the decimals of the spl token mint associated with the pool"
            ],
            "type": "u8"
          },
          {
            "name": "initAssetWeight",
            "docs": [
              "the init asset weight of the pool's positions for margin calculations"
            ],
            "type": "u8"
          },
          {
            "name": "initLiabWeight",
            "docs": [
              "the init liability weight of the pool's positions for margin calculations"
            ],
            "type": "u8"
          },
          {
            "name": "maintAssetWeight",
            "docs": [
              "the maint asset weight of the pool's positions for margin calculations"
            ],
            "type": "u8"
          },
          {
            "name": "maintLiabWeight",
            "docs": [
              "the maint liability weight of the pool's positions for margin calculations"
            ],
            "type": "u8"
          },
          {
            "name": "padding2",
            "type": {
              "array": [
                "u8",
                3
              ]
            }
          },
          {
            "name": "padding3",
            "type": {
              "array": [
                "u64",
                2
              ]
            }
          }
        ]
      }
    },
    {
      "name": "PriceHistoryConfig",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "longerTimeHorizon",
            "type": "u64"
          },
          {
            "name": "shorterTimeHorizon",
            "type": "u64"
          },
          {
            "name": "priceCollectionTick",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "PriceWithTs",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "price",
            "type": "i128"
          },
          {
            "name": "timestamp",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "SubAccountCache",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "assetsValue",
            "docs": [
              "the value of the assets of this account"
            ],
            "type": "i128"
          },
          {
            "name": "liabilitiesValue",
            "docs": [
              "the value of the liabilities of this account"
            ],
            "type": "i128"
          },
          {
            "name": "cRatio",
            "docs": [
              "the margin c-ratio of this sub account"
            ],
            "type": "i128"
          },
          {
            "name": "updatedAt",
            "docs": [
              "slot of the last cache update"
            ],
            "type": "u64"
          },
          {
            "name": "margining",
            "docs": [
              "the sub account margining"
            ],
            "type": {
              "defined": "SubAccountMargining"
            }
          },
          {
            "name": "padding",
            "type": {
              "array": [
                "u8",
                7
              ]
            }
          },
          {
            "name": "subAccount",
            "docs": [
              "the sub account"
            ],
            "type": "publicKey"
          },
          {
            "name": "padding2",
            "type": {
              "array": [
                "u64",
                4
              ]
            }
          }
        ]
      }
    },
    {
      "name": "PositionSlot",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "spot",
            "docs": [
              "the spot position"
            ],
            "type": {
              "defined": "SpotPosition"
            }
          },
          {
            "name": "derivative",
            "docs": [
              "the derivative position"
            ],
            "type": {
              "defined": "DerivativePosition"
            }
          }
        ]
      }
    },
    {
      "name": "SpotPosition",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "tokenMint",
            "docs": [
              "the token mint that this position pertains to"
            ],
            "type": "publicKey"
          },
          {
            "name": "position",
            "docs": [
              "the position denominated in the base token",
              "if this value is negative then the outstanding position is a short, otherwise it's a long"
            ],
            "type": "i128"
          },
          {
            "name": "openOrdersCache",
            "docs": [
              "the open orders cache"
            ],
            "type": {
              "defined": "OpenOrdersCache"
            }
          },
          {
            "name": "cacheIndex",
            "docs": [
              "the index of this position in the cache"
            ],
            "type": "u16"
          },
          {
            "name": "padding",
            "type": {
              "array": [
                "u8",
                6
              ]
            }
          }
        ]
      }
    },
    {
      "name": "DerivativePosition",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "market",
            "docs": [
              "the public key of the market that this position pertains to"
            ],
            "type": "publicKey"
          },
          {
            "name": "basePosition",
            "docs": [
              "the position denominated in the base token",
              "if this value is negative then the outstanding position is a short, otherwise it's a long"
            ],
            "type": "i128"
          },
          {
            "name": "openOrdersCache",
            "docs": [
              "the open orders cache"
            ],
            "type": {
              "defined": "OpenOrdersCache"
            }
          },
          {
            "name": "longFundingSettled",
            "docs": [
              "the long funding that has been settled for this position"
            ],
            "type": "i128"
          },
          {
            "name": "shortFundingSettled",
            "docs": [
              "the short funding that has been settled for this position"
            ],
            "type": "i128"
          },
          {
            "name": "cacheIndex",
            "docs": [
              "the index of this position in the cache"
            ],
            "type": "u16"
          },
          {
            "name": "marketType",
            "docs": [
              "the type of market of this position",
              "",
              "this is necessary in order to fetch the appropriate weights"
            ],
            "type": {
              "defined": "MarketType"
            }
          },
          {
            "name": "padding",
            "type": {
              "array": [
                "u8",
                5
              ]
            }
          }
        ]
      }
    },
    {
      "name": "OpenOrdersCache",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "coinTotal",
            "docs": [
              "total amount of native base tokens in the open orders account, includes locked and free tokens"
            ],
            "type": "u64"
          },
          {
            "name": "coinFree",
            "docs": [
              "amount of free native base tokens in the open orders account"
            ],
            "type": "u64"
          },
          {
            "name": "pcTotal",
            "docs": [
              "total amount of native quote tokens in the open orders account, includes locked and free tokens"
            ],
            "type": "u64"
          },
          {
            "name": "pcFree",
            "docs": [
              "amount of free native quote tokens in the open orders account"
            ],
            "type": "u64"
          },
          {
            "name": "referrerRebatesAccrued",
            "docs": [
              "the amount of referrer rebates accrued, in native quote token"
            ],
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "OrderType",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Limit"
          },
          {
            "name": "ImmediateOrCancel"
          },
          {
            "name": "PostOnly"
          }
        ]
      }
    },
    {
      "name": "DerivativeOrderType",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Limit"
          },
          {
            "name": "ImmediateOrCancel"
          },
          {
            "name": "FillOrKill"
          },
          {
            "name": "PostOnly"
          }
        ]
      }
    },
    {
      "name": "Side",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Bid"
          },
          {
            "name": "Ask"
          }
        ]
      }
    },
    {
      "name": "SelfTradeBehavior",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "DecrementTake"
          },
          {
            "name": "AbortTransaction"
          },
          {
            "name": "CancelProvide"
          }
        ]
      }
    },
    {
      "name": "AccountAction",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Create"
          },
          {
            "name": "Close"
          },
          {
            "name": "SetDelegate"
          }
        ]
      }
    },
    {
      "name": "SubAccountAction",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Create"
          },
          {
            "name": "Close"
          },
          {
            "name": "ChangeMarginingType"
          }
        ]
      }
    },
    {
      "name": "ClearingAction",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Create"
          },
          {
            "name": "Close"
          },
          {
            "name": "SweepFee"
          }
        ]
      }
    },
    {
      "name": "MarketAction",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Create"
          },
          {
            "name": "Close"
          },
          {
            "name": "StatusChange"
          }
        ]
      }
    },
    {
      "name": "PoolAction",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Create"
          },
          {
            "name": "AddNode"
          },
          {
            "name": "RemoveNode"
          },
          {
            "name": "StatusChange"
          },
          {
            "name": "Close"
          }
        ]
      }
    },
    {
      "name": "OrdersAccountAction",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Create"
          },
          {
            "name": "Close"
          }
        ]
      }
    },
    {
      "name": "ClearingType",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Public"
          },
          {
            "name": "Private"
          }
        ]
      }
    },
    {
      "name": "WhitelistStatus",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Pending"
          },
          {
            "name": "Active"
          },
          {
            "name": "Revoked"
          }
        ]
      }
    },
    {
      "name": "MarketType",
      "docs": [
        "market types"
      ],
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Default"
          },
          {
            "name": "PairFuture"
          },
          {
            "name": "PerpetualFuture"
          },
          {
            "name": "PreIDO"
          },
          {
            "name": "IndexFuture"
          }
        ]
      }
    },
    {
      "name": "SettlementType",
      "docs": [
        "settlement types for futures markets"
      ],
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "CashSettled"
          },
          {
            "name": "PhysicalDelivery"
          }
        ]
      }
    },
    {
      "name": "ProductsType",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Stub"
          },
          {
            "name": "Pyth"
          },
          {
            "name": "Switchboard"
          }
        ]
      }
    },
    {
      "name": "MarginCollateralRatioType",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Initialization"
          },
          {
            "name": "Maintenance"
          }
        ]
      }
    },
    {
      "name": "SubAccountMargining",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Cross"
          },
          {
            "name": "Isolated"
          }
        ]
      }
    },
    {
      "name": "AccountType",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Regular"
          },
          {
            "name": "Whitelisted"
          }
        ]
      }
    },
    {
      "name": "OperatingStatus",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Active"
          },
          {
            "name": "ReduceOnly"
          },
          {
            "name": "CancelOnly"
          },
          {
            "name": "Halted"
          }
        ]
      }
    }
  ],
  "events": [
    {
      "name": "AccountActionLog",
      "fields": [
        {
          "name": "account",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "authority",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "delegate",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "action",
          "type": {
            "defined": "AccountAction"
          },
          "index": false
        }
      ]
    },
    {
      "name": "SubAccountActionLog",
      "fields": [
        {
          "name": "masterAccount",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "subAccount",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "authority",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "delegate",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "marginingType",
          "type": {
            "defined": "SubAccountMargining"
          },
          "index": false
        },
        {
          "name": "action",
          "type": {
            "defined": "SubAccountAction"
          },
          "index": false
        }
      ]
    },
    {
      "name": "ClearingActionLog",
      "fields": [
        {
          "name": "clearing",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "authority",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "feeMint",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "action",
          "type": {
            "defined": "ClearingAction"
          },
          "index": false
        }
      ]
    },
    {
      "name": "MarketActionLog",
      "fields": [
        {
          "name": "name",
          "type": "bytes",
          "index": false
        },
        {
          "name": "market",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "orderbook",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "bids",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "asks",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "quotePool",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "marketType",
          "type": {
            "defined": "MarketType"
          },
          "index": false
        },
        {
          "name": "settlementType",
          "type": {
            "defined": "SettlementType"
          },
          "index": false
        },
        {
          "name": "tokenSupply",
          "type": "u64",
          "index": false
        },
        {
          "name": "activatesAt",
          "type": "u64",
          "index": false
        },
        {
          "name": "expiresAt",
          "type": "u64",
          "index": false
        },
        {
          "name": "minBaseOrderSize",
          "type": "u64",
          "index": false
        },
        {
          "name": "tickSize",
          "type": "u64",
          "index": false
        },
        {
          "name": "decimals",
          "type": "u8",
          "index": false
        },
        {
          "name": "action",
          "type": {
            "defined": "MarketAction"
          },
          "index": false
        }
      ]
    },
    {
      "name": "PoolActionLog",
      "fields": [
        {
          "name": "name",
          "type": "bytes",
          "index": false
        },
        {
          "name": "pool",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "poolNode",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "tokenMint",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "tokenVault",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "oracleProducts",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "dexMarket",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "optimalUtil",
          "type": "u16",
          "index": false
        },
        {
          "name": "optimalApr",
          "type": "u16",
          "index": false
        },
        {
          "name": "maxApr",
          "type": "u16",
          "index": false
        },
        {
          "name": "decimals",
          "type": "u8",
          "index": false
        },
        {
          "name": "action",
          "type": {
            "defined": "PoolAction"
          },
          "index": false
        }
      ]
    },
    {
      "name": "WhitelistCreationLog",
      "fields": [
        {
          "name": "clearing",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "whitelist",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "whitelisted",
          "type": "publicKey",
          "index": false
        }
      ]
    },
    {
      "name": "OrdersAccountActionLog",
      "fields": [
        {
          "name": "openOrders",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "account",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "authority",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "action",
          "type": {
            "defined": "OrdersAccountAction"
          },
          "index": false
        }
      ]
    },
    {
      "name": "SettlePositionLog",
      "fields": [
        {
          "name": "masterAccount",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "subAccount",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "market",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "basePosition",
          "type": "i128",
          "index": false
        },
        {
          "name": "settlementPrice",
          "type": "i128",
          "index": false
        }
      ]
    },
    {
      "name": "LiquidatePositionLog",
      "fields": [
        {
          "name": "liqeeMasterAccount",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "liqeeSubAccount",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "liqorMasterAccount",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "liqorSubAccount",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "asset",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "liability",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "assetPrice",
          "type": "i128",
          "index": false
        },
        {
          "name": "liabilityPrice",
          "type": "i128",
          "index": false
        },
        {
          "name": "preAssetPosition",
          "type": "i128",
          "index": false
        },
        {
          "name": "preLiabPosition",
          "type": "i128",
          "index": false
        },
        {
          "name": "postAssetPosition",
          "type": "i128",
          "index": false
        },
        {
          "name": "postLiabPosition",
          "type": "i128",
          "index": false
        }
      ]
    },
    {
      "name": "DepositOrWithdrawLog",
      "fields": [
        {
          "name": "masterAccount",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "subAccount",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "pool",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "poolNode",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "tokenMint",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "tokenVault",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "amount",
          "type": "u64",
          "index": false
        },
        {
          "name": "isDeposit",
          "type": "bool",
          "index": false
        }
      ]
    },
    {
      "name": "OrderFillLog",
      "fields": [
        {
          "name": "market",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "maker",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "taker",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "subAccountIdx",
          "type": "u8",
          "index": false
        },
        {
          "name": "coinQty",
          "type": "u64",
          "index": false
        },
        {
          "name": "pcQty",
          "type": "u64",
          "index": false
        },
        {
          "name": "side",
          "type": {
            "defined": "Side"
          },
          "index": false
        }
      ]
    },
    {
      "name": "FundingPaymentLog",
      "fields": [
        {
          "name": "market",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "account",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "subAccount",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "amount",
          "type": "i128",
          "index": false
        }
      ]
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "InvalidSigner",
      "msg": "invalid signer provided"
    },
    {
      "code": 6001,
      "name": "InvalidAuthority",
      "msg": "the provided authority is invalid"
    },
    {
      "code": 6002,
      "name": "InvalidFuturesOrdersAccountAuthority",
      "msg": "the provided futures orders account authority does not match"
    },
    {
      "code": 6003,
      "name": "InvalidArgument",
      "msg": "invalid argument provided"
    },
    {
      "code": 6004,
      "name": "InvalidOracle",
      "msg": "invalid oracle account provided"
    },
    {
      "code": 6005,
      "name": "InvalidOracleProducts",
      "msg": "invalid oracle products account provided"
    },
    {
      "code": 6006,
      "name": "InvalidDepositAmountForDelivery",
      "msg": "given deposit amount does not equal desired derivative token supply"
    },
    {
      "code": 6007,
      "name": "InvalidDexMarketForQuotePool",
      "msg": "the provided dex market is not valid for the quote pool"
    },
    {
      "code": 6008,
      "name": "InvalidBaseMintForDexMarket",
      "msg": "the provided dex market does not have a valid base mint"
    },
    {
      "code": 6009,
      "name": "InvalidQuoteMintForDexMarket",
      "msg": "the provivded dex market does not have a valid quote mint"
    },
    {
      "code": 6010,
      "name": "InvalidEventQueueForMarket",
      "msg": "the provided event queue account does not belong to the given market"
    },
    {
      "code": 6011,
      "name": "InvalidOrderBookForMarket",
      "msg": "the provided order book account does not belong to the given market"
    },
    {
      "code": 6012,
      "name": "InvalidSlabAccount",
      "msg": "the provided slab account is invalid"
    },
    {
      "code": 6013,
      "name": "InvalidOrderIndex",
      "msg": "the provided order index is not valid"
    },
    {
      "code": 6014,
      "name": "InvalidFeeTier",
      "msg": "the provided fee tier is not valid"
    },
    {
      "code": 6015,
      "name": "InvalidFeeDiscountAccountMint",
      "msg": "the provided discount token account does not have a valid mint"
    },
    {
      "code": 6016,
      "name": "InvalidFeeDiscountAccountOwner",
      "msg": "the provided discount token account does not have a valid owner"
    },
    {
      "code": 6017,
      "name": "InvalidMarketType",
      "msg": "the provided market has an invalid market type"
    },
    {
      "code": 6018,
      "name": "InvalidSettlementType",
      "msg": "the provided market has an invalid settlement type"
    },
    {
      "code": 6019,
      "name": "InvalidClearing",
      "msg": "the provided clearing account is not valid for the given user"
    },
    {
      "code": 6020,
      "name": "InvalidMasterAccount",
      "msg": "the provided master account is not valid for the given sub account"
    },
    {
      "code": 6021,
      "name": "InvalidOrdersAccount",
      "msg": "the provided orders account is not valid for the given market"
    },
    {
      "code": 6022,
      "name": "InvalidPriceHistory",
      "msg": "the provided price history account is not valid for the given market"
    },
    {
      "code": 6023,
      "name": "InvalidAssetMint",
      "msg": "the provided asset mint is not valid for the given market"
    },
    {
      "code": 6024,
      "name": "InvalidMarketForLiquidation",
      "msg": "the provided market is not valid for liquidation"
    },
    {
      "code": 6025,
      "name": "InvalidQuotePool",
      "msg": "the provided quote pool does not have the correct token mint"
    },
    {
      "code": 6026,
      "name": "InvalidLiquidation",
      "msg": "tried to liquidate a healthy account"
    },
    {
      "code": 6027,
      "name": "InvalidCacheAccount",
      "msg": "the provided cache account is invalid"
    },
    {
      "code": 6028,
      "name": "InvalidPool",
      "msg": "the provided pool is not valig for the given mint"
    },
    {
      "code": 6029,
      "name": "InvalidPoolNode",
      "msg": "the provided pool node is not valid for the given mint"
    },
    {
      "code": 6030,
      "name": "InvalidPoolNodeVault",
      "msg": "the provided pool node vault is not valid"
    },
    {
      "code": 6031,
      "name": "InvalidVaultSigner",
      "msg": "the provided vault signer is invalid"
    },
    {
      "code": 6032,
      "name": "OrderNotFound",
      "msg": "the provided order id could not be found"
    },
    {
      "code": 6033,
      "name": "InvalidOrderSide",
      "msg": "the provided order side is invalid"
    },
    {
      "code": 6034,
      "name": "OracleProductsCacheNotFound",
      "msg": "the cache corresponding to the given oracle products wasn't found"
    },
    {
      "code": 6035,
      "name": "CacheAccountFull",
      "msg": "the cache account is full"
    },
    {
      "code": 6036,
      "name": "PoolAccountFull",
      "msg": "the pool account is full"
    },
    {
      "code": 6037,
      "name": "PoolNodeNotFound",
      "msg": "pool node not found"
    },
    {
      "code": 6038,
      "name": "CacheAccountWithOracleProducts",
      "msg": "the cache account has initialized oracle products"
    },
    {
      "code": 6039,
      "name": "OracleProductsWithTokenMint",
      "msg": "the oracle products account has an initialized token mint"
    },
    {
      "code": 6040,
      "name": "OracleProductsWithFuturesMarket",
      "msg": "the oracle products account has an initialized futuresmarket"
    },
    {
      "code": 6041,
      "name": "OracleProductsWithPerpetualMarket",
      "msg": "the oracle products account has an initialized perp market"
    },
    {
      "code": 6042,
      "name": "OrdersAccountFull",
      "msg": "the orders account is full"
    },
    {
      "code": 6043,
      "name": "OrdersAccountMustBeEmpty",
      "msg": "attempted to close an orders account with remaining orders"
    },
    {
      "code": 6044,
      "name": "PoolDexMarketAlreadyInitialized",
      "msg": "the provided pool already has an initialized dex market"
    },
    {
      "code": 6045,
      "name": "OracleProductsAlreadyInitialized",
      "msg": "the given oracle products account has already been initialized"
    },
    {
      "code": 6046,
      "name": "StaleAccountCache",
      "msg": "the given account has stale cached positions"
    },
    {
      "code": 6047,
      "name": "StaleOracleCache",
      "msg": "the given oracle products account has a stale cache"
    },
    {
      "code": 6048,
      "name": "PrivateClearing",
      "msg": "attempted to create account in a private clearing"
    },
    {
      "code": 6049,
      "name": "PublicClearing",
      "msg": "attempted to create whitelisted account in a public clearing"
    },
    {
      "code": 6050,
      "name": "MarketInactive",
      "msg": "provided market is inactive"
    },
    {
      "code": 6051,
      "name": "MarketAlreadyActive",
      "msg": "provided market is already active"
    },
    {
      "code": 6052,
      "name": "MarketWithOpenInterestCannotBeclosed",
      "msg": "perpetual market with exisitng open interest cannot be closed"
    },
    {
      "code": 6053,
      "name": "ActiveMarketCannotSettlePosition",
      "msg": "active market cannot settle position"
    },
    {
      "code": 6054,
      "name": "ActiveMarketCannotSweepFees",
      "msg": "active market cannot sweep fees"
    },
    {
      "code": 6055,
      "name": "ActiveMarketCannotClaimIdoProceeds",
      "msg": "active market cannot claim IDO proceeds"
    },
    {
      "code": 6056,
      "name": "ActiveMarketCannotBeClosed",
      "msg": "active market cannot be closed"
    },
    {
      "code": 6057,
      "name": "ActivePoolCannotBeClosed",
      "msg": "active pool cannot be closed"
    },
    {
      "code": 6058,
      "name": "MarketNotForPhysicalDelivery",
      "msg": "provided market was not created for physical delivery"
    },
    {
      "code": 6059,
      "name": "SubAccountAliasTooLong",
      "msg": "the provided sub account alias is too long"
    },
    {
      "code": 6060,
      "name": "UnableToFindPosition",
      "msg": "unable to find position"
    },
    {
      "code": 6061,
      "name": "UnableToFindOrderByOrderId",
      "msg": "unable to find order with given order id"
    },
    {
      "code": 6062,
      "name": "UnableToFindOrderByClientId",
      "msg": "unable to find order with given client order id"
    },
    {
      "code": 6063,
      "name": "UnableToPostOrder",
      "msg": "unable to post order"
    },
    {
      "code": 6064,
      "name": "SpotOpenOrdersHasUnsettledFunds",
      "msg": "the provided spot open orders account has unsettled funds"
    },
    {
      "code": 6065,
      "name": "RemainingAccountNotWritable",
      "msg": "specified sub account is not writable"
    },
    {
      "code": 6066,
      "name": "RemainingAccountWithInvalidOwner",
      "msg": "specified sub account is not writable"
    },
    {
      "code": 6067,
      "name": "RemainingAccountWithInvalidAuthority",
      "msg": "specified sub account is not owned by the same authority"
    },
    {
      "code": 6068,
      "name": "RemainingAccountWithInvalidMasterAccount",
      "msg": "specified sub account does not belong to the specified master account"
    },
    {
      "code": 6069,
      "name": "RemainingUserAccountMissing",
      "msg": "remaining user account missing"
    },
    {
      "code": 6070,
      "name": "RemainingAccountsMissing",
      "msg": "there are remaining accounts missing from the instruction"
    },
    {
      "code": 6071,
      "name": "SubAccountCRatioBelowOptimal",
      "msg": "sub account c-ratio is below optimal"
    },
    {
      "code": 6072,
      "name": "MasterAccountCRatioBelowOptimal",
      "msg": "master account c-ratio is below optimal"
    },
    {
      "code": 6073,
      "name": "TotalBorrowsGreaterThanDeposits",
      "msg": "pool total borrows amount are greater than total deposits"
    },
    {
      "code": 6074,
      "name": "MarketTotalBorrowsGreaterThanTokenSupply",
      "msg": "market total borrows amount are greater than total token supply"
    },
    {
      "code": 6075,
      "name": "OrderAmountExceedsVaultBalance",
      "msg": "attempted to submit an order with greater amount than is available in the vault"
    },
    {
      "code": 6076,
      "name": "TransactionAborted",
      "msg": "the transaction has been aborted due to predetermined functionality"
    },
    {
      "code": 6077,
      "name": "AccountWithSubAccounts",
      "msg": "the provided account has initialized sub accounts"
    },
    {
      "code": 6078,
      "name": "SubAccountWithPositions",
      "msg": "the provided sub account has existing position"
    },
    {
      "code": 6079,
      "name": "BaseSizeExceedsMarketLimit",
      "msg": "the order's base size exceeds the market's limit for non-postOnly orders"
    },
    {
      "code": 6080,
      "name": "QuoteSizeExceedsMarketLimit",
      "msg": "the order's quote size exceeds the market's limit for non-postOnly orders"
    },
    {
      "code": 6081,
      "name": "StaleOracleFeed",
      "msg": "the given oracle feed account is stale"
    },
    {
      "code": 6082,
      "name": "PythPriceStatusNotTrading",
      "msg": "the given pyth price feed is not trading"
    },
    {
      "code": 6083,
      "name": "ConfidenceIntervalExceeded",
      "msg": "the confidence interval for the oracle price feed has been exceeded"
    },
    {
      "code": 6084,
      "name": "ReduceOnlyMode",
      "msg": "the given instrument is in reduce only mode"
    },
    {
      "code": 6085,
      "name": "CancelOnlyMode",
      "msg": "the given instrument is in cancel only mode"
    },
    {
      "code": 6086,
      "name": "HaltedMode",
      "msg": "the given instrument has been halted"
    },
    {
      "code": 6087,
      "name": "Default",
      "msg": "Default"
    }
  ]
};

export const IDL: Cypher = {
  "version": "3.0.0",
  "name": "cypher",
  "instructions": [
    {
      "name": "cacheOraclePrices",
      "accounts": [
        {
          "name": "cacheAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "oracleProducts",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "cacheIndex",
          "type": "u64"
        }
      ]
    },
    {
      "name": "claimIdoProceeds",
      "accounts": [
        {
          "name": "market",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "quotePoolNode",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "quoteVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "destinationTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "idoAuthority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "vaultSigner",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "claimLiquidityMiningRewards",
      "accounts": [
        {
          "name": "market",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "quotePoolNode",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "quoteVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "destinationTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "idoAuthority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "vaultSigner",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "closeAccount",
      "accounts": [
        {
          "name": "account",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "rentDestination",
          "isMut": true,
          "isSigner": true
        }
      ],
      "args": []
    },
    {
      "name": "closeCacheAccount",
      "accounts": [
        {
          "name": "cacheAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "rentDestination",
          "isMut": true,
          "isSigner": true
        }
      ],
      "args": []
    },
    {
      "name": "closeClearing",
      "accounts": [
        {
          "name": "clearing",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "rentDestination",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true
        }
      ],
      "args": []
    },
    {
      "name": "closeFuturesMarket",
      "accounts": [
        {
          "name": "market",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "orderbook",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "bids",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "asks",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "eventQueue",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "oracleProducts",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "priceHistory",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "rentDestination",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true
        }
      ],
      "args": []
    },
    {
      "name": "closeOracleProducts",
      "accounts": [
        {
          "name": "cacheAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "oracleProducts",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "rentDestination",
          "isMut": true,
          "isSigner": true
        }
      ],
      "args": []
    },
    {
      "name": "closeOrdersAccount",
      "accounts": [
        {
          "name": "masterAccount",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "market",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "openOrders",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        }
      ],
      "args": []
    },
    {
      "name": "closePerpMarket",
      "accounts": [
        {
          "name": "market",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "orderbook",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "bids",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "asks",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "eventQueue",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "oracleProducts",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "rentDestination",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true
        }
      ],
      "args": []
    },
    {
      "name": "closePool",
      "accounts": [
        {
          "name": "pool",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "oracleProducts",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "rentDestination",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "closePoolNode",
      "accounts": [
        {
          "name": "pool",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "poolNode",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "vaultSigner",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rentDestination",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "closeSubAccount",
      "accounts": [
        {
          "name": "account",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "subAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "rentDestination",
          "isMut": true,
          "isSigner": true
        }
      ],
      "args": []
    },
    {
      "name": "createAccount",
      "accounts": [
        {
          "name": "clearing",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "masterAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "accountNumber",
          "type": "u8"
        },
        {
          "name": "accountBump",
          "type": "u8"
        }
      ]
    },
    {
      "name": "createPublicClearing",
      "accounts": [
        {
          "name": "clearing",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "args",
          "type": {
            "defined": "CreateClearingArgs"
          }
        }
      ]
    },
    {
      "name": "createPrivateClearing",
      "accounts": [
        {
          "name": "clearing",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "privateClearing",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "args",
          "type": {
            "defined": "CreateClearingArgs"
          }
        }
      ]
    },
    {
      "name": "createOracleStub",
      "accounts": [
        {
          "name": "oracleStub",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "symbol",
          "type": {
            "array": [
              "u8",
              32
            ]
          }
        }
      ]
    },
    {
      "name": "createOrdersAccount",
      "accounts": [
        {
          "name": "masterAccount",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "market",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "openOrders",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "createFuturesMarket",
      "accounts": [
        {
          "name": "clearing",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "cacheAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "market",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "priceHistory",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "oracleProducts",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "quotePool",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "orderbook",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "bids",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "asks",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "eventQueue",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "args",
          "type": {
            "defined": "CreateFuturesMarketArgs"
          }
        }
      ]
    },
    {
      "name": "createPerpMarket",
      "accounts": [
        {
          "name": "clearing",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "cacheAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "market",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "oracleProducts",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "quotePool",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "orderbook",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "bids",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "asks",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "eventQueue",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "args",
          "type": {
            "defined": "CreatePerpetualMarketArgs"
          }
        }
      ]
    },
    {
      "name": "createPool",
      "accounts": [
        {
          "name": "clearing",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "cacheAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "pool",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "poolNode",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "vaultSigner",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "oracleProducts",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "dexMarket",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "args",
          "type": {
            "defined": "CreatePoolArgs"
          }
        }
      ]
    },
    {
      "name": "createPoolNode",
      "accounts": [
        {
          "name": "clearing",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "pool",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "poolNode",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "vaultSigner",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "vaultSignerBump",
          "type": "u8"
        },
        {
          "name": "nodeNumber",
          "type": "u8"
        }
      ]
    },
    {
      "name": "createSubAccount",
      "accounts": [
        {
          "name": "masterAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "subAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "subAccountNumber",
          "type": "u8"
        },
        {
          "name": "subAccountBump",
          "type": "u8"
        },
        {
          "name": "subAccountAlias",
          "type": {
            "array": [
              "u8",
              32
            ]
          }
        }
      ]
    },
    {
      "name": "createWhitelist",
      "accounts": [
        {
          "name": "clearing",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "whitelist",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "accountOwner",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "createWhitelistedAccount",
      "accounts": [
        {
          "name": "clearing",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "whitelist",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "masterAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "accountNumber",
          "type": "u8"
        },
        {
          "name": "accountBump",
          "type": "u8"
        }
      ]
    },
    {
      "name": "depositDeliverable",
      "accounts": [
        {
          "name": "market",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "pool",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "poolNode",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "sourceTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "depositFunds",
      "accounts": [
        {
          "name": "clearing",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "cacheAccount",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "masterAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "subAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "pool",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "poolNode",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "sourceTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "editSubAccountMargining",
      "accounts": [
        {
          "name": "masterAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "subAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "marginingType",
          "type": {
            "defined": "SubAccountMargining"
          }
        }
      ]
    },
    {
      "name": "createOracleProducts",
      "accounts": [
        {
          "name": "cacheAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "oracleProducts",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "args",
          "type": {
            "defined": "CreateOracleProductsArgs"
          }
        }
      ]
    },
    {
      "name": "initCacheAccount",
      "accounts": [
        {
          "name": "clearing",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "cacheAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true
        }
      ],
      "args": []
    },
    {
      "name": "liquidateFuturesPosition",
      "accounts": [
        {
          "name": "cacheAccount",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "liqorClearing",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "liqorAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "liqorSubAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "liqeeClearing",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "liqeeAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "liqeeSubAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "asset",
          "type": "publicKey"
        },
        {
          "name": "liability",
          "type": "publicKey"
        }
      ]
    },
    {
      "name": "liquidatePerpPosition",
      "accounts": [
        {
          "name": "cacheAccount",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "liqorClearing",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "liqorAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "liqorSubAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "liqeeClearing",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "liqeeAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "liqeeSubAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "asset",
          "type": "publicKey"
        },
        {
          "name": "liability",
          "type": "publicKey"
        }
      ]
    },
    {
      "name": "liquidateSpotPosition",
      "accounts": [
        {
          "name": "cacheAccount",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "liqorClearing",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "liqorAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "liqorSubAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "liqeeClearing",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "liqeeAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "liqeeSubAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "assetMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "assetPoolNode",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "liabilityMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "liabilityPool",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "liabilityPoolNode",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        }
      ],
      "args": []
    },
    {
      "name": "rollMarketExpiry",
      "accounts": [
        {
          "name": "clearing",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "cacheAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "market",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "expirationTs",
          "type": "u64"
        }
      ]
    },
    {
      "name": "setAccountDelegate",
      "accounts": [
        {
          "name": "masterAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "delegate",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "setAccountFeeTier",
      "accounts": [
        {
          "name": "clearing",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "masterAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "tier",
          "type": "u8"
        }
      ]
    },
    {
      "name": "setClearingAuthority",
      "accounts": [
        {
          "name": "clearing",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "newAuthority",
          "type": "publicKey"
        }
      ]
    },
    {
      "name": "setClearingFeeTiers",
      "accounts": [
        {
          "name": "clearing",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "feeTiers",
          "type": {
            "vec": {
              "defined": "FeeTierArgs"
            }
          }
        }
      ]
    },
    {
      "name": "setClearingFeeMint",
      "accounts": [
        {
          "name": "clearing",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "feeMint",
          "type": "publicKey"
        }
      ]
    },
    {
      "name": "setFuturesMarketAuthority",
      "accounts": [
        {
          "name": "market",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "newAuthority",
          "type": "publicKey"
        }
      ]
    },
    {
      "name": "setFuturesMarketLiquidityMiningInfo",
      "accounts": [
        {
          "name": "market",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "args",
          "type": {
            "defined": "LiquidityMiningArgs"
          }
        }
      ]
    },
    {
      "name": "setFuturesMarketParams",
      "accounts": [
        {
          "name": "cache",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "market",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "maxBaseOrderSize",
          "type": {
            "option": "u64"
          }
        },
        {
          "name": "maxQuoteOrderSize",
          "type": {
            "option": "u64"
          }
        },
        {
          "name": "initAssetWeight",
          "type": {
            "option": "u8"
          }
        },
        {
          "name": "maintAssetWeight",
          "type": {
            "option": "u8"
          }
        },
        {
          "name": "initLiabWeight",
          "type": {
            "option": "u8"
          }
        },
        {
          "name": "maintLiabWeight",
          "type": {
            "option": "u8"
          }
        }
      ]
    },
    {
      "name": "setFuturesMarketStatus",
      "accounts": [
        {
          "name": "market",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "status",
          "type": {
            "defined": "OperatingStatus"
          }
        }
      ]
    },
    {
      "name": "setPerpetualMarketAuthority",
      "accounts": [
        {
          "name": "market",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "newAuthority",
          "type": "publicKey"
        }
      ]
    },
    {
      "name": "setPerpetualMarketLiquidityMiningInfo",
      "accounts": [
        {
          "name": "market",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "args",
          "type": {
            "defined": "LiquidityMiningArgs"
          }
        }
      ]
    },
    {
      "name": "setPerpetualMarketParams",
      "accounts": [
        {
          "name": "cache",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "market",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "impactQuantity",
          "type": {
            "option": "u64"
          }
        },
        {
          "name": "maxBaseOrderSize",
          "type": {
            "option": "u64"
          }
        },
        {
          "name": "maxQuoteOrderSize",
          "type": {
            "option": "u64"
          }
        },
        {
          "name": "initAssetWeight",
          "type": {
            "option": "u8"
          }
        },
        {
          "name": "maintAssetWeight",
          "type": {
            "option": "u8"
          }
        },
        {
          "name": "initLiabWeight",
          "type": {
            "option": "u8"
          }
        },
        {
          "name": "maintLiabWeight",
          "type": {
            "option": "u8"
          }
        }
      ]
    },
    {
      "name": "setPerpetualMarketStatus",
      "accounts": [
        {
          "name": "market",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "status",
          "type": {
            "defined": "OperatingStatus"
          }
        }
      ]
    },
    {
      "name": "setPoolNodeStatus",
      "accounts": [
        {
          "name": "poolNode",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "status",
          "type": {
            "defined": "OperatingStatus"
          }
        }
      ]
    },
    {
      "name": "setPoolStatus",
      "accounts": [
        {
          "name": "pool",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "status",
          "type": {
            "defined": "OperatingStatus"
          }
        }
      ]
    },
    {
      "name": "setOracleProducts",
      "accounts": [
        {
          "name": "clearing",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "oracleProducts",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "setOracleStubPrice",
      "accounts": [
        {
          "name": "oracleStub",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "price",
          "type": "i128"
        }
      ]
    },
    {
      "name": "setSubAccountDelegate",
      "accounts": [
        {
          "name": "subAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "delegate",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "setPoolDexMarket",
      "accounts": [
        {
          "name": "clearing",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "pool",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "dexMarket",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true
        }
      ],
      "args": []
    },
    {
      "name": "settlePositionWithDelivery",
      "accounts": [
        {
          "name": "cacheAccount",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "masterAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "subAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "market",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "underlyingPoolNode",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "quotePoolNode",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "settlePosition",
      "accounts": [
        {
          "name": "cacheAccount",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "masterAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "subAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "market",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "quotePoolNode",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "sweepMarketFees",
      "accounts": [
        {
          "name": "clearing",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "market",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "quotePoolNode",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "quoteVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "destinationTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "vaultSigner",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "sweepPoolFees",
      "accounts": [
        {
          "name": "tokenPool",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "quotePoolNode",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "quoteVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "destinationTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "vaultSigner",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "transferBetweenSubAccounts",
      "accounts": [
        {
          "name": "clearing",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "cacheAccount",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "masterAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "fromSubAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "toSubAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "assetMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "assetPoolNode",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "updateAccountMargin",
      "accounts": [
        {
          "name": "cacheAccount",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "masterAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "signer",
          "isMut": true,
          "isSigner": true
        }
      ],
      "args": []
    },
    {
      "name": "updateFundingRate",
      "accounts": [
        {
          "name": "cacheAccount",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "market",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "orderbook",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "bids",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "asks",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "updateMarketExpiration",
      "accounts": [
        {
          "name": "clearing",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "market",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "expirationTs",
          "type": "u64"
        }
      ]
    },
    {
      "name": "updateTokenIndex",
      "accounts": [
        {
          "name": "cacheAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "pool",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "withdrawFunds",
      "accounts": [
        {
          "name": "clearing",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "cacheAccount",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "masterAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "subAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "pool",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "poolNode",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "destinationTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "vaultSigner",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "cancelSpotOrder",
      "accounts": [
        {
          "name": "clearing",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "cacheAccount",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "masterAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "subAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "assetPoolNode",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "quotePoolNode",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "assetMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "assetVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "quoteVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "dex",
          "accounts": [
            {
              "name": "market",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "openOrders",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "eventQueue",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "bids",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "asks",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "coinVault",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "pcVault",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "vaultSigner",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "tokenProgram",
              "isMut": false,
              "isSigner": false
            },
            {
              "name": "dexProgram",
              "isMut": false,
              "isSigner": false
            }
          ]
        }
      ],
      "args": [
        {
          "name": "args",
          "type": {
            "defined": "CancelOrderArgs"
          }
        }
      ]
    },
    {
      "name": "closeSpotOpenOrders",
      "accounts": [
        {
          "name": "masterAccount",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "subAccount",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "assetPool",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "dexMarket",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "openOrders",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "dexProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "initSpotOpenOrders",
      "accounts": [
        {
          "name": "masterAccount",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "subAccount",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "pool",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "dexMarket",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "openOrders",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "dexProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "newSpotOrder",
      "accounts": [
        {
          "name": "clearing",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "cacheAccount",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "masterAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "subAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "assetPoolNode",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "quotePoolNode",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "assetMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "assetVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "quoteVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "vaultSigner",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "dex",
          "accounts": [
            {
              "name": "market",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "openOrders",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "eventQueue",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "requestQueue",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "bids",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "asks",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "coinVault",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "pcVault",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "vaultSigner",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "rent",
              "isMut": false,
              "isSigner": false
            },
            {
              "name": "tokenProgram",
              "isMut": false,
              "isSigner": false
            },
            {
              "name": "dexProgram",
              "isMut": false,
              "isSigner": false
            }
          ]
        }
      ],
      "args": [
        {
          "name": "args",
          "type": {
            "defined": "NewSpotOrderArgs"
          }
        }
      ]
    },
    {
      "name": "settleSpotFunds",
      "accounts": [
        {
          "name": "clearing",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "cacheAccount",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "masterAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "subAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "assetPoolNode",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "quotePoolNode",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "assetMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "assetVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "quoteVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "dex",
          "accounts": [
            {
              "name": "market",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "openOrders",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "coinVault",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "pcVault",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "vaultSigner",
              "isMut": false,
              "isSigner": false
            },
            {
              "name": "tokenProgram",
              "isMut": false,
              "isSigner": false
            },
            {
              "name": "dexProgram",
              "isMut": false,
              "isSigner": false
            }
          ]
        }
      ],
      "args": []
    },
    {
      "name": "cancelFuturesOrder",
      "accounts": [
        {
          "name": "clearing",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "cacheAccount",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "masterAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "subAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "market",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "openOrders",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "orderbook",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "eventQueue",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "bids",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "asks",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "quotePoolNode",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "args",
          "type": {
            "defined": "CancelOrderArgs"
          }
        }
      ]
    },
    {
      "name": "consumeFuturesEvents",
      "accounts": [
        {
          "name": "clearing",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "market",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "orderbook",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "eventQueue",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "limit",
          "type": "u16"
        }
      ]
    },
    {
      "name": "newFuturesOrder",
      "accounts": [
        {
          "name": "clearing",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "cacheAccount",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "masterAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "subAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "market",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "openOrders",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "priceHistory",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "orderbook",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "eventQueue",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "bids",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "asks",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "quotePoolNode",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "args",
          "type": {
            "defined": "NewDerivativeOrderArgs"
          }
        }
      ]
    },
    {
      "name": "pruneFuturesOrders",
      "accounts": [
        {
          "name": "clearing",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "cacheAccount",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "masterAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "subAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "market",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "openOrders",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "orderbook",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "eventQueue",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "bids",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "asks",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "quotePoolNode",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "limit",
          "type": "u8"
        }
      ]
    },
    {
      "name": "settleFuturesFunds",
      "accounts": [
        {
          "name": "clearing",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "cacheAccount",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "masterAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "subAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "openOrders",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "market",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "quotePoolNode",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        }
      ],
      "args": []
    },
    {
      "name": "cancelPerpOrder",
      "accounts": [
        {
          "name": "clearing",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "cacheAccount",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "masterAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "subAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "market",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "openOrders",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "orderbook",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "eventQueue",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "bids",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "asks",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "quotePoolNode",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "args",
          "type": {
            "defined": "CancelOrderArgs"
          }
        }
      ]
    },
    {
      "name": "consumePerpEvents",
      "accounts": [
        {
          "name": "clearing",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "market",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "orderbook",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "eventQueue",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "limit",
          "type": "u16"
        }
      ]
    },
    {
      "name": "newPerpOrder",
      "accounts": [
        {
          "name": "clearing",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "cacheAccount",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "masterAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "subAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "market",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "openOrders",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "orderbook",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "eventQueue",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "bids",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "asks",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "quotePoolNode",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "args",
          "type": {
            "defined": "NewDerivativeOrderArgs"
          }
        }
      ]
    },
    {
      "name": "prunePerpOrders",
      "accounts": [
        {
          "name": "clearing",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "cacheAccount",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "masterAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "subAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "market",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "openOrders",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "orderbook",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "eventQueue",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "bids",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "asks",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "quotePoolNode",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "limit",
          "type": "u8"
        }
      ]
    },
    {
      "name": "settlePerpFunds",
      "accounts": [
        {
          "name": "clearing",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "cacheAccount",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "masterAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "subAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "openOrders",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "market",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "quotePoolNode",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "settleFunding",
      "accounts": [
        {
          "name": "cacheAccount",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "masterAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "subAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "openOrders",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "market",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "quotePoolNode",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": []
    }
  ],
  "accounts": [
    {
      "name": "cacheAccount",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "authority",
            "docs": [
              "the authority of the cache"
            ],
            "type": "publicKey"
          },
          {
            "name": "caches",
            "docs": [
              "the price caches, we have enough space here for more oracle maps than ever needed",
              "assuming that oracle products accounts actually get reused"
            ],
            "type": {
              "array": [
                {
                  "defined": "Cache"
                },
                512
              ]
            }
          }
        ]
      }
    },
    {
      "name": "clearing",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "bumpSeed",
            "type": {
              "array": [
                "u8",
                1
              ]
            }
          },
          {
            "name": "clearingType",
            "docs": [
              "the type of the clearing"
            ],
            "type": {
              "defined": "ClearingType"
            }
          },
          {
            "name": "padding1",
            "type": {
              "array": [
                "u8",
                6
              ]
            }
          },
          {
            "name": "clearingNumberSeed",
            "type": {
              "array": [
                "u8",
                1
              ]
            }
          },
          {
            "name": "padding2",
            "type": {
              "array": [
                "u8",
                7
              ]
            }
          },
          {
            "name": "authority",
            "docs": [
              "the clearing's authority"
            ],
            "type": "publicKey"
          },
          {
            "name": "feeMint",
            "docs": [
              "the mint of the token used to calculate fee tiers"
            ],
            "type": "publicKey"
          },
          {
            "name": "padding3",
            "type": {
              "array": [
                "u64",
                4
              ]
            }
          },
          {
            "name": "feeTiers",
            "docs": [
              "the fee tiers"
            ],
            "type": {
              "array": [
                {
                  "defined": "FeeTier"
                },
                10
              ]
            }
          },
          {
            "name": "config",
            "docs": [
              "the config of the clearing"
            ],
            "type": {
              "defined": "ClearingConfig"
            }
          }
        ]
      }
    },
    {
      "name": "whitelist",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "clearing",
            "docs": [
              "the corresponding clearing"
            ],
            "type": "publicKey"
          },
          {
            "name": "authority",
            "docs": [
              "the clearing's authority"
            ],
            "type": "publicKey"
          },
          {
            "name": "accountOwner",
            "docs": [
              "the account owner"
            ],
            "type": "publicKey"
          },
          {
            "name": "account",
            "docs": [
              "the actual cypher account"
            ],
            "type": "publicKey"
          },
          {
            "name": "status",
            "docs": [
              "whitelist status",
              "i.e, when a whitelist status is revoked, the authority of the clearing should be able",
              "to suspend a cypher account"
            ],
            "type": {
              "defined": "WhitelistStatus"
            }
          },
          {
            "name": "padding1",
            "type": {
              "array": [
                "u8",
                7
              ]
            }
          }
        ]
      }
    },
    {
      "name": "futuresMarket",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "inner",
            "docs": [
              "the inner structure which contains all relevant agnostic orderbook related public keys and fields"
            ],
            "type": {
              "defined": "AgnosticMarket"
            }
          },
          {
            "name": "idoAuthority",
            "docs": [
              "the ido authority of the market, if applicable"
            ],
            "type": "publicKey"
          },
          {
            "name": "underlyingMint",
            "docs": [
              "the mint of the underlying token this derivative market may physically deliver"
            ],
            "type": "publicKey"
          },
          {
            "name": "padding1",
            "type": {
              "array": [
                "u64",
                8
              ]
            }
          },
          {
            "name": "tokenSupply",
            "docs": [
              "the supply of the derivative token",
              "i.e in the case of a market being for physical delivery of the underlying asset",
              "the token supply should be equal to the amount of tokens available for delivery"
            ],
            "type": "u64"
          },
          {
            "name": "activatesAt",
            "docs": [
              "timestamp at which the market becomes active"
            ],
            "type": "u64"
          },
          {
            "name": "expiresAt",
            "docs": [
              "timestamp at which the market expires"
            ],
            "type": "u64"
          },
          {
            "name": "positionsCount",
            "docs": [
              "number of open positions in this market"
            ],
            "type": "u64"
          },
          {
            "name": "marketPrice",
            "docs": [
              "the twap price"
            ],
            "type": "i128"
          },
          {
            "name": "totalBorrows",
            "docs": [
              "the total amount of borrows of the derivative"
            ],
            "type": "u64"
          },
          {
            "name": "totalPurchased",
            "docs": [
              "the total amount of purchased tokens in the case of a pre-ido market"
            ],
            "type": "u64"
          },
          {
            "name": "padding2",
            "type": {
              "array": [
                "u64",
                2
              ]
            }
          },
          {
            "name": "totalRaised",
            "docs": [
              "the total amount of quote token that is available for the pre-ido token project's team to be collected"
            ],
            "type": "i128"
          }
        ]
      }
    },
    {
      "name": "perpetualMarket",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "inner",
            "docs": [
              "the inner structure which contains all relevant agnostic orderbook related public keys and fields"
            ],
            "type": {
              "defined": "AgnosticMarket"
            }
          },
          {
            "name": "longFunding",
            "docs": [
              "the long funding"
            ],
            "type": "i128"
          },
          {
            "name": "shortFunding",
            "docs": [
              "the short funding"
            ],
            "type": "i128"
          },
          {
            "name": "lastFundingUpdate",
            "docs": [
              "the timestamp of the last funding update"
            ],
            "type": "u64"
          },
          {
            "name": "impactQuantity",
            "docs": [
              "the impact quantity used when getting bids and asks to calculate book mid price"
            ],
            "type": "u64"
          },
          {
            "name": "padding1",
            "type": {
              "array": [
                "u64",
                10
              ]
            }
          },
          {
            "name": "minFunding",
            "docs": [
              "the minimum funding rate for this market, in percentage"
            ],
            "type": "i8"
          },
          {
            "name": "maxFunding",
            "docs": [
              "the maximum funding rate for this market, in percentage"
            ],
            "type": "i8"
          },
          {
            "name": "padding2",
            "type": {
              "array": [
                "u8",
                6
              ]
            }
          }
        ]
      }
    },
    {
      "name": "oracleProducts",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "productsType",
            "docs": [
              "the products type"
            ],
            "type": {
              "defined": "ProductsType"
            }
          },
          {
            "name": "padding",
            "type": {
              "array": [
                "u8",
                7
              ]
            }
          },
          {
            "name": "symbol",
            "docs": [
              "the symbol of the underlying token that this oracle products account is responsible for",
              "",
              "this is used as a PDA for the oracle products account to more easily derive this account and see if it exists so it is properly reused"
            ],
            "type": {
              "array": [
                "u8",
                32
              ]
            }
          },
          {
            "name": "maxConfidenceInterval",
            "docs": [
              "the maximum confidence interval for the oracle price"
            ],
            "type": "f64"
          },
          {
            "name": "futuresMarket",
            "docs": [
              "the futures market associated with this oracle products account"
            ],
            "type": "publicKey"
          },
          {
            "name": "perpMarket",
            "docs": [
              "the perp market associated with this oracle products account"
            ],
            "type": "publicKey"
          },
          {
            "name": "tokenMint",
            "docs": [
              "the token mint associated with this oracle products account"
            ],
            "type": "publicKey"
          },
          {
            "name": "products",
            "docs": [
              "the product accounts"
            ],
            "type": {
              "vec": {
                "array": [
                  "u8",
                  32
                ]
              }
            }
          },
          {
            "name": "weights",
            "docs": [
              "the weights of the products"
            ],
            "type": {
              "vec": "u16"
            }
          }
        ]
      }
    },
    {
      "name": "oracleStub",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "symbol",
            "docs": [
              "the symbol of the underlying token that this oracle stub provides a feed for"
            ],
            "type": {
              "array": [
                "u8",
                32
              ]
            }
          },
          {
            "name": "price",
            "docs": [
              "The oracle price"
            ],
            "type": "i128"
          }
        ]
      }
    },
    {
      "name": "ordersAccount",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "orderCount",
            "docs": [
              "number of orders"
            ],
            "type": "u8"
          },
          {
            "name": "padding",
            "type": {
              "array": [
                "u8",
                7
              ]
            }
          },
          {
            "name": "authority",
            "docs": [
              "the account's authority"
            ],
            "type": "publicKey"
          },
          {
            "name": "market",
            "docs": [
              "the account's authority"
            ],
            "type": "publicKey"
          },
          {
            "name": "masterAccount",
            "docs": [
              "the master account pubkey"
            ],
            "type": "publicKey"
          },
          {
            "name": "makerBaseVolume",
            "docs": [
              "the accumulated maker base token volume"
            ],
            "type": "u64"
          },
          {
            "name": "makerQuoteVolume",
            "docs": [
              "the accumulated maker quote token volume"
            ],
            "type": "u64"
          },
          {
            "name": "takerBaseVolume",
            "docs": [
              "the accumulated taker base token volume"
            ],
            "type": "u64"
          },
          {
            "name": "takerQuoteVolume",
            "docs": [
              "the accumulated taker quote token volume"
            ],
            "type": "u64"
          },
          {
            "name": "baseTokenFree",
            "docs": [
              "the amount of base token free"
            ],
            "type": {
              "array": [
                "u64",
                24
              ]
            }
          },
          {
            "name": "baseTokenLocked",
            "docs": [
              "the amount of base token locked"
            ],
            "type": {
              "array": [
                "u64",
                24
              ]
            }
          },
          {
            "name": "quoteTokenFree",
            "docs": [
              "the amount of quote token free"
            ],
            "type": {
              "array": [
                "u64",
                24
              ]
            }
          },
          {
            "name": "quoteTokenLocked",
            "docs": [
              "the amount of quote token locked in orders"
            ],
            "type": {
              "array": [
                "u64",
                24
              ]
            }
          },
          {
            "name": "openOrders",
            "docs": [
              "the open orders in this account"
            ],
            "type": {
              "array": [
                {
                  "defined": "OpenOrder"
                },
                128
              ]
            }
          }
        ]
      }
    },
    {
      "name": "poolNode",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "cacheIndex",
            "docs": [
              "the index of the cache for the pool that this node belongs to"
            ],
            "type": "u16"
          },
          {
            "name": "vaultSignerSeed",
            "docs": [
              "the bump seed"
            ],
            "type": {
              "array": [
                "u8",
                1
              ]
            }
          },
          {
            "name": "nodeNumber",
            "docs": [
              "the number of the node, also used as a seed for the pool node pda"
            ],
            "type": "u8"
          },
          {
            "name": "operatingStatus",
            "type": {
              "defined": "OperatingStatus"
            }
          },
          {
            "name": "padding1",
            "type": {
              "array": [
                "u8",
                11
              ]
            }
          },
          {
            "name": "selfAddress",
            "docs": [
              "the pool node's address, used as a seed for the vault signer"
            ],
            "type": "publicKey"
          },
          {
            "name": "authority",
            "docs": [
              "the authority over this account"
            ],
            "type": "publicKey"
          },
          {
            "name": "cache",
            "docs": [
              "the cache account"
            ],
            "type": "publicKey"
          },
          {
            "name": "pool",
            "docs": [
              "the pool this node belongs to"
            ],
            "type": "publicKey"
          },
          {
            "name": "tokenMint",
            "docs": [
              "the node's token mint"
            ],
            "type": "publicKey"
          },
          {
            "name": "tokenVault",
            "docs": [
              "the node's token vault"
            ],
            "type": "publicKey"
          },
          {
            "name": "vaultSigner",
            "docs": [
              "the node's vault signer"
            ],
            "type": "publicKey"
          },
          {
            "name": "deposits",
            "docs": [
              "the amount of deposits"
            ],
            "type": "i128"
          },
          {
            "name": "borrows",
            "docs": [
              "the amount of borrows"
            ],
            "type": "i128"
          },
          {
            "name": "accumBorrows",
            "docs": [
              "accumulated borrows"
            ],
            "type": "i128"
          },
          {
            "name": "accumRepays",
            "docs": [
              "accumulated repays"
            ],
            "type": "i128"
          },
          {
            "name": "protocolFees",
            "docs": [
              "protocol fees accumulated so far"
            ],
            "type": "u64"
          },
          {
            "name": "padding2",
            "type": {
              "array": [
                "u64",
                1
              ]
            }
          }
        ]
      }
    },
    {
      "name": "pool",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "bumpSeed",
            "docs": [
              "the bump seed"
            ],
            "type": {
              "array": [
                "u8",
                1
              ]
            }
          },
          {
            "name": "operatingStatus",
            "docs": [
              "the pool's operating status"
            ],
            "type": {
              "defined": "OperatingStatus"
            }
          },
          {
            "name": "padding1",
            "type": {
              "array": [
                "u8",
                14
              ]
            }
          },
          {
            "name": "poolName",
            "docs": [
              "the name of the pool, which is also used as a seed"
            ],
            "type": {
              "array": [
                "u8",
                32
              ]
            }
          },
          {
            "name": "config",
            "docs": [
              "the pool config"
            ],
            "type": {
              "defined": "PoolConfig"
            }
          },
          {
            "name": "authority",
            "docs": [
              "the authority over this account"
            ],
            "type": "publicKey"
          },
          {
            "name": "tokenMint",
            "docs": [
              "the address of the token mint this pool represents"
            ],
            "type": "publicKey"
          },
          {
            "name": "padding2",
            "type": {
              "array": [
                "u64",
                4
              ]
            }
          },
          {
            "name": "oracleProducts",
            "docs": [
              "the oracle products account"
            ],
            "type": "publicKey"
          },
          {
            "name": "dexMarket",
            "docs": [
              "the dex market for this pool"
            ],
            "type": "publicKey"
          },
          {
            "name": "cache",
            "docs": [
              "the price cache account"
            ],
            "type": "publicKey"
          },
          {
            "name": "padding3",
            "type": {
              "array": [
                "u64",
                8
              ]
            }
          },
          {
            "name": "deposits",
            "docs": [
              "the amount of deposits across all nodes"
            ],
            "type": "i128"
          },
          {
            "name": "borrows",
            "docs": [
              "the amount of borrows across all nodes"
            ],
            "type": "i128"
          },
          {
            "name": "depositIndex",
            "docs": [
              "the deposit index"
            ],
            "type": "i128"
          },
          {
            "name": "borrowIndex",
            "docs": [
              "the borrow index"
            ],
            "type": "i128"
          },
          {
            "name": "accumDepositInterestPayment",
            "docs": [
              "accumulated deposit interest payments denominated in quote currency"
            ],
            "type": "i128"
          },
          {
            "name": "accumBorrowInterestPayment",
            "docs": [
              "accumulated borrow interest payments denominated in quote currency"
            ],
            "type": "i128"
          },
          {
            "name": "indexUpdatedAt",
            "docs": [
              "timestamp of the last index update"
            ],
            "type": "u64"
          },
          {
            "name": "protocolFees",
            "docs": [
              "protocol fees accumulated so far"
            ],
            "type": "u64"
          },
          {
            "name": "insuranceFund",
            "docs": [
              "the insurance fund for this pool"
            ],
            "type": "u64"
          },
          {
            "name": "padding4",
            "type": {
              "array": [
                "u64",
                12
              ]
            }
          },
          {
            "name": "nodes",
            "type": {
              "array": [
                {
                  "defined": "NodeInfo"
                },
                24
              ]
            }
          }
        ]
      }
    },
    {
      "name": "priceHistory",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "market",
            "docs": [
              "market this price history is for"
            ],
            "type": "publicKey"
          },
          {
            "name": "data",
            "docs": [
              "array of price infos."
            ],
            "type": {
              "array": [
                {
                  "defined": "PriceWithTs"
                },
                14400
              ]
            }
          },
          {
            "name": "config",
            "type": {
              "defined": "PriceHistoryConfig"
            }
          },
          {
            "name": "longerHead",
            "docs": [
              "head of prices for longer time horizon."
            ],
            "type": "u16"
          },
          {
            "name": "shorterHead",
            "docs": [
              "head of prices for shorter time horizon."
            ],
            "type": "u16"
          },
          {
            "name": "tail",
            "docs": [
              "tail of prices(most recently added price)."
            ],
            "type": "u16"
          },
          {
            "name": "padding1",
            "type": "u16"
          },
          {
            "name": "padding2",
            "type": {
              "array": [
                "u64",
                8
              ]
            }
          }
        ]
      }
    },
    {
      "name": "cypherAccount",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "bumpSeed",
            "docs": [
              "the bump seed"
            ],
            "type": {
              "array": [
                "u8",
                1
              ]
            }
          },
          {
            "name": "accountNumberSeed",
            "docs": [
              "the account number seed"
            ],
            "type": {
              "array": [
                "u8",
                1
              ]
            }
          },
          {
            "name": "accountType",
            "docs": [
              "the account type"
            ],
            "type": {
              "defined": "AccountType"
            }
          },
          {
            "name": "feeTier",
            "docs": [
              "the fee tier of this account"
            ],
            "type": "u8"
          },
          {
            "name": "padding",
            "type": {
              "array": [
                "u8",
                12
              ]
            }
          },
          {
            "name": "clearing",
            "docs": [
              "the clearing this account belongs to"
            ],
            "type": "publicKey"
          },
          {
            "name": "authority",
            "docs": [
              "the account's authority, should match sub accounts authority"
            ],
            "type": "publicKey"
          },
          {
            "name": "delegate",
            "docs": [
              "the account's delegate"
            ],
            "type": "publicKey"
          },
          {
            "name": "subAccountCaches",
            "docs": [
              "the sub account cache"
            ],
            "type": {
              "array": [
                {
                  "defined": "SubAccountCache"
                },
                24
              ]
            }
          },
          {
            "name": "updatedAt",
            "docs": [
              "slot of the last account update"
            ],
            "type": "u64"
          },
          {
            "name": "padding2",
            "type": {
              "array": [
                "u8",
                8
              ]
            }
          }
        ]
      }
    },
    {
      "name": "cypherSubAccount",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "bumpSeed",
            "docs": [
              "the bump seed"
            ],
            "type": {
              "array": [
                "u8",
                1
              ]
            }
          },
          {
            "name": "accountNumberSeed",
            "docs": [
              "the account number seed"
            ],
            "type": {
              "array": [
                "u8",
                1
              ]
            }
          },
          {
            "name": "marginingType",
            "docs": [
              "the margining type of this account"
            ],
            "type": {
              "defined": "SubAccountMargining"
            }
          },
          {
            "name": "padding",
            "type": {
              "array": [
                "u8",
                13
              ]
            }
          },
          {
            "name": "accountAlias",
            "docs": [
              "the alias of the account"
            ],
            "type": {
              "array": [
                "u8",
                32
              ]
            }
          },
          {
            "name": "clearing",
            "docs": [
              "the associated clearing"
            ],
            "type": "publicKey"
          },
          {
            "name": "masterAccount",
            "docs": [
              "the master account"
            ],
            "type": "publicKey"
          },
          {
            "name": "authority",
            "docs": [
              "the authority"
            ],
            "type": "publicKey"
          },
          {
            "name": "delegate",
            "docs": [
              "the delegate"
            ],
            "type": "publicKey"
          },
          {
            "name": "updatedAt",
            "docs": [
              "the slot of the last update of this account"
            ],
            "type": "u64"
          },
          {
            "name": "claimableRewards",
            "docs": [
              "the amount of claimable liquidity mining rewards"
            ],
            "type": "u64"
          },
          {
            "name": "padding2",
            "type": {
              "array": [
                "u64",
                7
              ]
            }
          },
          {
            "name": "padding3",
            "type": {
              "array": [
                "u8",
                8
              ]
            }
          },
          {
            "name": "positions",
            "docs": [
              "the positions of this sub account"
            ],
            "type": {
              "array": [
                {
                  "defined": "PositionSlot"
                },
                24
              ]
            }
          }
        ]
      }
    }
  ],
  "types": [
    {
      "name": "LiquidityMiningArgs",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "rate",
            "docs": [
              "the rate that is used to convert liquidity points to the LM reward token"
            ],
            "type": "i128"
          },
          {
            "name": "maxDepthBps",
            "docs": [
              "max depth on the book in bps"
            ],
            "type": "i128"
          },
          {
            "name": "periodStart",
            "docs": [
              "timestamp of the start of the liquidity mining incentive period"
            ],
            "type": "u64"
          },
          {
            "name": "targetPeriodLength",
            "docs": [
              "target time length for a liquidity mining period"
            ],
            "type": "u64"
          },
          {
            "name": "tokensLeft",
            "docs": [
              "tokens left for this period."
            ],
            "type": "u64"
          },
          {
            "name": "tokensPerPeriod",
            "docs": [
              "total amount of tokens allocated for a given period"
            ],
            "type": "u64"
          },
          {
            "name": "tokenMint",
            "docs": [
              "the token mint of the token being used for rewards"
            ],
            "type": "publicKey"
          },
          {
            "name": "minRateAdj",
            "docs": [
              "the minimum rate adjustment"
            ],
            "type": "u64"
          },
          {
            "name": "maxRateAdj",
            "docs": [
              "the maximum rate adjusment"
            ],
            "type": "u64"
          },
          {
            "name": "sizeCutoff",
            "docs": [
              "the size cut off for rewards"
            ],
            "type": "u64"
          },
          {
            "name": "tokenDecimals",
            "docs": [
              "the decimals of the token being rewarded"
            ],
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "FeeTierArgs",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "balance",
            "docs": [
              "the token balance necessary for this tier"
            ],
            "type": "u64"
          },
          {
            "name": "tier",
            "docs": [
              "the tier identifier, should start at 1 up to 10"
            ],
            "type": "u8"
          },
          {
            "name": "makerBps",
            "docs": [
              "the maker fee in bps",
              "i.e, if this value is not zero, the rebate bps field can't be positive"
            ],
            "type": "u8"
          },
          {
            "name": "takerBps",
            "docs": [
              "the taker fee in bps"
            ],
            "type": "u8"
          },
          {
            "name": "rebateBps",
            "docs": [
              "the maker rebate in bps",
              "i.e, if this value is positive then the maker bps field should be zero"
            ],
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "CreateOracleProductsArgs",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "productsType",
            "docs": [
              "the products type"
            ],
            "type": {
              "defined": "ProductsType"
            }
          },
          {
            "name": "numProducts",
            "docs": [
              "the number of products that compose the oracle price feed"
            ],
            "type": "u8"
          },
          {
            "name": "maxConfidenceInterval",
            "docs": [
              "the maxmimum confidence interval"
            ],
            "type": "f64"
          },
          {
            "name": "weights",
            "docs": [
              "the weights of those products"
            ],
            "type": {
              "vec": "u16"
            }
          },
          {
            "name": "symbol",
            "docs": [
              "the symbol of this asset, i.e \"SOL\""
            ],
            "type": {
              "array": [
                "u8",
                32
              ]
            }
          }
        ]
      }
    },
    {
      "name": "CreateClearingArgs",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "clearingNumber",
            "docs": [
              "the clearing number, which is also a seed for the clearing to be a signer"
            ],
            "type": "u8"
          },
          {
            "name": "bump",
            "docs": [
              "the bump of the clearing's program derived address"
            ],
            "type": "u8"
          },
          {
            "name": "maintMargin",
            "docs": [
              "the maintenance margin"
            ],
            "type": "u8"
          },
          {
            "name": "initMargin",
            "docs": [
              "the initialization margin"
            ],
            "type": "u8"
          },
          {
            "name": "targetMargin",
            "docs": [
              "the target margin used by liquidators"
            ],
            "type": "u8"
          },
          {
            "name": "liqLiqorFee",
            "docs": [
              "the liquidation fee bonus for the liquidator"
            ],
            "type": "u8"
          },
          {
            "name": "liqInsuranceFee",
            "docs": [
              "the liquidation fee for the insurance fund"
            ],
            "type": "u8"
          },
          {
            "name": "feeMint",
            "docs": [
              "the fee mint"
            ],
            "type": "publicKey"
          },
          {
            "name": "clearingType",
            "docs": [
              "the clearing type"
            ],
            "type": {
              "defined": "ClearingType"
            }
          },
          {
            "name": "feeTiers",
            "docs": [
              "fee tier config"
            ],
            "type": {
              "vec": {
                "defined": "FeeTierArgs"
              }
            }
          }
        ]
      }
    },
    {
      "name": "CreatePerpetualMarketArgs",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "marketType",
            "docs": [
              "the type of the market"
            ],
            "type": {
              "defined": "MarketType"
            }
          },
          {
            "name": "marketBump",
            "docs": [
              "the market's bump"
            ],
            "type": "u8"
          },
          {
            "name": "initAssetWeight",
            "docs": [
              "the weight of this market's positions as an asset for initialization purposes"
            ],
            "type": "u8"
          },
          {
            "name": "initLiabWeight",
            "docs": [
              "the weight of this market's positions as a liability for initialization purposes"
            ],
            "type": "u8"
          },
          {
            "name": "maintAssetWeight",
            "docs": [
              "the weight of this market's positions as an asset for maintenance purposes"
            ],
            "type": "u8"
          },
          {
            "name": "maintLiabWeight",
            "docs": [
              "the weight of this market's positions as a liability for maintenance purposes"
            ],
            "type": "u8"
          },
          {
            "name": "minBaseOrderSize",
            "docs": [
              "the minimum order size in the base token"
            ],
            "type": "u64"
          },
          {
            "name": "tickSize",
            "docs": [
              "the tick size of the market"
            ],
            "type": "u64"
          },
          {
            "name": "baseMultiplier",
            "docs": [
              "the base multiplier for the market"
            ],
            "type": "u64"
          },
          {
            "name": "quoteMultiplier",
            "docs": [
              "the quote multiplier for the market"
            ],
            "type": "u64"
          },
          {
            "name": "impactQuantity",
            "docs": [
              "the impact quantity used when getting bids and asks to calculate book mid price"
            ],
            "type": "u64"
          },
          {
            "name": "minFunding",
            "docs": [
              "the minimum funding rate for this market, in percentage"
            ],
            "type": "i8"
          },
          {
            "name": "maxFunding",
            "docs": [
              "the maximum funding rate for this market, in percentage"
            ],
            "type": "i8"
          },
          {
            "name": "maxBaseOrderSize",
            "docs": [
              "the maximum order base size for non-postOnly orders"
            ],
            "type": "u64"
          },
          {
            "name": "maxQuoteOrderSize",
            "docs": [
              "the maximum order quote size for non-postOnly orders"
            ],
            "type": "u64"
          },
          {
            "name": "decimals",
            "docs": [
              "the decimals used for the derivative asset positions"
            ],
            "type": "u8"
          },
          {
            "name": "marketName",
            "docs": [
              "the market's ticker/name, i.e \"SOL-PERP\""
            ],
            "type": {
              "array": [
                "u8",
                32
              ]
            }
          }
        ]
      }
    },
    {
      "name": "CreateFuturesMarketArgs",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "marketType",
            "docs": [
              "the type of the market"
            ],
            "type": {
              "defined": "MarketType"
            }
          },
          {
            "name": "deliveryType",
            "docs": [
              "the type of settlement"
            ],
            "type": {
              "defined": "SettlementType"
            }
          },
          {
            "name": "expiresAt",
            "docs": [
              "the timestamp at which the market expires"
            ],
            "type": "u64"
          },
          {
            "name": "activatesAt",
            "docs": [
              "the timestamp at which the market activates"
            ],
            "type": "u64"
          },
          {
            "name": "tokenSupply",
            "docs": [
              "the token supply of the derivative asset"
            ],
            "type": "u64"
          },
          {
            "name": "marketBump",
            "docs": [
              "the market's bump"
            ],
            "type": "u8"
          },
          {
            "name": "initAssetWeight",
            "docs": [
              "the weight of this market's positions as an asset for initialization purposes"
            ],
            "type": "u8"
          },
          {
            "name": "initLiabWeight",
            "docs": [
              "the weight of this market's positions as a liability for initialization purposes"
            ],
            "type": "u8"
          },
          {
            "name": "maintAssetWeight",
            "docs": [
              "the weight of this market's positions as an asset for maintenance purposes"
            ],
            "type": "u8"
          },
          {
            "name": "maintLiabWeight",
            "docs": [
              "the weight of this market's positions as a liability for maintenance purposes"
            ],
            "type": "u8"
          },
          {
            "name": "twapLongerTimeHorizon",
            "docs": [
              "the twap's longer time horizon"
            ],
            "type": "u64"
          },
          {
            "name": "twapShorterTimeHorizon",
            "docs": [
              "the twap's shorter time horizon"
            ],
            "type": "u64"
          },
          {
            "name": "twapPriceCollectionTick",
            "docs": [
              "the twap price collection tick"
            ],
            "type": "u64"
          },
          {
            "name": "minBaseOrderSize",
            "docs": [
              "the minimum order size in the base token"
            ],
            "type": "u64"
          },
          {
            "name": "tickSize",
            "docs": [
              "the tick size of the market"
            ],
            "type": "u64"
          },
          {
            "name": "baseMultiplier",
            "docs": [
              "the base multiplier for the market"
            ],
            "type": "u64"
          },
          {
            "name": "quoteMultiplier",
            "docs": [
              "the quote multiplier for the market"
            ],
            "type": "u64"
          },
          {
            "name": "maxBaseOrderSize",
            "docs": [
              "the maximum order base size for non-postOnly orders"
            ],
            "type": "u64"
          },
          {
            "name": "maxQuoteOrderSize",
            "docs": [
              "the maximum order quote size for non-postOnly orders"
            ],
            "type": "u64"
          },
          {
            "name": "decimals",
            "docs": [
              "the decimals used for the derivative asset positions"
            ],
            "type": "u8"
          },
          {
            "name": "marketName",
            "docs": [
              "the market's ticker/name, i.e \"SOL-09/30/22\" for a sept expiry dated future"
            ],
            "type": {
              "array": [
                "u8",
                32
              ]
            }
          }
        ]
      }
    },
    {
      "name": "CreatePoolArgs",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "vaultSignerBump",
            "docs": [
              "the vault signer bump"
            ],
            "type": "u8"
          },
          {
            "name": "poolBump",
            "docs": [
              "the pool bump"
            ],
            "type": "u8"
          },
          {
            "name": "optimalApr",
            "docs": [
              "the optimal apr ratio for the pool"
            ],
            "type": "u16"
          },
          {
            "name": "optimalUtil",
            "docs": [
              "the optimal utilization for the pool"
            ],
            "type": "u16"
          },
          {
            "name": "maxApr",
            "docs": [
              "the max apr for the pool"
            ],
            "type": "u16"
          },
          {
            "name": "decimals",
            "docs": [
              "the decimals of the spl token mint associated with the pool"
            ],
            "type": "u8"
          },
          {
            "name": "initAssetWeight",
            "docs": [
              "the weight of this token as an asset for initialization purposes"
            ],
            "type": "u8"
          },
          {
            "name": "initLiabWeight",
            "docs": [
              "the weight of this token as a liability for initialization purposes"
            ],
            "type": "u8"
          },
          {
            "name": "maintAssetWeight",
            "docs": [
              "the weight of this token as an asset for maintenance purposes"
            ],
            "type": "u8"
          },
          {
            "name": "maintLiabWeight",
            "docs": [
              "the weight of this token as a liability for maintenance purposes"
            ],
            "type": "u8"
          },
          {
            "name": "poolName",
            "docs": [
              "the pool's ticker/name, i.e \"SOL\""
            ],
            "type": {
              "array": [
                "u8",
                32
              ]
            }
          }
        ]
      }
    },
    {
      "name": "NewSpotOrderArgs",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "side",
            "docs": [
              "the side of the order"
            ],
            "type": {
              "defined": "Side"
            }
          },
          {
            "name": "limitPrice",
            "docs": [
              "the limit price for the order"
            ],
            "type": "u64"
          },
          {
            "name": "maxCoinQty",
            "docs": [
              "the base quantity to buy or sell"
            ],
            "type": "u64"
          },
          {
            "name": "maxNativePcQtyIncludingFees",
            "docs": [
              "the max quote quanity to receive or pay"
            ],
            "type": "u64"
          },
          {
            "name": "orderType",
            "docs": [
              "the order type"
            ],
            "type": {
              "defined": "OrderType"
            }
          },
          {
            "name": "selfTradeBehavior",
            "docs": [
              "the self trade behavior"
            ],
            "type": {
              "defined": "SelfTradeBehavior"
            }
          },
          {
            "name": "clientOrderId",
            "docs": [
              "the client order id"
            ],
            "type": "u64"
          },
          {
            "name": "limit",
            "docs": [
              "the maximum number of orders to be matched against"
            ],
            "type": "u16"
          }
        ]
      }
    },
    {
      "name": "NewDerivativeOrderArgs",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "side",
            "docs": [
              "the side of the order"
            ],
            "type": {
              "defined": "Side"
            }
          },
          {
            "name": "limitPrice",
            "docs": [
              "the limit price for the order (as FP32)"
            ],
            "type": "u64"
          },
          {
            "name": "maxBaseQty",
            "docs": [
              "the base quantity to buy or sell"
            ],
            "type": "u64"
          },
          {
            "name": "maxQuoteQty",
            "docs": [
              "the max quote quanity to receive or pay"
            ],
            "type": "u64"
          },
          {
            "name": "orderType",
            "docs": [
              "the order type"
            ],
            "type": {
              "defined": "DerivativeOrderType"
            }
          },
          {
            "name": "clientOrderId",
            "docs": [
              "the client order id"
            ],
            "type": "u64"
          },
          {
            "name": "limit",
            "docs": [
              "the maximum number of orders to be matched against"
            ],
            "type": "u16"
          },
          {
            "name": "maxTs",
            "docs": [
              "the time in force timestamp for this order"
            ],
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "CancelOrderArgs",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "orderId",
            "docs": [
              "the order id"
            ],
            "type": "u128"
          },
          {
            "name": "side",
            "docs": [
              "the side of the order"
            ],
            "type": {
              "defined": "Side"
            }
          },
          {
            "name": "isClientId",
            "docs": [
              "whether the given order id is a a client id"
            ],
            "type": "bool"
          }
        ]
      }
    },
    {
      "name": "Cache",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "oracleProducts",
            "docs": [
              "the oracle products account that is used to derive this price feed"
            ],
            "type": "publicKey"
          },
          {
            "name": "oraclePrice",
            "docs": [
              "the latest price"
            ],
            "type": "i128"
          },
          {
            "name": "marketPrice",
            "docs": [
              "the twap price for the futures market"
            ],
            "type": "i128"
          },
          {
            "name": "updatedAt",
            "docs": [
              "the slot at which this cache was last updated"
            ],
            "type": "u64"
          },
          {
            "name": "padding1",
            "type": {
              "array": [
                "u8",
                8
              ]
            }
          },
          {
            "name": "depositIndex",
            "docs": [
              "the deposit index of the spot token"
            ],
            "type": "i128"
          },
          {
            "name": "borrowIndex",
            "docs": [
              "the borrow index of the spot token"
            ],
            "type": "i128"
          },
          {
            "name": "spotInitAssetWeight",
            "docs": [
              "the init asset weight of the spot token"
            ],
            "type": "u8"
          },
          {
            "name": "spotMaintAssetWeight",
            "docs": [
              "the maint asset weight of the spot token"
            ],
            "type": "u8"
          },
          {
            "name": "spotInitLiabWeight",
            "docs": [
              "the init liab weight of the spot token"
            ],
            "type": "u8"
          },
          {
            "name": "spotMaintLiabWeight",
            "docs": [
              "the maint liab weight of the spot token"
            ],
            "type": "u8"
          },
          {
            "name": "futuresInitAssetWeight",
            "docs": [
              "the init asset weight of the futures position"
            ],
            "type": "u8"
          },
          {
            "name": "futuresMaintAssetWeight",
            "docs": [
              "the maint asset weight of the futures position"
            ],
            "type": "u8"
          },
          {
            "name": "futuresInitLiabWeight",
            "docs": [
              "the init liab weight of the futures position"
            ],
            "type": "u8"
          },
          {
            "name": "futuresMaintLiabWeight",
            "docs": [
              "the maint liab weight of the futures position"
            ],
            "type": "u8"
          },
          {
            "name": "perpInitAssetWeight",
            "docs": [
              "the init asset weight of the perp position"
            ],
            "type": "u8"
          },
          {
            "name": "perpMaintAssetWeight",
            "docs": [
              "the maint asset weight of the perp position"
            ],
            "type": "u8"
          },
          {
            "name": "perpInitLiabWeight",
            "docs": [
              "the init liab weight of the perp position"
            ],
            "type": "u8"
          },
          {
            "name": "perpMaintLiabWeight",
            "docs": [
              "the maint liab weight of the perp position"
            ],
            "type": "u8"
          },
          {
            "name": "decimals",
            "docs": [
              "the decimals of the spl token traded on the spot market and available for deposit"
            ],
            "type": "u8"
          },
          {
            "name": "futuresDecimals",
            "docs": [
              "the decimals of derivative asset for futures markets"
            ],
            "type": "u8"
          },
          {
            "name": "perpDecimals",
            "docs": [
              "the decimals of derivative asset for perpetual markets"
            ],
            "type": "u8"
          },
          {
            "name": "padding2",
            "type": {
              "array": [
                "u8",
                1
              ]
            }
          }
        ]
      }
    },
    {
      "name": "FeeTier",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "balance",
            "docs": [
              "the balance necessary"
            ],
            "type": "u64"
          },
          {
            "name": "makerBps",
            "docs": [
              "the maker fee in bps",
              "i.e, this value should be zero whenever the maker rebate is supposed to be positive"
            ],
            "type": "u8"
          },
          {
            "name": "takerBps",
            "docs": [
              "the taker fee in bps"
            ],
            "type": "u8"
          },
          {
            "name": "rebateBps",
            "docs": [
              "the maker rebate in bps",
              "i.e this value should only be positive whenever the maker rate itself is zero"
            ],
            "type": "u8"
          },
          {
            "name": "tier",
            "docs": [
              "the tier identifier, should start at 1"
            ],
            "type": "u8"
          },
          {
            "name": "padding1",
            "type": {
              "array": [
                "u8",
                4
              ]
            }
          }
        ]
      }
    },
    {
      "name": "ClearingConfig",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "maintMargin",
            "docs": [
              "the maintenance margin"
            ],
            "type": "u8"
          },
          {
            "name": "initMargin",
            "docs": [
              "the initialization margin"
            ],
            "type": "u8"
          },
          {
            "name": "targetMargin",
            "docs": [
              "the target margin used by liquidators"
            ],
            "type": "u8"
          },
          {
            "name": "liqLiqorFee",
            "docs": [
              "the liquidation fee bonus for the liquidator"
            ],
            "type": "u8"
          },
          {
            "name": "liqInsuranceFee",
            "docs": [
              "the liquidation fee for the insurance fund"
            ],
            "type": "u8"
          },
          {
            "name": "padding1",
            "type": {
              "array": [
                "u8",
                3
              ]
            }
          }
        ]
      }
    },
    {
      "name": "MarketConfig",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "signerSeeds",
            "docs": [
              "the signer seeds for this account"
            ],
            "type": {
              "array": [
                "u8",
                1
              ]
            }
          },
          {
            "name": "marketType",
            "docs": [
              "the type of this market"
            ],
            "type": {
              "defined": "MarketType"
            }
          },
          {
            "name": "settlementType",
            "docs": [
              "the type of delivery for this market in case it is a futures market"
            ],
            "type": {
              "defined": "SettlementType"
            }
          },
          {
            "name": "isActive",
            "docs": [
              "whether the market is active",
              "i.e, in the case of a market being for physical delivery of the underlying asset",
              "the market cannot become active until the vault of the underlying asset being delivered has",
              "a balance equivalent to the token supply of the derivative asset"
            ],
            "type": "bool"
          },
          {
            "name": "cacheIndex",
            "docs": [
              "the cache index for this market"
            ],
            "type": "u16"
          },
          {
            "name": "initAssetWeight",
            "docs": [
              "the init asset weight of the pool's positions for margin calculations"
            ],
            "type": "u8"
          },
          {
            "name": "initLiabWeight",
            "docs": [
              "the init liability weight of the pool's positions for margin calculations"
            ],
            "type": "u8"
          },
          {
            "name": "maintAssetWeight",
            "docs": [
              "the maint asset weight of the pool's positions for margin calculations"
            ],
            "type": "u8"
          },
          {
            "name": "maintLiabWeight",
            "docs": [
              "the maint liability weight of the pool's positions for margin calculations"
            ],
            "type": "u8"
          },
          {
            "name": "decimals",
            "docs": [
              "the decimals used for the target oracle price of this pool's asset"
            ],
            "type": "u8"
          },
          {
            "name": "operatingStatus",
            "docs": [
              "the operating status of the market"
            ],
            "type": {
              "defined": "OperatingStatus"
            }
          },
          {
            "name": "padding",
            "type": {
              "array": [
                "u8",
                4
              ]
            }
          }
        ]
      }
    },
    {
      "name": "LiquidityMiningInfo",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "tokenMint",
            "docs": [
              "the token mint of the token being used for rewards"
            ],
            "type": "publicKey"
          },
          {
            "name": "rate",
            "docs": [
              "the rate that is used to convert liquidity points to the LM reward token"
            ],
            "type": "i128"
          },
          {
            "name": "maxDepthBps",
            "docs": [
              "max depth on the book in bps"
            ],
            "type": "i128"
          },
          {
            "name": "periodStart",
            "docs": [
              "timestamp of the start of the liquidity mining incentive period"
            ],
            "type": "u64"
          },
          {
            "name": "targetPeriodLength",
            "docs": [
              "target time length for a liquidity mining period"
            ],
            "type": "u64"
          },
          {
            "name": "tokensLeft",
            "docs": [
              "tokens left for this period."
            ],
            "type": "u64"
          },
          {
            "name": "tokensPerPeriod",
            "docs": [
              "total amount of tokens allocated for a given period"
            ],
            "type": "u64"
          },
          {
            "name": "minRateAdj",
            "docs": [
              "the minimum rate adjustment"
            ],
            "type": "u64"
          },
          {
            "name": "maxRateAdj",
            "docs": [
              "the maximum rate adjusment"
            ],
            "type": "u64"
          },
          {
            "name": "sizeCutoff",
            "docs": [
              "the size cut off for rewards"
            ],
            "type": "u64"
          },
          {
            "name": "tokenDecimals",
            "docs": [
              "the decimals of the token being rewarded"
            ],
            "type": "u8"
          },
          {
            "name": "padding1",
            "type": {
              "array": [
                "u8",
                7
              ]
            }
          }
        ]
      }
    },
    {
      "name": "AgnosticMarket",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "config",
            "docs": [
              "the config of the market"
            ],
            "type": {
              "defined": "MarketConfig"
            }
          },
          {
            "name": "marketName",
            "docs": [
              "the name of the market, which is also used as a seed"
            ],
            "type": {
              "array": [
                "u8",
                32
              ]
            }
          },
          {
            "name": "orderbook",
            "docs": [
              "the order book for this market"
            ],
            "type": "publicKey"
          },
          {
            "name": "bids",
            "docs": [
              "the bids account for this market"
            ],
            "type": "publicKey"
          },
          {
            "name": "asks",
            "docs": [
              "the asks account for this market"
            ],
            "type": "publicKey"
          },
          {
            "name": "eventQueue",
            "docs": [
              "the asks account for this market"
            ],
            "type": "publicKey"
          },
          {
            "name": "authority",
            "docs": [
              "the authority of the market"
            ],
            "type": "publicKey"
          },
          {
            "name": "priceHistory",
            "docs": [
              "the price history account for on-chain twap"
            ],
            "type": "publicKey"
          },
          {
            "name": "oracleProducts",
            "docs": [
              "the oracle products account"
            ],
            "type": "publicKey"
          },
          {
            "name": "padding1",
            "type": {
              "array": [
                "u64",
                8
              ]
            }
          },
          {
            "name": "cache",
            "docs": [
              "the cache account"
            ],
            "type": "publicKey"
          },
          {
            "name": "quotePool",
            "docs": [
              "the quote pool"
            ],
            "type": "publicKey"
          },
          {
            "name": "padding2",
            "type": {
              "array": [
                "u64",
                8
              ]
            }
          },
          {
            "name": "padding3",
            "type": {
              "array": [
                "u64",
                2
              ]
            }
          },
          {
            "name": "baseVolume",
            "docs": [
              "the market's total historical volume in base token"
            ],
            "type": "u64"
          },
          {
            "name": "quoteVolume",
            "docs": [
              "the market's total historical volume in quote token"
            ],
            "type": "u64"
          },
          {
            "name": "liquidityMiningInfo",
            "docs": [
              "the current liquidity mining parameters"
            ],
            "type": {
              "defined": "LiquidityMiningInfo"
            }
          },
          {
            "name": "minBaseOrderSize",
            "docs": [
              "the market's minimum allowed order size in base token amount"
            ],
            "type": "u64"
          },
          {
            "name": "tickSize",
            "docs": [
              "the tick size of the market"
            ],
            "type": "u64"
          },
          {
            "name": "baseMultiplier",
            "docs": [
              "the base currency multiplier"
            ],
            "type": "u64"
          },
          {
            "name": "quoteMultiplier",
            "docs": [
              "the quote currency multiplier"
            ],
            "type": "u64"
          },
          {
            "name": "protocolFees",
            "docs": [
              "the currently accumulated trading fees"
            ],
            "type": "u64"
          },
          {
            "name": "insuranceFund",
            "docs": [
              "the curently accumulated insurance fund for this market"
            ],
            "type": "u64"
          },
          {
            "name": "maxBaseOrderSize",
            "docs": [
              "the maximum order base size for non-postOnly orders"
            ],
            "type": "u64"
          },
          {
            "name": "maxQuoteOrderSize",
            "docs": [
              "the maximum order quote size for non-postOnly orders"
            ],
            "type": "u64"
          },
          {
            "name": "padding4",
            "type": {
              "array": [
                "u64",
                8
              ]
            }
          }
        ]
      }
    },
    {
      "name": "OpenOrder",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "side",
            "docs": [
              "the side of the order"
            ],
            "type": {
              "defined": "Side"
            }
          },
          {
            "name": "subAccountIdx",
            "docs": [
              "the sub account idx"
            ],
            "type": "u8"
          },
          {
            "name": "orderType",
            "docs": [
              "the type of the order"
            ],
            "type": {
              "defined": "DerivativeOrderType"
            }
          },
          {
            "name": "padding",
            "type": {
              "array": [
                "u8",
                5
              ]
            }
          },
          {
            "name": "timestamp",
            "docs": [
              "the timestamp that the order was posted"
            ],
            "type": "u64"
          },
          {
            "name": "clientOrderId",
            "docs": [
              "the client's order id"
            ],
            "type": "u64"
          },
          {
            "name": "orderId",
            "docs": [
              "the order id after being posted on the book"
            ],
            "type": "u128"
          }
        ]
      }
    },
    {
      "name": "NodeInfo",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "poolNode",
            "docs": [
              "the node's pubkey"
            ],
            "type": "publicKey"
          },
          {
            "name": "nodeVault",
            "docs": [
              "the node's vault pubkey"
            ],
            "type": "publicKey"
          },
          {
            "name": "deposits",
            "docs": [
              "the deposits in the node"
            ],
            "type": "i128"
          },
          {
            "name": "borrows",
            "docs": [
              "the borrows in the node"
            ],
            "type": "i128"
          },
          {
            "name": "padding",
            "type": {
              "array": [
                "u64",
                4
              ]
            }
          }
        ]
      }
    },
    {
      "name": "PoolConfig",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "optimalUtil",
            "docs": [
              "optimal utilization ratio for this token"
            ],
            "type": "u16"
          },
          {
            "name": "optimalApr",
            "docs": [
              "optimal apr for this token"
            ],
            "type": "u16"
          },
          {
            "name": "maxApr",
            "docs": [
              "maximum apr for this token"
            ],
            "type": "u16"
          },
          {
            "name": "cacheIndex",
            "docs": [
              "the index of this pool in the cache"
            ],
            "type": "u16"
          },
          {
            "name": "decimals",
            "docs": [
              "the decimals of the spl token mint associated with the pool"
            ],
            "type": "u8"
          },
          {
            "name": "initAssetWeight",
            "docs": [
              "the init asset weight of the pool's positions for margin calculations"
            ],
            "type": "u8"
          },
          {
            "name": "initLiabWeight",
            "docs": [
              "the init liability weight of the pool's positions for margin calculations"
            ],
            "type": "u8"
          },
          {
            "name": "maintAssetWeight",
            "docs": [
              "the maint asset weight of the pool's positions for margin calculations"
            ],
            "type": "u8"
          },
          {
            "name": "maintLiabWeight",
            "docs": [
              "the maint liability weight of the pool's positions for margin calculations"
            ],
            "type": "u8"
          },
          {
            "name": "padding2",
            "type": {
              "array": [
                "u8",
                3
              ]
            }
          },
          {
            "name": "padding3",
            "type": {
              "array": [
                "u64",
                2
              ]
            }
          }
        ]
      }
    },
    {
      "name": "PriceHistoryConfig",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "longerTimeHorizon",
            "type": "u64"
          },
          {
            "name": "shorterTimeHorizon",
            "type": "u64"
          },
          {
            "name": "priceCollectionTick",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "PriceWithTs",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "price",
            "type": "i128"
          },
          {
            "name": "timestamp",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "SubAccountCache",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "assetsValue",
            "docs": [
              "the value of the assets of this account"
            ],
            "type": "i128"
          },
          {
            "name": "liabilitiesValue",
            "docs": [
              "the value of the liabilities of this account"
            ],
            "type": "i128"
          },
          {
            "name": "cRatio",
            "docs": [
              "the margin c-ratio of this sub account"
            ],
            "type": "i128"
          },
          {
            "name": "updatedAt",
            "docs": [
              "slot of the last cache update"
            ],
            "type": "u64"
          },
          {
            "name": "margining",
            "docs": [
              "the sub account margining"
            ],
            "type": {
              "defined": "SubAccountMargining"
            }
          },
          {
            "name": "padding",
            "type": {
              "array": [
                "u8",
                7
              ]
            }
          },
          {
            "name": "subAccount",
            "docs": [
              "the sub account"
            ],
            "type": "publicKey"
          },
          {
            "name": "padding2",
            "type": {
              "array": [
                "u64",
                4
              ]
            }
          }
        ]
      }
    },
    {
      "name": "PositionSlot",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "spot",
            "docs": [
              "the spot position"
            ],
            "type": {
              "defined": "SpotPosition"
            }
          },
          {
            "name": "derivative",
            "docs": [
              "the derivative position"
            ],
            "type": {
              "defined": "DerivativePosition"
            }
          }
        ]
      }
    },
    {
      "name": "SpotPosition",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "tokenMint",
            "docs": [
              "the token mint that this position pertains to"
            ],
            "type": "publicKey"
          },
          {
            "name": "position",
            "docs": [
              "the position denominated in the base token",
              "if this value is negative then the outstanding position is a short, otherwise it's a long"
            ],
            "type": "i128"
          },
          {
            "name": "openOrdersCache",
            "docs": [
              "the open orders cache"
            ],
            "type": {
              "defined": "OpenOrdersCache"
            }
          },
          {
            "name": "cacheIndex",
            "docs": [
              "the index of this position in the cache"
            ],
            "type": "u16"
          },
          {
            "name": "padding",
            "type": {
              "array": [
                "u8",
                6
              ]
            }
          }
        ]
      }
    },
    {
      "name": "DerivativePosition",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "market",
            "docs": [
              "the public key of the market that this position pertains to"
            ],
            "type": "publicKey"
          },
          {
            "name": "basePosition",
            "docs": [
              "the position denominated in the base token",
              "if this value is negative then the outstanding position is a short, otherwise it's a long"
            ],
            "type": "i128"
          },
          {
            "name": "openOrdersCache",
            "docs": [
              "the open orders cache"
            ],
            "type": {
              "defined": "OpenOrdersCache"
            }
          },
          {
            "name": "longFundingSettled",
            "docs": [
              "the long funding that has been settled for this position"
            ],
            "type": "i128"
          },
          {
            "name": "shortFundingSettled",
            "docs": [
              "the short funding that has been settled for this position"
            ],
            "type": "i128"
          },
          {
            "name": "cacheIndex",
            "docs": [
              "the index of this position in the cache"
            ],
            "type": "u16"
          },
          {
            "name": "marketType",
            "docs": [
              "the type of market of this position",
              "",
              "this is necessary in order to fetch the appropriate weights"
            ],
            "type": {
              "defined": "MarketType"
            }
          },
          {
            "name": "padding",
            "type": {
              "array": [
                "u8",
                5
              ]
            }
          }
        ]
      }
    },
    {
      "name": "OpenOrdersCache",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "coinTotal",
            "docs": [
              "total amount of native base tokens in the open orders account, includes locked and free tokens"
            ],
            "type": "u64"
          },
          {
            "name": "coinFree",
            "docs": [
              "amount of free native base tokens in the open orders account"
            ],
            "type": "u64"
          },
          {
            "name": "pcTotal",
            "docs": [
              "total amount of native quote tokens in the open orders account, includes locked and free tokens"
            ],
            "type": "u64"
          },
          {
            "name": "pcFree",
            "docs": [
              "amount of free native quote tokens in the open orders account"
            ],
            "type": "u64"
          },
          {
            "name": "referrerRebatesAccrued",
            "docs": [
              "the amount of referrer rebates accrued, in native quote token"
            ],
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "OrderType",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Limit"
          },
          {
            "name": "ImmediateOrCancel"
          },
          {
            "name": "PostOnly"
          }
        ]
      }
    },
    {
      "name": "DerivativeOrderType",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Limit"
          },
          {
            "name": "ImmediateOrCancel"
          },
          {
            "name": "FillOrKill"
          },
          {
            "name": "PostOnly"
          }
        ]
      }
    },
    {
      "name": "Side",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Bid"
          },
          {
            "name": "Ask"
          }
        ]
      }
    },
    {
      "name": "SelfTradeBehavior",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "DecrementTake"
          },
          {
            "name": "AbortTransaction"
          },
          {
            "name": "CancelProvide"
          }
        ]
      }
    },
    {
      "name": "AccountAction",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Create"
          },
          {
            "name": "Close"
          },
          {
            "name": "SetDelegate"
          }
        ]
      }
    },
    {
      "name": "SubAccountAction",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Create"
          },
          {
            "name": "Close"
          },
          {
            "name": "ChangeMarginingType"
          }
        ]
      }
    },
    {
      "name": "ClearingAction",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Create"
          },
          {
            "name": "Close"
          },
          {
            "name": "SweepFee"
          }
        ]
      }
    },
    {
      "name": "MarketAction",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Create"
          },
          {
            "name": "Close"
          },
          {
            "name": "StatusChange"
          }
        ]
      }
    },
    {
      "name": "PoolAction",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Create"
          },
          {
            "name": "AddNode"
          },
          {
            "name": "RemoveNode"
          },
          {
            "name": "StatusChange"
          },
          {
            "name": "Close"
          }
        ]
      }
    },
    {
      "name": "OrdersAccountAction",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Create"
          },
          {
            "name": "Close"
          }
        ]
      }
    },
    {
      "name": "ClearingType",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Public"
          },
          {
            "name": "Private"
          }
        ]
      }
    },
    {
      "name": "WhitelistStatus",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Pending"
          },
          {
            "name": "Active"
          },
          {
            "name": "Revoked"
          }
        ]
      }
    },
    {
      "name": "MarketType",
      "docs": [
        "market types"
      ],
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Default"
          },
          {
            "name": "PairFuture"
          },
          {
            "name": "PerpetualFuture"
          },
          {
            "name": "PreIDO"
          },
          {
            "name": "IndexFuture"
          }
        ]
      }
    },
    {
      "name": "SettlementType",
      "docs": [
        "settlement types for futures markets"
      ],
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "CashSettled"
          },
          {
            "name": "PhysicalDelivery"
          }
        ]
      }
    },
    {
      "name": "ProductsType",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Stub"
          },
          {
            "name": "Pyth"
          },
          {
            "name": "Switchboard"
          }
        ]
      }
    },
    {
      "name": "MarginCollateralRatioType",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Initialization"
          },
          {
            "name": "Maintenance"
          }
        ]
      }
    },
    {
      "name": "SubAccountMargining",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Cross"
          },
          {
            "name": "Isolated"
          }
        ]
      }
    },
    {
      "name": "AccountType",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Regular"
          },
          {
            "name": "Whitelisted"
          }
        ]
      }
    },
    {
      "name": "OperatingStatus",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Active"
          },
          {
            "name": "ReduceOnly"
          },
          {
            "name": "CancelOnly"
          },
          {
            "name": "Halted"
          }
        ]
      }
    }
  ],
  "events": [
    {
      "name": "AccountActionLog",
      "fields": [
        {
          "name": "account",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "authority",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "delegate",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "action",
          "type": {
            "defined": "AccountAction"
          },
          "index": false
        }
      ]
    },
    {
      "name": "SubAccountActionLog",
      "fields": [
        {
          "name": "masterAccount",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "subAccount",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "authority",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "delegate",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "marginingType",
          "type": {
            "defined": "SubAccountMargining"
          },
          "index": false
        },
        {
          "name": "action",
          "type": {
            "defined": "SubAccountAction"
          },
          "index": false
        }
      ]
    },
    {
      "name": "ClearingActionLog",
      "fields": [
        {
          "name": "clearing",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "authority",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "feeMint",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "action",
          "type": {
            "defined": "ClearingAction"
          },
          "index": false
        }
      ]
    },
    {
      "name": "MarketActionLog",
      "fields": [
        {
          "name": "name",
          "type": "bytes",
          "index": false
        },
        {
          "name": "market",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "orderbook",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "bids",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "asks",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "quotePool",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "marketType",
          "type": {
            "defined": "MarketType"
          },
          "index": false
        },
        {
          "name": "settlementType",
          "type": {
            "defined": "SettlementType"
          },
          "index": false
        },
        {
          "name": "tokenSupply",
          "type": "u64",
          "index": false
        },
        {
          "name": "activatesAt",
          "type": "u64",
          "index": false
        },
        {
          "name": "expiresAt",
          "type": "u64",
          "index": false
        },
        {
          "name": "minBaseOrderSize",
          "type": "u64",
          "index": false
        },
        {
          "name": "tickSize",
          "type": "u64",
          "index": false
        },
        {
          "name": "decimals",
          "type": "u8",
          "index": false
        },
        {
          "name": "action",
          "type": {
            "defined": "MarketAction"
          },
          "index": false
        }
      ]
    },
    {
      "name": "PoolActionLog",
      "fields": [
        {
          "name": "name",
          "type": "bytes",
          "index": false
        },
        {
          "name": "pool",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "poolNode",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "tokenMint",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "tokenVault",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "oracleProducts",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "dexMarket",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "optimalUtil",
          "type": "u16",
          "index": false
        },
        {
          "name": "optimalApr",
          "type": "u16",
          "index": false
        },
        {
          "name": "maxApr",
          "type": "u16",
          "index": false
        },
        {
          "name": "decimals",
          "type": "u8",
          "index": false
        },
        {
          "name": "action",
          "type": {
            "defined": "PoolAction"
          },
          "index": false
        }
      ]
    },
    {
      "name": "WhitelistCreationLog",
      "fields": [
        {
          "name": "clearing",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "whitelist",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "whitelisted",
          "type": "publicKey",
          "index": false
        }
      ]
    },
    {
      "name": "OrdersAccountActionLog",
      "fields": [
        {
          "name": "openOrders",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "account",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "authority",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "action",
          "type": {
            "defined": "OrdersAccountAction"
          },
          "index": false
        }
      ]
    },
    {
      "name": "SettlePositionLog",
      "fields": [
        {
          "name": "masterAccount",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "subAccount",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "market",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "basePosition",
          "type": "i128",
          "index": false
        },
        {
          "name": "settlementPrice",
          "type": "i128",
          "index": false
        }
      ]
    },
    {
      "name": "LiquidatePositionLog",
      "fields": [
        {
          "name": "liqeeMasterAccount",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "liqeeSubAccount",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "liqorMasterAccount",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "liqorSubAccount",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "asset",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "liability",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "assetPrice",
          "type": "i128",
          "index": false
        },
        {
          "name": "liabilityPrice",
          "type": "i128",
          "index": false
        },
        {
          "name": "preAssetPosition",
          "type": "i128",
          "index": false
        },
        {
          "name": "preLiabPosition",
          "type": "i128",
          "index": false
        },
        {
          "name": "postAssetPosition",
          "type": "i128",
          "index": false
        },
        {
          "name": "postLiabPosition",
          "type": "i128",
          "index": false
        }
      ]
    },
    {
      "name": "DepositOrWithdrawLog",
      "fields": [
        {
          "name": "masterAccount",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "subAccount",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "pool",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "poolNode",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "tokenMint",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "tokenVault",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "amount",
          "type": "u64",
          "index": false
        },
        {
          "name": "isDeposit",
          "type": "bool",
          "index": false
        }
      ]
    },
    {
      "name": "OrderFillLog",
      "fields": [
        {
          "name": "market",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "maker",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "taker",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "subAccountIdx",
          "type": "u8",
          "index": false
        },
        {
          "name": "coinQty",
          "type": "u64",
          "index": false
        },
        {
          "name": "pcQty",
          "type": "u64",
          "index": false
        },
        {
          "name": "side",
          "type": {
            "defined": "Side"
          },
          "index": false
        }
      ]
    },
    {
      "name": "FundingPaymentLog",
      "fields": [
        {
          "name": "market",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "account",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "subAccount",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "amount",
          "type": "i128",
          "index": false
        }
      ]
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "InvalidSigner",
      "msg": "invalid signer provided"
    },
    {
      "code": 6001,
      "name": "InvalidAuthority",
      "msg": "the provided authority is invalid"
    },
    {
      "code": 6002,
      "name": "InvalidFuturesOrdersAccountAuthority",
      "msg": "the provided futures orders account authority does not match"
    },
    {
      "code": 6003,
      "name": "InvalidArgument",
      "msg": "invalid argument provided"
    },
    {
      "code": 6004,
      "name": "InvalidOracle",
      "msg": "invalid oracle account provided"
    },
    {
      "code": 6005,
      "name": "InvalidOracleProducts",
      "msg": "invalid oracle products account provided"
    },
    {
      "code": 6006,
      "name": "InvalidDepositAmountForDelivery",
      "msg": "given deposit amount does not equal desired derivative token supply"
    },
    {
      "code": 6007,
      "name": "InvalidDexMarketForQuotePool",
      "msg": "the provided dex market is not valid for the quote pool"
    },
    {
      "code": 6008,
      "name": "InvalidBaseMintForDexMarket",
      "msg": "the provided dex market does not have a valid base mint"
    },
    {
      "code": 6009,
      "name": "InvalidQuoteMintForDexMarket",
      "msg": "the provivded dex market does not have a valid quote mint"
    },
    {
      "code": 6010,
      "name": "InvalidEventQueueForMarket",
      "msg": "the provided event queue account does not belong to the given market"
    },
    {
      "code": 6011,
      "name": "InvalidOrderBookForMarket",
      "msg": "the provided order book account does not belong to the given market"
    },
    {
      "code": 6012,
      "name": "InvalidSlabAccount",
      "msg": "the provided slab account is invalid"
    },
    {
      "code": 6013,
      "name": "InvalidOrderIndex",
      "msg": "the provided order index is not valid"
    },
    {
      "code": 6014,
      "name": "InvalidFeeTier",
      "msg": "the provided fee tier is not valid"
    },
    {
      "code": 6015,
      "name": "InvalidFeeDiscountAccountMint",
      "msg": "the provided discount token account does not have a valid mint"
    },
    {
      "code": 6016,
      "name": "InvalidFeeDiscountAccountOwner",
      "msg": "the provided discount token account does not have a valid owner"
    },
    {
      "code": 6017,
      "name": "InvalidMarketType",
      "msg": "the provided market has an invalid market type"
    },
    {
      "code": 6018,
      "name": "InvalidSettlementType",
      "msg": "the provided market has an invalid settlement type"
    },
    {
      "code": 6019,
      "name": "InvalidClearing",
      "msg": "the provided clearing account is not valid for the given user"
    },
    {
      "code": 6020,
      "name": "InvalidMasterAccount",
      "msg": "the provided master account is not valid for the given sub account"
    },
    {
      "code": 6021,
      "name": "InvalidOrdersAccount",
      "msg": "the provided orders account is not valid for the given market"
    },
    {
      "code": 6022,
      "name": "InvalidPriceHistory",
      "msg": "the provided price history account is not valid for the given market"
    },
    {
      "code": 6023,
      "name": "InvalidAssetMint",
      "msg": "the provided asset mint is not valid for the given market"
    },
    {
      "code": 6024,
      "name": "InvalidMarketForLiquidation",
      "msg": "the provided market is not valid for liquidation"
    },
    {
      "code": 6025,
      "name": "InvalidQuotePool",
      "msg": "the provided quote pool does not have the correct token mint"
    },
    {
      "code": 6026,
      "name": "InvalidLiquidation",
      "msg": "tried to liquidate a healthy account"
    },
    {
      "code": 6027,
      "name": "InvalidCacheAccount",
      "msg": "the provided cache account is invalid"
    },
    {
      "code": 6028,
      "name": "InvalidPool",
      "msg": "the provided pool is not valig for the given mint"
    },
    {
      "code": 6029,
      "name": "InvalidPoolNode",
      "msg": "the provided pool node is not valid for the given mint"
    },
    {
      "code": 6030,
      "name": "InvalidPoolNodeVault",
      "msg": "the provided pool node vault is not valid"
    },
    {
      "code": 6031,
      "name": "InvalidVaultSigner",
      "msg": "the provided vault signer is invalid"
    },
    {
      "code": 6032,
      "name": "OrderNotFound",
      "msg": "the provided order id could not be found"
    },
    {
      "code": 6033,
      "name": "InvalidOrderSide",
      "msg": "the provided order side is invalid"
    },
    {
      "code": 6034,
      "name": "OracleProductsCacheNotFound",
      "msg": "the cache corresponding to the given oracle products wasn't found"
    },
    {
      "code": 6035,
      "name": "CacheAccountFull",
      "msg": "the cache account is full"
    },
    {
      "code": 6036,
      "name": "PoolAccountFull",
      "msg": "the pool account is full"
    },
    {
      "code": 6037,
      "name": "PoolNodeNotFound",
      "msg": "pool node not found"
    },
    {
      "code": 6038,
      "name": "CacheAccountWithOracleProducts",
      "msg": "the cache account has initialized oracle products"
    },
    {
      "code": 6039,
      "name": "OracleProductsWithTokenMint",
      "msg": "the oracle products account has an initialized token mint"
    },
    {
      "code": 6040,
      "name": "OracleProductsWithFuturesMarket",
      "msg": "the oracle products account has an initialized futuresmarket"
    },
    {
      "code": 6041,
      "name": "OracleProductsWithPerpetualMarket",
      "msg": "the oracle products account has an initialized perp market"
    },
    {
      "code": 6042,
      "name": "OrdersAccountFull",
      "msg": "the orders account is full"
    },
    {
      "code": 6043,
      "name": "OrdersAccountMustBeEmpty",
      "msg": "attempted to close an orders account with remaining orders"
    },
    {
      "code": 6044,
      "name": "PoolDexMarketAlreadyInitialized",
      "msg": "the provided pool already has an initialized dex market"
    },
    {
      "code": 6045,
      "name": "OracleProductsAlreadyInitialized",
      "msg": "the given oracle products account has already been initialized"
    },
    {
      "code": 6046,
      "name": "StaleAccountCache",
      "msg": "the given account has stale cached positions"
    },
    {
      "code": 6047,
      "name": "StaleOracleCache",
      "msg": "the given oracle products account has a stale cache"
    },
    {
      "code": 6048,
      "name": "PrivateClearing",
      "msg": "attempted to create account in a private clearing"
    },
    {
      "code": 6049,
      "name": "PublicClearing",
      "msg": "attempted to create whitelisted account in a public clearing"
    },
    {
      "code": 6050,
      "name": "MarketInactive",
      "msg": "provided market is inactive"
    },
    {
      "code": 6051,
      "name": "MarketAlreadyActive",
      "msg": "provided market is already active"
    },
    {
      "code": 6052,
      "name": "MarketWithOpenInterestCannotBeclosed",
      "msg": "perpetual market with exisitng open interest cannot be closed"
    },
    {
      "code": 6053,
      "name": "ActiveMarketCannotSettlePosition",
      "msg": "active market cannot settle position"
    },
    {
      "code": 6054,
      "name": "ActiveMarketCannotSweepFees",
      "msg": "active market cannot sweep fees"
    },
    {
      "code": 6055,
      "name": "ActiveMarketCannotClaimIdoProceeds",
      "msg": "active market cannot claim IDO proceeds"
    },
    {
      "code": 6056,
      "name": "ActiveMarketCannotBeClosed",
      "msg": "active market cannot be closed"
    },
    {
      "code": 6057,
      "name": "ActivePoolCannotBeClosed",
      "msg": "active pool cannot be closed"
    },
    {
      "code": 6058,
      "name": "MarketNotForPhysicalDelivery",
      "msg": "provided market was not created for physical delivery"
    },
    {
      "code": 6059,
      "name": "SubAccountAliasTooLong",
      "msg": "the provided sub account alias is too long"
    },
    {
      "code": 6060,
      "name": "UnableToFindPosition",
      "msg": "unable to find position"
    },
    {
      "code": 6061,
      "name": "UnableToFindOrderByOrderId",
      "msg": "unable to find order with given order id"
    },
    {
      "code": 6062,
      "name": "UnableToFindOrderByClientId",
      "msg": "unable to find order with given client order id"
    },
    {
      "code": 6063,
      "name": "UnableToPostOrder",
      "msg": "unable to post order"
    },
    {
      "code": 6064,
      "name": "SpotOpenOrdersHasUnsettledFunds",
      "msg": "the provided spot open orders account has unsettled funds"
    },
    {
      "code": 6065,
      "name": "RemainingAccountNotWritable",
      "msg": "specified sub account is not writable"
    },
    {
      "code": 6066,
      "name": "RemainingAccountWithInvalidOwner",
      "msg": "specified sub account is not writable"
    },
    {
      "code": 6067,
      "name": "RemainingAccountWithInvalidAuthority",
      "msg": "specified sub account is not owned by the same authority"
    },
    {
      "code": 6068,
      "name": "RemainingAccountWithInvalidMasterAccount",
      "msg": "specified sub account does not belong to the specified master account"
    },
    {
      "code": 6069,
      "name": "RemainingUserAccountMissing",
      "msg": "remaining user account missing"
    },
    {
      "code": 6070,
      "name": "RemainingAccountsMissing",
      "msg": "there are remaining accounts missing from the instruction"
    },
    {
      "code": 6071,
      "name": "SubAccountCRatioBelowOptimal",
      "msg": "sub account c-ratio is below optimal"
    },
    {
      "code": 6072,
      "name": "MasterAccountCRatioBelowOptimal",
      "msg": "master account c-ratio is below optimal"
    },
    {
      "code": 6073,
      "name": "TotalBorrowsGreaterThanDeposits",
      "msg": "pool total borrows amount are greater than total deposits"
    },
    {
      "code": 6074,
      "name": "MarketTotalBorrowsGreaterThanTokenSupply",
      "msg": "market total borrows amount are greater than total token supply"
    },
    {
      "code": 6075,
      "name": "OrderAmountExceedsVaultBalance",
      "msg": "attempted to submit an order with greater amount than is available in the vault"
    },
    {
      "code": 6076,
      "name": "TransactionAborted",
      "msg": "the transaction has been aborted due to predetermined functionality"
    },
    {
      "code": 6077,
      "name": "AccountWithSubAccounts",
      "msg": "the provided account has initialized sub accounts"
    },
    {
      "code": 6078,
      "name": "SubAccountWithPositions",
      "msg": "the provided sub account has existing position"
    },
    {
      "code": 6079,
      "name": "BaseSizeExceedsMarketLimit",
      "msg": "the order's base size exceeds the market's limit for non-postOnly orders"
    },
    {
      "code": 6080,
      "name": "QuoteSizeExceedsMarketLimit",
      "msg": "the order's quote size exceeds the market's limit for non-postOnly orders"
    },
    {
      "code": 6081,
      "name": "StaleOracleFeed",
      "msg": "the given oracle feed account is stale"
    },
    {
      "code": 6082,
      "name": "PythPriceStatusNotTrading",
      "msg": "the given pyth price feed is not trading"
    },
    {
      "code": 6083,
      "name": "ConfidenceIntervalExceeded",
      "msg": "the confidence interval for the oracle price feed has been exceeded"
    },
    {
      "code": 6084,
      "name": "ReduceOnlyMode",
      "msg": "the given instrument is in reduce only mode"
    },
    {
      "code": 6085,
      "name": "CancelOnlyMode",
      "msg": "the given instrument is in cancel only mode"
    },
    {
      "code": 6086,
      "name": "HaltedMode",
      "msg": "the given instrument has been halted"
    },
    {
      "code": 6087,
      "name": "Default",
      "msg": "Default"
    }
  ]
};
