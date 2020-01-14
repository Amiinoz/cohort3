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

  render() {
    const { values, onHandeleChange } = this.props;
    return (
      <MuiThemeProvider className='classAcc'>
        <React.Fragment>
          <AppBar title=' Create Account' />
          <TextField
            hintText='Please enter your Name'
            floatingLabelText='Name'
            onChange={onHandeleChange("actName")}
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
