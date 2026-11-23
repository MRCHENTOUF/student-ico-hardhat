# Student ICO — Hardhat Project

A complete Initial Coin Offering (ICO) project built with Solidity, Hardhat, OpenZeppelin, TypeScript, Ethers.js, Mocha, Hardhat Ignition, GitHub Actions, and Ethereum Sepolia Testnet.

## Project Objective

The objective of this project is to create and test an ERC-20 cryptocurrency and simulate an Initial Coin Offering (ICO).

Investors can buy StudentCoin tokens using Sepolia ETH.

## Token Information

- Token Name: StudentCoin
- Symbol: STC
- Standard: ERC-20
- Maximum Supply: 1,000,000 STC
- ICO Allocation: 500,000 STC
- Token Price: 1 STC = 0.001 ETH
- Network: Ethereum Sepolia Testnet

## Smart Contracts

### StudentCoin.sol

`StudentCoin` is an ERC-20 token based on the OpenZeppelin ERC20 implementation.

The contract creates a maximum supply of:

```text
1,000,000 STC
```

The total supply is minted to the deployer during deployment.

### StudentICO.sol

`StudentICO` manages the token sale.

Main features:

- Stores the STC token address
- Defines the token price
- Allows investors to buy STC using ETH
- Tracks the total number of tokens sold
- Allows the owner to withdraw collected ETH

Main functions:

```solidity
buyTokens(uint256 amount)
withdraw()
```

## ICO Workflow

```text
Investor
   |
   | Sepolia ETH
   v
StudentICO
   |
   | STC
   v
Investor Wallet
```

Example:

```text
1 STC = 0.001 ETH

Investor sends 0.001 Sepolia ETH
        ↓
StudentICO
        ↓
Investor receives 1 STC
```

## Technologies

- Solidity
- Hardhat
- OpenZeppelin Contracts
- TypeScript
- Ethers.js
- Mocha
- Chai
- Hardhat Ignition
- Git
- GitHub
- GitHub Actions
- MetaMask
- Sepolia Testnet
- Etherscan

## Automated Testing

The project contains automated tests using Mocha, Chai, Ethers.js, and Hardhat.

The ICO test performs the following operations:

```text
Deploy StudentCoin
        ↓
Deploy StudentICO
        ↓
Transfer 500,000 STC to the ICO
        ↓
Investor buys 100 STC
        ↓
Verify investor STC balance
        ↓
Verify tokensSold
```

Run the tests with:

```bash
npx hardhat test
```

Current test result:

```text
6 passing
```

## Deployment

The project uses Hardhat Ignition to deploy the contracts.

Deployment module:

```text
ignition/modules/StudentICO.ts
```

Deploy to Sepolia:

```bash
npx hardhat ignition deploy ignition/modules/StudentICO.ts --network sepolia
```

## Sepolia Deployment

### StudentCoin

```text
0x838eb6D12Bc9bC086d72717511565a45FA77B5eF
```

### StudentICO

```text
0x19f03bE9B18D8Ee8bbC31Ff0f1DB08B805053cDb
```

The StudentICO contract received:

```text
500,000 STC
```

for the ICO sale.

## Real ICO Test

A second MetaMask account was used as an investor.

The investor sent:

```text
0.001 Sepolia ETH
```

to the ICO using:

```solidity
buyTokens(1)
```

The transaction was confirmed on Sepolia and the investor received:

```text
1 STC
```

The result was also verified directly inside MetaMask.

## Continuous Integration

GitHub Actions automatically runs the following pipeline on every push to the `main` branch:

```text
Push to GitHub
      ↓
Install dependencies
      ↓
Compile contracts
      ↓
Run automated tests
      ↓
Success / Failure
```

Workflow:

```text
.github/workflows/hardhat-ci.yml
```

## Continuous Deployment

A second GitHub Actions workflow allows manual deployment to Sepolia.

```text
Run workflow
      ↓
Install dependencies
      ↓
Compile contracts
      ↓
Run tests
      ↓
Hardhat Ignition
      ↓
Sepolia
```

Workflow:

```text
.github/workflows/deploy-sepolia.yml
```

Sensitive information such as the Sepolia RPC URL and wallet private key is stored using GitHub Actions Secrets.

## Architecture

```text
Developer
   |
   v
VS Code
   |
   v
Solidity Smart Contracts
   |
   v
Hardhat
   |
   +------> Mocha + Chai + Ethers.js
   |                 |
   |                 v
   |            Automated Tests
   |
   v
GitHub
   |
   v
GitHub Actions
   |
   +------> CI: Compile + Test
   |
   +------> CD: Hardhat Ignition
                    |
                    v
                  Sepolia
                    |
                    v
                  Etherscan
```

## Project Structure

```text
student-ico-hardhat/
│
├── contracts/
│   ├── StudentCoin.sol
│   └── StudentICO.sol
│
├── test/
│   └── StudentICO.ts
│
├── ignition/
│   └── modules/
│       └── StudentICO.ts
│
├── .github/
│   └── workflows/
│       ├── hardhat-ci.yml
│       └── deploy-sepolia.yml
│
├── hardhat.config.ts
├── package.json
└── README.md
```

## Author

Student ICO project developed as a blockchain and smart contract practical project using Ethereum Sepolia Testnet.