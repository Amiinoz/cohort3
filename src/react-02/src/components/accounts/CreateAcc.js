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
          <AppBar title=' Account Information' />
          <TextField
            hintText='Please enter your first name'
            floatingLabelText='First Name'
            onChange={onHandeleChange("firstName")}
            defaultValue={values.firstName}
          />
          <br />
          <TextField
            hintText='Please enter your Last name'
            floatingLabelText='Last Name'
            onChange={onHandeleChange("lastName")}
            defaultValue={values.lastName}
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
            defaultValue={values.deposit}
          />
          <br />
          <RaisedButton
            label='Create Account'
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
