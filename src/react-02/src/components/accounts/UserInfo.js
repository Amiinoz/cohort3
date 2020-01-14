import React, { Component } from "react";
import AccInfo from "./AccInfo";
import ManageAccount from "./ManageAccount";
import CreateAcc from "./CreateAcc";
import { ActControler } from "./accounts";

class UserInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1,
      actName: " ",
      accountType: " ",
      startBalance: " ",
      highestBalance: " ",
      lowestBalance: " ",
      totalBal: " "
    };
    // Controler
    //   this.accounts = new ActControler("My Bank Account");
    //   this.onHandeleChange = this.onHandeleChange.bind(this);
    //   this.onHandleSubmit = this.onHandleSubmit.bind(this);
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

  // onHandleSubmit = e => {
  //   let array = this.accounts.allAccounts;
  //   let accountNames = array.map(array => array.accountName);
  //   this.actName = array.map(array => array.actName);
  //   this.accountType.addAct(this.state.actName, this.state.totalBal);
  // };
  render() {
    const { step } = this.state;
    const { actName, accountType, startBalance } = this.state;
    const values = {
      actName,
      accountType,
      startBalance
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
          <ManageAccount
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
