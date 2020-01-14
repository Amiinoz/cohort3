import React from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import { List, ListItem } from "material-ui/List";

// Account that has been created

class ManageAccount extends React.Component {
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
  // onHandleSubmit = e => {
  //   let array = this.accounts.allAccounts;
  //   this.actName = array.map(array => array.actName);
  //   this.accountType.addAct(this.state.actName, this.state.totalBal);
  // };

  render() {
    const {
      values: { actName, accountType, startBalance, onHandeleChange, values }
    } = this.props;
    // const { onHandleSubmit } = this.props;
    return (
      <MuiThemeProvider className='accInfo'>
        <React.Fragment>
          <AppBar title='Manage Account' />
          <List>
            <br />
            <ListItem primaryText='' secondaryText={actName} />

            <ListItem primaryText='' secondaryText={accountType} />
            <ListItem primaryText='' secondaryText={startBalance} />
          </List>
          <br />
          <form noValidate autoComplete='off'>
            <TextField
              id='standard-basic'
              label='Standard'
              hintText='Please enter amount to'
              floatingLabelText='Manage Account'
            />

            <RaisedButton
              label='Deposit'
              primary={true}
              style={styles.button}
              onClick={this.continue}
            />
            <RaisedButton
              label='Withdrawl'
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
          </form>
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

export default ManageAccount;
