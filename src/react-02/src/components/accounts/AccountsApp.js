import React from "react";
import AccountForms from "./AccountForms";
import AccountsCard from "./AccountsCard";

class AccountsApp extends React.Component {
  constructor() {
    super();
    this.state = {
      accountName: " ",
      accountType: " ",
      startBalance: " "
    };
  }

  render() {
    return (
      <div>
        <AccountForms />
        <AccountsCard />
      </div>
    );
  }
}

export default AccountsApp;
