import functions from "./script.js";

test("Mo test ", () => {
  expect(functions.helloWorld()).toEqual("Hello world from here!");
});
const fakeObjArr = [{ fname: "Rob", lname: "Loban", balance: 2500 }];
expect(functions.balanceGreater(fakeObjArr)).toEqual([2500]);

// test("Add div", () => {
//   const divnewDiv = document.createElement("div");
//   functions.create(divnewDiv);
// });

test("Create a cards test", () => {
  expect(functions.createCard()).toBe("clicked");
});