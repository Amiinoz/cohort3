import React from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";

class AccCreateBank extends React.Component {
  constructor() {
    super();
    this.state = {
      actName: " ",
      accountType: " ",
      startBalance: " "
    };
  }
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

  onHandleSubmit = e => {
    e.preventDefault(e);
    this.props.onSubmit(this.state);
    this.setState({
      actName: " ",
      accountType: " ",
      startBalance: " "
    });
  };

  render() {
    // const { actName, accountType, startBalance } = this.props;

    return (
      <MuiThemeProvider className='accInfo'>
        <React.Fragment>
          <AppBar title='Create Account' />
          <form onSubmit={this.onHandleSubmit}>
            <TextField
              hintText='Please enter Name for the account'
              floatingLabelText='Account Name'
              values={this.actName}
              onChange={this.onHandeleChange}
            />
            <br />
            <TextField
              hintText='Please enter Account type'
              floatingLabelText='Account Type'
              values={this.accountType}
              onChange={this.onHandeleChange}
            />
            <br />
            <TextField
              id='standard-number'
              type='Number'
              value={this.startBalance}
              onChange={this.onHandeleChange}
            />
            <br />

            <RaisedButton
              id='idAccountMessage'
              label='Add Account'
              primary={true}
              style={styles.button}
              onClick={this.props.message}
            />

            <br />
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

export default AccCreateBank;
