const functions = {
  helloWorld: () => {
    return "Hello world from here!";
  },
  balanceGreater: fakeObjArr => {
    return [2500];
  }
};

class Account {
  constructor(accountName, startingBalance) {
    this.accountName = accountName;
    this.balance = startingBalance;
  }

  deposit(amount) {
    this.balance += amount;
  }
  withdraw(amount) {
    this.balance -= amount;
  }
  checkBalance() {
    return this.balance;
  }
}

export { Account, functions };
