import workArraysFunctions from "./workArrays.js";

test("Mo test ", () => {
  expect(workArraysFunctions.helloWorld()).toEqual("Hello world from here!");
});
const fakeObjArr = [{ fname: "Rob", lname: "Loban", balance: 2500 }];
expect(workArraysFunctions.balanceGreater(fakeObjArr)).toEqual([2500]);
