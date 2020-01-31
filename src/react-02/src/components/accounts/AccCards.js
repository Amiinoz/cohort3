import React from "react";

import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";

class AccCards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      accounts: this.props.account,
      totalBalUpdate: ""
    };
  }
  onHandeleChange = e => {
    this.setState({
      totalBalUpdate: e.target.value
    });
  };
  onHandleDeposit = () => {
    this.state.accounts.deposit(this.state.totalBalUpdate);

    this.setState({
      totalBalUpdate: ""
    });
    this.props.calcReport();
  };
  onHandleWithdrawal = () => {
    this.state.accounts.withdraw(this.state.totalBalUpdate);

    this.setState({
      totalBalUpdate: ""
    });
    this.props.calcReport();
  };
  onHandeleDelete = e => {
    this.props.removeAct(this.state.accounts.actName);
  };

  render() {
    return (
      <MuiThemeProvider className='classAcc'>
        <React.Fragment>
          <AppBar title=' Create Account' />

          <TextField
            hintText='Account'
            floatingLabelText={this.state.accounts.actName}
            type='Number'
            value={this.state.totalBalUpdate}
            onChange={this.onHandeleChange}
          />
          {/* 
          <br />
          <TextField
            hintText='Please enter Account type'
            floatingLabelText='Account Type'
            onChange={onHandeleChange("accountType")}
            defaultValue={acounts.accountType}
          />
          <br />
          <br />
          <TextField
            id='standard-number'
            label='Number'
            type='number'
            hintText='Please Enter starting balance'
            floatingLabelText='Starting balance'
            onChange={onHandeleChange("startBalance")}
            defaultValue={values.startBalance}
          /> */}
          <br />
          <RaisedButton
            label='Enter'
            primary={true}
            style={styles.button}
            // onClick={ActControler.addAct(actName, strBalance)}
            onClick={this.addAccount}
          />
          <RaisedButton
            label='Next'
            primary={false}
            style={styles.button}
            onClick={this.continue}
          />
          <br />
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}
const styles = {
  button: {
    margin: 15
  }
};

export default AccCards;
