import { functions, account, accountController, Account } from "./account.js";

test("Mo test ", () => {
  expect(functions.helloWorld()).toEqual("Hello world from here!");
});
const fakeObjArr = [
  {
    fname: "Rob",
    lname: "Loban",
    balance: 2500
  }
];
expect(functions.balanceGreater(fakeObjArr)).toEqual([2500]);

test("Accounts, Constructor, Deposit and Balance", () => {
  const Savings = new Account("SavingsAcount", 100);
  // check state
  expect(Savings.checkBalance()).toEqual(100);
  // withdrawl test
  Savings.withdraw(50);
  expect(Savings.checkBalance()).toEqual(50);
  // deposit test
  Savings.deposit(45);
  expect(Savings.checkBalance()).toEqual(95);
});
