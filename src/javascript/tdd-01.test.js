test("hello world console.log1", () => {
  console.log("Hello World 1");
});

test("hello world console.log2", () => {
  console.log("Hello World 2");
});
test("check a string to see if it is the same", () => {
  expect("1234").toBe("abcd");
});
test("make email builder", () => {
  expect(functions.emailBuilder("lary" + "shoumer")).tobe(
    "larry.shoumer@evolveU.ca"
  );
});
