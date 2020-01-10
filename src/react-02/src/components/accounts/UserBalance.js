import React from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import { List, ListItem } from "material-ui/List";

// Account that has been created

class UserBalance extends React.Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  prevStep = e => {
    e.preventDefault();
    this.props.prevStep();
  };
  onHandeleChange = input => e => {
    this.setState({
      [input]: e.target.value
    });
  };

  render() {
    const {
      values: { firstName, lastName, accountType, startBalance }
    } = this.props;

    return (
      <MuiThemeProvider className='accInfo'>
        <React.Fragment>
          <AppBar title=' Account Balance' />
          <h1>Account</h1>
          <List>
            <ListItem primaryText='First Name' secondaryText={firstName} />
            <ListItem primaryText='Last Name' secondaryText={lastName} />
            <ListItem primaryText='Account Type' secondaryText={accountType} />
            <ListItem
              primaryText='Starting balance'
              secondaryText={startBalance}
            />
          </List>
          <br />
          <TextField
            hintText='Please Enter starting balance'
            floatingLabelText='Starting balance'
            onChange={onHandeleChange("startBalance")}
            defaultValue={values.deposit}
          />

          <RaisedButton
            label='Deposit'
            primary={true}
            style={styles.button}
            onClick={this.continue}
          />
          <RaisedButton
            label='Withdraw'
            primary={true}
            style={styles.button}
            onClick={this.continue}
          />
          <RaisedButton
            label='Balance'
            primary={true}
            style={styles.button}
            onClick={this.continue}
          />
          <RaisedButton
            label='Back'
            primary={false}
            style={styles.button}
            onClick={this.prevStep}
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

export default UserBalance;
