import { Component, OnInit } from '@angular/core';
import { ethers } from 'ethers';
import { ETEREUM_NETWORK_ID, ETHER_SCAN_BASE_URL } from 'src/common/constants/values';
import { sendFundsContract } from '../../../../contracts/json/SendFunds '

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  abi = sendFundsContract.abi;
  bytecode = sendFundsContract.bytecode;
  isEthereumReady?: boolean;
  isMetaMask?: boolean;
  isConnectedToMetaMask?: boolean;
  accounts?: any[];
  currentAccount?: string;
  currentNetwork?: string;
  provider?: ethers.providers.Web3Provider;
  signer?: ethers.providers.JsonRpcSigner;
  contractFactory?: ethers.ContractFactory;
  contract?: ethers.Contract;
  contractAddress?: string;
  deployNewInstanceAddress?: string;
  deployTransaction?: ethers.providers.TransactionResponse;
  greets: string[];
  greetingMessage?: string;
  setGreetingTransaction?: ethers.providers.TransactionResponse;
  setSendFoundsTransaction?: ethers.providers.TransactionResponse;

  constructor() {
    this.greets = [];
    this.deployNewInstanceAddress = "0x94725B3B1e8DCacE3C815D1a9556D929847658aD";
    this.appConnectToMetaMask();
  }

  ngOnInit(): void { }

  async appConnectToMetaMask(): Promise<void> {
    const ethereum = (window as any).ethereum
    console.log('ethereum', ethereum);
    this.isEthereumReady = typeof ethereum === undefined;
    if (this.isEthereumReady) {
      console.error('MetaMask is not installed!');
      return;
    }
    this.isMetaMask = ethereum.isMetaMask;
    if (!this.isMetaMask) {
      console.error('It is not MetaMask!');
      return;
    }
    try {
      // https://docs.metamask.io/guide/rpc-api.html#table-of-contents
      this.accounts = await ethereum.request({ method: 'eth_requestAccounts' });
      console.log('accounts', this.accounts);
    } catch (error) {
      console.error('Failed to get MetaMask Accounts!');
      console.error(error);
      return;
    }
    if (this.accounts === undefined || this.accounts.length === 0) {
      console.error('MetaMask does not have any accounts!');
      return;
    }
    try {
      this.currentAccount = (window as any).ethereum.selectedAddress;
      console.log('currentAccount', this.currentAccount);
    } catch (error) {
      console.error(error);
      console.error('Failed to select MetaMask 1st Account!');
      return;
    }
    this.currentNetwork = ETEREUM_NETWORK_ID[`${(window as any).ethereum.networkVersion}`] ;
    if (this.currentNetwork !== 'Rinkeby') {
      throw new Error('This netWork does not Rinkeby!')
    }
  }

  async appDeployGreeterContract(): Promise<void> {
    this.provider = new ethers.providers.Web3Provider((window as any).ethereum);
    this.signer = this.provider.getSigner();
    this.contractFactory = new ethers.ContractFactory(this.abi, this.bytecode, this.signer);
    this.contract = await this.contractFactory.deploy("Hello, world!");
    console.log('contract', this.contract);
    this.contractAddress = this.contract.address;
    console.log('contractAddress', this.contractAddress);
    this.deployTransaction = this.contract.deployTransaction;
    console.log('deployTransaction', this.deployTransaction);
    await this.contract.deployTransaction.wait(1);
    console.log('deployTransaction is 1 confirmed');
  }

  async appDeploySendFundsContract(): Promise<void> {
    this.provider = new ethers.providers.Web3Provider((window as any).ethereum);
    this.signer = this.provider.getSigner();
    this.contractFactory = new ethers.ContractFactory(this.abi, this.bytecode, this.signer);
    this.contract = await this.contractFactory.deploy();
    console.log('contract', this.contract);
    this.contractAddress = this.contractAddress;
    console.log('contractAddress', this.contractAddress);
    this.deployTransaction = this.contract.deployTransaction;
    console.log('deployTransaction', this.deployTransaction);
    await this.contract.deployTransaction.wait(1);
    console.log('deployTransaction is 1 confirmed');
  }

  async appCallSendFundsFunction(sendAmount: string, sendAddress?: string): Promise<void> {
    if(this.contract === undefined && this.contractAddress !== undefined && this.provider !== undefined) {
      this.contract = new ethers.Contract(this.contractAddress, this.abi, this.provider);
    }
    sendAddress = this.deployNewInstanceAddress!;
    const amount = Number(sendAmount);
    this.setSendFoundsTransaction = await this.contract?.['sendFunds'](amount, sendAddress);
    console.log('sendFundsTransaction', this.setSendFoundsTransaction);
    await this.setSendFoundsTransaction?.wait(1);
    console.log('sendFundsTransaction is 1 confirmed');
  }

  async appCallGreetFunction(): Promise<void> {
    if (this.contract === undefined && this.contractAddress !== undefined && this.provider !== undefined) {
      this.contract = new ethers.Contract(this.contractAddress, this.abi, this.provider);
    }
    this.greetingMessage = await this.contract?.['greet']();
    console.log('greetingMessage', this.greetingMessage);
    if (this.greetingMessage) {
      this.greets.push(this.greetingMessage);
    }
  }

  async appCallSetGreetingFunction(newGreetingMessage: string): Promise<void> {
    if (this.contract === undefined && this.contractAddress !== undefined && this.provider !== undefined) {
      this.contract = new ethers.Contract(this.contractAddress, this.abi, this.provider);
    }
    this.setGreetingTransaction = await this.contract?.['setGreeting'](newGreetingMessage);
    console.log('setGreetingTransaction', this.setGreetingTransaction);
    await this.setGreetingTransaction?.wait(1);
    console.log('setGreetingTransaction is 1 confirmed');
  }

  goToLink(path: string): void {
    window.open(`${ETHER_SCAN_BASE_URL + path}`, '_blank');
  }
}
