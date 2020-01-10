const functions = {
  helloWorld: () => {
    return "Hello world from here!";
  },
  balanceGreater: fakeObjArr => {
    return [2500];
  }
};

class Account {
  constructor(actName, strBalance) {
    this.actName = actName;
    this.balance = strBalance;
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

class ActControler {
  constructor() {
    this.allAccounts = [];
    this.massage = "Your account Balance ";
  }

  addAct(actName, strBalance) {
    const newAct = new Account(actName, strBalance);
    this.allAccounts.push(newAct);
  }

  removeAct(pointer) {
    this.allAccounts.splice(pointer, 1);
  }

  totalBal() {
    let actSum = 0;
    for (const eachAccount of this.allAccounts) {
      actSum += eachAccount.balance;
    }
    return actSum;
  }

  highsVal() {
    const balanceArr = this.allAccounts.map(each => each.balance);
    const highVal = Math.max(...balanceArr);
    return highVal;
  }

  lowsVal() {
    const balanceArr = this.allAccounts.map(each => each.balance);
    const lowVal = Math.min(...balanceArr);
    return lowVal;
  }
}

export { functions, Account, ActControler };
