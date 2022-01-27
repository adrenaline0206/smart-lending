export const proxyFactoryContract = {
    "_format": "hh-sol-artifact-1",
    "contractName": "ProxyFactory",
    "sourceName": "contracts/ProxyFactory.sol",
    "abi": [
      {
        "inputs": [
          {
            "internalType": "address payable",
            "name": "addr",
            "type": "address"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "constructor"
      },
      {
        "inputs": [
          {
            "internalType": "bytes32",
            "name": "salt",
            "type": "bytes32"
          }
        ],
        "name": "deployNewInstance",
        "outputs": [
          {
            "internalType": "address",
            "name": "dst",
            "type": "address"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "mainAddress",
        "outputs": [
          {
            "internalType": "address payable",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      }
    ],
    "bytecode": "0x60a060405234801561001057600080fd5b506040516102513803806102518339818101604052602081101561003357600080fd5b50516001600160a01b038116610090576040805162461bcd60e51b815260206004820152601960248201527f30783020697320616e20696e76616c6964206164647265737300000000000000604482015290519081900360640190fd5b606081901b6001600160601b0319166080526001600160a01b031661018c6100c560003980607e528060c5525061018c6000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c80630cdd42341461003b578063d508e6231461005f575b600080fd5b61004361007c565b604080516001600160a01b039092168252519081900360200190f35b6100436004803603602081101561007557600080fd5b50356100a0565b7f000000000000000000000000000000000000000000000000000000000000000081565b600060606040518060800160405280604a815260200161010d604a91396020810180517f0000000000000000000000000000000000000000000000000000000000000000600881901b909117825291925084604a826000f59350508261010557600080fd5b505091905056fe604080600a3d393df3fe7300000000000000000000000000000000000000003d366025573d3d3d3d34865af16031565b363d3d373d3d363d855af45b3d82803e603c573d81fd5b3d81f3a2646970667358221220461a41af528ee3f9d62d7ce59d78ed1b49049d7b1ae8257c4de2469de42759bc64736f6c634300060b0033",
    "deployedBytecode": "0x608060405234801561001057600080fd5b50600436106100365760003560e01c80630cdd42341461003b578063d508e6231461005f575b600080fd5b61004361007c565b604080516001600160a01b039092168252519081900360200190f35b6100436004803603602081101561007557600080fd5b50356100a0565b7f000000000000000000000000000000000000000000000000000000000000000081565b600060606040518060800160405280604a815260200161010d604a91396020810180517f0000000000000000000000000000000000000000000000000000000000000000600881901b909117825291925084604a826000f59350508261010557600080fd5b505091905056fe604080600a3d393df3fe7300000000000000000000000000000000000000003d366025573d3d3d3d34865af16031565b363d3d373d3d363d855af45b3d82803e603c573d81fd5b3d81f3a2646970667358221220461a41af528ee3f9d62d7ce59d78ed1b49049d7b1ae8257c4de2469de42759bc64736f6c634300060b0033",
    "linkReferences": {},
    "deployedLinkReferences": {}
  }
  