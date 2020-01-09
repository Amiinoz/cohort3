import React from "react";

// Account that has been created

class AccCards extends React.Component {
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
        <h3>Account Type:</h3>
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
      </div>
    );
  }
}

export default AccCards;
