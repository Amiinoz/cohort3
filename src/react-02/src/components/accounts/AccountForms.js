import React from "react";

class AccountForms extends React.Component {
  constructor() {
    super();
    this.state = {};
    this.onHandleChange = this.onHandleChange.bind(this);
  }
  onHandleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  render() {
    return (
      <div className='classAcc'>
        <h2>Accounts</h2>

        <div className='classAccountCard'>
          <h3>Account Info</h3>
          <form>
            <input
              type='text'
              name='accountName'
              placeholder='accountName'
              onChange={this.onHandleChange}
            />
            <h4>{this.state.accountName}</h4>
            <input
              type='text'
              name='accountType'
              placeholder='accountType'
              onChange={this.onHandleChange}
            />
            <h4>{this.state.accountType}</h4>
            <input
              type='number'
              name='startBalance'
              placeholder='startBalance'
              onChange={this.onHandleChange}
            />
            <h4>{this.state.startBalance}</h4>
            <button type='button' className='btn'>
              Add Account
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default AccountForms;
