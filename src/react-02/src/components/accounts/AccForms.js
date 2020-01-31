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
      values: {
        highestBalance,
        lowestBalance,
        balance,
        actName,
        ActControler,
        pointer
      }
    } = this.props;

    return (
      <MuiThemeProvider className='accInfo'>
        <React.Fragment>
          <AppBar title=' Account Information' />

          <List>
            <br />
            <ListItem primaryText='' secondaryText={actName} />

            <ListItem
              primaryText='Highest Balance:'
              secondaryText={highestBalance}
              defaultValue={ActControler.highsVal()}
            />
            <ListItem
              primaryText='Lowest balance:'
              secondaryText={lowestBalance}
              defaultValue={ActControler.lowsVal()}
            />
            <ListItem
              primaryText='Total:'
              secondaryText={balance}
              defaultValue={ActControler.totalBal()}
            />
          </List>
          <br />
          <RaisedButton
            label='Delete'
            primary={true}
            style={styles.button}
            onClick={ActControler.removeAct(pointer)}
          />
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
