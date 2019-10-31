import functions from "./larrycalc.js";

// 1. Write the statusbar
// 2.
// 3.retur 2
// 4. a + b

test("larrytest ", () => {
  console.log("hello world");
  functions.helloWorld();
});

test(" write a sum function", () => {
  expect(functions.sumNumbers(2, 2)).toEqual(4);
});
