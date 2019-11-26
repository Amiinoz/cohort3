import {
  functions,
  account,
  accountController,
  Account
} from "./account.js";

test("Mo test ", () => {
  expect(functions.helloWorld()).toEqual("Hello world from here!");
});
const fakeObjArr = [{
  fname: "Rob",
  lname: "Loban",
  balance: 2500
}];
expect(functions.balanceGreater(fakeObjArr)).toEqual([2500]);

test("Accounts, Constructor, Deposit and Balance", () => {
  const checkingAccount = new Account("checkingAccount", 25);
  // check state
  expect(checkingAccount.checkBalance()).toEqual(25);
  // deposit test
  checkingAccount.deposit(10);
  expect(checkingAccount.checkBalance()).toEqual(35);
  // withdrawl test
  checkingAccount.withdraw(30);
  expect(checkingAccount.checkBalance()).toEqual(5);
});