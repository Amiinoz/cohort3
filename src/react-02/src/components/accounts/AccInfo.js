import React from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import RaisedButton from "material-ui/RaisedButton";
import { List, ListItem } from "material-ui/List";

// This has the hightest lowest lowest and total

class AccInfo extends React.Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  prevStep = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const {
      values: { highestBalance, lowestBalance, balance }
    } = this.props;

    return (
      <MuiThemeProvider className='accInfo'>
        <React.Fragment>
          <AppBar title=' Account Information' />
          <h1>Account Information</h1>
          <List>
            <ListItem
              primaryText='Highest Balance'
              secondaryText={highestBalance}
            />
            <ListItem
              primaryText='Lowest balance'
              secondaryText={lowestBalance}
            />
            <ListItem primaryText='Total' secondaryText={balance} />
          </List>
          <br />
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

export default AccInfo;
