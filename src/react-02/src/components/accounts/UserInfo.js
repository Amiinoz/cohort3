import React, { Component } from "react";
// import AccInfo from "./AccInfo";
// import ManageAccount from "./ManageAccount";
// import CreateAcc from "./CreateAcc";
import CreateAcc from "./App";
import { ActControler } from "./accounts";

// here create controler

class UserInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      step: 1,
      accountId: 1,
      actName: " ",
      accountType: " ",
      deposit: " ",
      startBalance: " ",
      highestBalance: " ",
      lowestBalance: " ",
      totalBal: " "
    };
    // Controler
    this.accounts = new ActControler();
    this.onHandeleChange = this.onHandeleChange.bind(this);
    // this.onHandleSubmit = this.onHandleSubmit.bind(this);
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
            ActControler={this.accounts}
          />
        );
      // case 2:
      //   return (
      //     <ManageAccount
      //       nextStep={this.nextStep}
      //       prevStep={this.prevStep}
      //       onHandeleChange={this.onHandeleChange}
      //       ActControler={this.accounts}
      //       values={values}
      //     />
      //   );
      // case 3:
      //   return (
      //     <AccInfo
      //       nextStep={this.nextStep}
      //       prevStep={this.prevStep}
      //       onHandeleChange={this.onHandeleChange}
      //       ActControler={this.accounts}
      //       values={values}
      //     />
      //   );
      default:
      // "No default"
    }
  }
}

export default UserInfo;
