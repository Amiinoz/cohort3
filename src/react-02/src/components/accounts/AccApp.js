import React, { Component } from "react";
import "./accAppStyle.css";
import AccCards from "./AccCards";
import { AccountController } from "./account.js";
// initialize state
class AccApp extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      currentBalance: "",
      totalbalance: " ",
      highestBalance: " ",
      lowestBalance: " "
    };
    // call the account controller from pojo
    this.accAccountController = new AccountController();
  }
  // get input values from name and starting balance
  onHandleInputChange = e => {
    // console.log(e.target.name, e.target.value);
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  // create account and set state for name and current balance
  // onHandleCreateAcc = event => {
  //   event.preventDefault();
  onHandleCreateAcc = event => {
    event.preventDefault();
    this.accAccountController.createAccount(
      this.state.name,
      this.state.currentBalance
    );
    this.accCalculate();

    // console.log(this.accAccountController.accountArray);
    this.setState({
      name: "",
      currentBalance: ""
    });
  };
  // call the delete function from pojo and set state
  onHandleDelete = name => {
    this.accAccountController.removeAccount(name);
    this.accCalculate();
    this.setState({
      name: ""
    });
    // console log to see in action
    // console.log(this.accAccountController.highestBalance());
    // console.log(this.accAccountController.accountArray);
  };
  // create calculate function for total highest and lowest balances

  accCalculate = () => {
    this.setState({
      totalbalance: this.accAccountController.totalAccounts(),
      highestBalance: this.accAccountController.mostValuableAccount()
        .currentBalance,
      lowestBalance: this.accAccountController.leastValuableAccount()
        .currentBalance
    });
    // console.log(this.totalbalance);
  };
  // create render function and get account array from pojo and map it
  renderAccCards = () => {
    return this.accAccountController.accountArray.map(allAcc => {
      // debugger;
      // console.log("allAcc: ", allAcc);
      return (
        <AccCards
          key={allAcc.name}
          account={allAcc}
          calculate={this.accCalculate}
          accDelete={this.onHandleDelete}
        />
      );
    });
  };
  // show and hide manage account info
  accDisplayInfo = () => {
    document.getElementById("show").style.visibility = "hidden";
  };
  // render inputs and
  render() {
    return (
      <div className='container'>
        <h1>Bank X </h1>
        <div className='left_side'>
          <form onSubmit={this.handleSubmit}>
            <h3>Create Bank Account</h3>
            <label>
              Account Name:
              <input
                className='input'
                id='idAccName'
                type='text'
                placeholder='Enter Name '
                name='name'
                value={this.state.name}
                onChange={this.onHandleInputChange}
              />
            </label>
            <label>
              Starting Balance $:
              <input
                className='input'
                id='idStarBal'
                type='number'
                placeholder='Enter amount to start'
                name='currentBalance'
                value={this.state.currentBalance}
                onChange={this.onHandleInputChange}
              />
            </label>
            <button
              className='accCreate btn btn-1'
              onClick={this.onHandleCreateAcc}
            >
              Create Account
            </button>
            <h2>Manage Account</h2>
            {this.renderAccCards()}

            <br />
          </form>
        </div>
        <div className='right_side'>
          <h3>Accounts Balances</h3>
          <h4 className='show'>Highest Account: {this.state.highestBalance}</h4>
          <h4 className='show'>Lowest Account: {this.state.lowestBalance}</h4>
          <h4 className='show'>Total Balance: {this.state.totalbalance}</h4>
        </div>
      </div>
    );
  }
}

export default AccApp;
