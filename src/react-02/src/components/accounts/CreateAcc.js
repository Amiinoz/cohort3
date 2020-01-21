import React from "react";

import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";

// Creates Account

class CreateAcc extends React.Component {
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
      startBalance: ""
    });
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
    // this.calcReport();
  };

  render() {
    const {
      values,
      onHandeleChange
      // ActControler,
      // actName,
      // strBalance,
      // accountType
    } = this.props;

    return (
      <MuiThemeProvider className='classAcc'>
        <React.Fragment>
          <AppBar title=' Create Account' />
          <TextField
            hintText='Please enter your Name'
            floatingLabelText='Name'
            onChange={onHandeleChange("actName")}
            // value={this.actName}
            defaultValue={values.actName}
          />

          <br />
          <TextField
            hintText='Please enter Account type'
            floatingLabelText='Account Type'
            onChange={onHandeleChange("accountType")}
            defaultValue={values.accountType}
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
          />
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

export default CreateAcc;
