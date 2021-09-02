import React, { Component } from "react";
import { Helmet } from 'react-helmet'
import SimpleStorageContract from "./contracts/MangoSweet.json";
import getWeb3 from "./getWeb3";

import "./App.css";

const TITLE = 'MANGO SWEET'

class App extends Component {
  state = { storageValue: 0, web3: null, accounts: null, contract: null };

  componentDidMount = async () => {
    try {
      // Get network provider and web3 instance.
      const web3 = await getWeb3();

      // Use web3 to get the user's accounts.
      const accounts = await web3.eth.getAccounts();

      // Get the contract instance.
      const networkId = await web3.eth.net.getId();
      const deployedNetwork = SimpleStorageContract.networks[networkId];
      const instance = new web3.eth.Contract(
        SimpleStorageContract.abi,
        deployedNetwork && deployedNetwork.address,
      );
      
      const wallet = accounts[0].slice(0,7) + '...' + accounts[0].slice(accounts[0].length - 6, accounts[0].length - 1);
      // Set web3, accounts, and contract to the state, and then proceed with an
      // example of interacting with the contract's methods.
      this.setState({ web3, accounts, contract: instance, wallet }, this.runExample);
    } catch (error) {
      // Catch any errors for any of the above operations.
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`,
      );
      console.error(error);
    }
  };

  runExample = async () => {
    const { accounts, contract } = this.state;

    // Stores a given value, 5 by default.
    // await contract.methods.set(5).send({ from: accounts[0] });

    // Get the value from the contract to prove it worked.
    // const response = await contract.methods.get().call();

    // Update state with the result.
    // this.setState({ storageValue: response });
  };

  getWalletAddress = async () => {
    const accounts = this.state.accounts + '';
    let wallet = accounts.slice(0,7) + '' + accounts.slice(accounts.length - 5, accounts.length - 1);
    return wallet;
  }

  render() {
    if (!this.state.web3) {
      return <div>
        <Helmet>
          <title>{ TITLE }</title>
        </Helmet>
        Connecting...
        </div>;
    }
    return (
      <div>
        <Helmet>
          <title>{ TITLE }</title>
        </Helmet>
        <div class="wallet">
          <div class="address">Your wallet: {this.state.wallet}</div>

        </div>
        <div class="landing">
          <label class="label-header">We’re coming soon</label>
          <div class="mango">
            <img  src="images/mango.png" />
          </div>
          <label class="label-domain">MangoSweet.finance</label>
          <label class="label-description">Stay Connected</label>
          <div class="icon-social">
            <img class="icon" src="images/twitter.png" />
            <img class="icon" src="images/telegram.png" />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
