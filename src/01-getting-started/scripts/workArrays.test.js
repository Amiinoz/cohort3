import workArraysFunctions from "./workArrays.js";

test("Mo test ", () => {
  expect(workArraysFunctions.helloWorld()).toEqual("Hello world from here!");
});
const fakeObjArr = [{ fname: "Rob", lname: "Loban", balance: 2500 }];
expect(workArraysFunctions.balanceGreater(fakeObjArr)).toEqual([2500]);

test("user input adding", () => {
  expect(workArraysFunctions.adding(34)).toEqual(
    "Number has been added to the array"
  );
  expect(workArraysFunctions.adding("abc")).toEqual(
    "Input is not a valid number"
  );
});

test("User input show", () => {
  expect(workArraysFunctions.show([2, 4, 6])).toEqual("2,4,6");
});

test("Check total", () => {
  expect(workArraysFunctions.total([34, 25, 54])).toEqual(113);
});

test("Check clear", () => {
  expect(workArraysFunctions.clear([34])).toEqual([]);
});
