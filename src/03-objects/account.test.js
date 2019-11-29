import {
  functions,
  Account,
  ActControler,

} from "./account.js";

test("Mo test ", () => {
  expect(functions.helloWorld()).toEqual("Hello world from here!");
});
test("Balance Greater", () => {
  const fakeObjArr = [{
    fname: "Rob",
    lname: "Loban",
    balance: 2500
  }];
  expect(functions.balanceGreater(fakeObjArr)).toEqual([2500]);
});


test("Accounts, Constructor, Deposit and Balance", () => {
  const checkingAccount = new Account("checkingAccount", 25);
  // check state;d,
  expect(checkingAccount.checkBalance()).toEqual(25);
  // deposit test
  checkingAccount.deposit(10);
  expect(checkingAccount.checkBalance()).toEqual(35);
  // withdrawl test
  checkingAccount.withdraw(30);
  expect(checkingAccount.checkBalance()).toEqual(5);
});
test("Remove account", () => {
  let newAccountControler = new ActControler();
  newAccountControler.addAct('Savings', 10);
  console.log(newAccountControler.allAccount);
});
test("Find total balance", () => {
  let newAccountControler = new ActControler();
  newAccountControler.addAct('Savings', 10);
  newAccountControler.addAct('Checking', 20);
  newAccountControler.addAct('RumFund', 25);
  expect(newAccountControler.totalBal()).toEqual(55);
  console.log(newAccountControler.allAccount);
});
test("Find highest value", () => {
  let newAccountControler = new ActControler();
  newAccountControler.addAct('Savings', 10);
  newAccountControler.addAct('Checking', 20);
  newAccountControler.addAct('RumFund', 25);
  expect(newAccountControler.highsVal()).toEqual(25);
  console.log(newAccountControler.allAccount);
});
test("Find Lowest value", () => {
  let newAccountControler = new ActControler();
  newAccountControler.addAct('Savings', 10);
  newAccountControler.addAct('Checking', 20);
  newAccountControler.addAct('RumFund', 25);
  expect(newAccountControler.lowsVal()).toEqual(10);
  console.log(newAccountControler.allAccount);
});