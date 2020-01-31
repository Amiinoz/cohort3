import React from "react";

import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import { ActControler } from "./account.js";
import AccCards from "./AccCards";
import AccForms from "./AccForms";

// Creates Account

class AccApp extends React.Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  onHandeleChange = input => e => {
    this.setState({
      [input]: e.target.value
    });
  };
  handleSubmit = event => {
    event.preventDefault(event);
    this.props.onSubmit(this.state);
    this.setState({
      actName: "",
      accountType: " ",
      strBalance: ""
    });
    this.acctControler = new ActControler();
  };
  addAccount = inputs => {
    const { actName, strBalance } = inputs;
    let errorMessage;

    if (!actName) {
      errorMessage = "Please enter an account name.";
    } else {
      errorMessage = this.accounts.addAct(actName, strBalance);
    }

    this.setState({
      message: errorMessage
    });
    this.calCulateRep();
  };
  //delete accaount
  removeAct = actName => {
    this.acctControler.removeAct(actName);
    this.calCulateRep();
  };
  //FIXME:
  // calCulateRep
  calCulateRep = () => {
    this.setState({
      totalBalance: ""
    });

    if (this.acctControler.allAccounts.length > 1) {
      document.getElementById("idReport").classList.remove("hidden");

      const totalBalUpdate = this.acctControler.totalBal();
      const highsValUpdate = this.acctControler.highsVal().actName;
      const lowsValUpdate = this.acctControler.lowsVal().actName;

      this.setState({
        totalBal: totalBalUpdate,
        highsVal: highsValUpdate,
        lowsVal: lowsValUpdate
      });
      // } else {
      //   document.getElementById("idReport").classList.add("hidden");
      // }
    }
  };
  // createCards = () => {
  //   return this.acctControler.allAccounts.map(account => {
  //     return (
  //       <CreateCards
  //         key={this.accounts.actName}
  //         account={this.accounts}
  //         calcReport={this.calCulateRep}
  //         removeAccount={this.removeAct}
  //       />
  //     );
  //   });
  // };

  render() {
    const {
      values,
      onHandeleChange,
      actName,
      strBalance
      // accountType
    } = this.props;

  
    // const { step } = this.state;
    // const { actName, accountType, startBalance } = this.state;
    // const values = {
    //   actName,
    //   accountType,
    //   startBalance
    // };
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
      case 2:
        return (
          <ManageAccount
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            onHandeleChange={this.onHandeleChange}
            ActControler={this.accounts}
            values={values}
          />
        );
      case 3:
        return (
          <AccInfo
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            onHandeleChange={this.onHandeleChange}
            ActControler={this.accounts}
            values={values}
          />
        );
      default:
      // "No default"
    }
  }

  //   return (
  //     <MuiThemeProvider className='classAcc'>
  //       <React.Fragment>
  //         <AppBar title=' Create Account' />
  //         <TextField
  //           hintText='Please enter your Name'
  //           floatingLabelText='Name'
  //           onChange={onHandeleChange("actName")}
  //           value={values.actName}
  //           defaultValue={this.accounts.actName}
  //         />

  //         <br />
  //         <TextField
  //           hintText='Please enter Account type'
  //           floatingLabelText='Account Type'
  //           onChange={onHandeleChange("accountType")}
  //           defaultValue={this.acounts.accountType}
  //         />
  //         <br />
  //         <br />
  //         <TextField
  //           id='standard-number'
  //           label='Number'
  //           type='number'
  //           hintText='Please Enter starting balance'
  //           floatingLabelText='Starting balance'
  //           onChange={onHandeleChange("startBalance")}
  //           defaultValue={this.accounts.startBalance}
  //         />
  //         <br />
  //         <RaisedButton
  //           label='Enter'
  //           primary={true}
  //           style={styles.button}
  //           onClick={ActControler.addAct(actName, strBalance)}
  //           // onClick={this.addAccount}
  //         />
  //         <RaisedButton
  //           label='Next'
  //           primary={false}
  //           style={styles.button}
  //           onClick={this.continue}
  //         />
  //         <br />
  //       </React.Fragment>
  //     </MuiThemeProvider>
  //   );
  // }

// const styles = {
//   button: {
//     margin: 15
//   }
// };

export default AccApp;
