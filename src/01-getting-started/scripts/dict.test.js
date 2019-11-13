import dictFunctions from "./dict";

test("Mo test ", () => {
  expect(dictFunctions.helloWorld()).toEqual("Hello world from here!");
});
const fakeObjArr = [{ fname: "Rob", lname: "Loban", balance: 2500 }];
expect(dictFunctions.balanceGreater(fakeObjArr)).toEqual([2500]);
