import React from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
// import TextField from "material-ui/TextField";
// import RaisedButton from "material-ui/RaisedButton";
import { List, ListItem } from "material-ui/List";

// Account that has been created

class ManageAccount extends React.Component {
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
    const { actName, accountType, startBalance } = this.props;

    return (
      <MuiThemeProvider className='accInfo'>
        <React.Fragment>
          <AppBar title='Manage Account' />
          <form onSubmit={this.onHandleSubmit}>
            <List>
              <br />
              <ListItem
                primaryText='Name:'
                secondaryText={actName}
                value={this.state.actName}
                onChange={this.onHandeleChange}
              />
              <ListItem
                primaryText='Accoutn Type:'
                secondaryText={accountType}
                value={this.state.accountType}
                onChange={this.onHandeleChange}
              />
              <ListItem
                // primaryText='Starting Balance'
                // secondaryText={startBalance}
                // value={this.state.startBalance}
                // onChange={this.onHandeleChange}

                primaryText='Starting Balance'
                value={this.state.startBalance}
                onChange={this.onHandeleChange}
              />
            </List>
          </form>

          {/* //--------- */}
          {/* <List>
            <br />
            <ListItem primaryText='Name:' secondaryText={actName} />
            <ListItem primaryText='Accoutn Type:' secondaryText={accountType} />
            <ListItem
              primaryText='Starting Balance'
              secondaryText={startBalance}
            />
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
              // onClick={ActControler.deposit(amount)}
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
          </form> */}
          <br />
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

// const styles = {
//   button: {
//     margin: 15
//   }
// };

export default ManageAccount;
