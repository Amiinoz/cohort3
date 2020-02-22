import { functions} from "./acc.js";

test("Hello world", () => {
  expect(functions.helloWorld()).toEqual("Hello world from here!");
  test("Mo test ", () => {
    expect(functions.helloWorld()).toEqual("Hello world from here!")
});