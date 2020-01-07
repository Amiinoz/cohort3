import React from "react";

class AccountsCard extends React.Component {
  constructor() {
    super();
    this.state = {
      accountName: " ",
      accountType: " ",
      startBalance: " "
    };
    this.onHandleChange = this.onHandleChange.bind(this);
  }
  onHandleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  render() {
    return (
      <div className='accInfo'>
        <h1>Account</h1>
        <h3>Name:{this.state.accountName}</h3>
        <h3>Starting Balance:</h3>
        <button type='button' className='btn'>
          Deposit
        </button>
        <button type='button' className='btn'>
          Withdrawl
        </button>
        <button type='button' className='btn'>
          Balance
        </button>

        <div className='accInfo2'>
          <h5>Account Info</h5>
        </div>
      </div>
    );
  }
}

export default AccountsCard;
