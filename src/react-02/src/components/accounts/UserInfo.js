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
      deposit: " ",
      withdraw: " ",
      total: " ",
      highestBalance: " ",
      lowestBalance: " "
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
  back = () => {
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
        return <UserBalance />;
      case 3:
        return <AccInfo />;
    }
  }
}

export default UserInfo;
