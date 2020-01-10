import React, { Component } from "react";
import AccInfo from "./AccInfo";
import UserBalance from "./UserBalance";
import CreateAcc from "./CreateAcc";

class UserInfo extends Component {
  constructor() {
    super();
    this.state = {
      step: 1,
      firstName: " ",
      lastName: " ",
      accountType: " ",
      startBalance: " ",
      addAccount: " ",
      balance: " ",
      highestBalance: " ",
      lowestBalance: " ",
      constructor: " ",
      deposit: " ",
      withdraw: " ",
      addAct: " ",
      removeAct: " ",
      totalBal: " ",
      amount: " "
    };
  }
  // Proceed to the next step

  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };
  // Move back one step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  onHandeleChange = input => e => {
    this.setState({
      [input]: e.target.value
    });
  };
  //FIXME:
  //   onHandleSubmit = e => {
  //    this.accounts.deposit(
  //        this.state.firstName,
  //        this.state
  //    )

  render() {
    const { step } = this.state;
    const {
      firstName,
      lastName,
      accountType,
      startBalance,
      addAccount,
      deposit,
      withdraw,
      total,
      highestBalance,
      lowestB
    } = this.state;
    const values = {
      firstName,
      lastName,
      accountType,
      startBalance,
      addAccount,
      deposit,
      withdraw,
      total,
      highestBalance,
      lowestB
    };

    switch (step) {
      case 1:
        return (
          <CreateAcc
            nextStep={this.nextStep}
            onHandeleChange={this.onHandeleChange}
            values={values}
          />
        );
      case 2:
        return (
          <UserBalance
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            onHandeleChange={this.onHandeleChange}
            values={values}
          />
        );
      case 3:
        return (
          <AccInfo
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            onHandeleChange={this.onHandeleChange}
            values={values}
          />
        );
    }
  }
}

export default UserInfo;
