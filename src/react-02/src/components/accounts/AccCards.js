import React from "react";

//initialize state
class AccCards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      updateCurrentBalance: "",
      updateStarBalance: ""
    };
  }
  // get both input
  onHandleInputChange2 = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onHandleDeposit = event => {
    event.preventDefault();
    // console.log("onHandleDeposit");
    this.props.account.deposit(Number(this.state.updateCurrentBalance));
    this.setState({
      updateCurrentBalance: "",
      updateStarBalance: this.props.account.balance
    });
    this.props.calculate();
  };
  onHandleWhitdrawal = event => {
    event.preventDefault();
    this.props.account.withdraw(Number(this.state.updateCurrentBalance));
    this.setState({
      updateCurrentBalance: "",
      updateStarBalance: this.props.account.balance
    });
    this.props.calculate();
  };
  render() {
    return (
      <div className='left_side-2' id='dispCards'>
        <h4>Account holder:{this.props.account.name} </h4>
        <h4>Balance: {this.props.account.currentBalance}</h4>

        <input
          className='input'
          id='idCurrBal'
          type='number'
          placeholder=' Please enter amount to '
          name='updateCurrentBalance'
          value={this.state.updateCurrentBalance}
          onChange={this.onHandleInputChange2}
        />
        <br />
        <button
          className='accAddtoDeposit btn btn-2'
          onClick={this.onHandleDeposit}
        >
          Deposit
        </button>
        <button
          className='accSubWithdraw btn'
          onClick={this.onHandleWhitdrawal}
        >
          withdraw
        </button>

        <button
          className='accDeleteAcc btn btn-3'
          onClick={() => this.props.removeAccount(this.props.account.name)}
        >
          Delete
        </button>
      </div>
    );
  }
}

export default AccCards;
