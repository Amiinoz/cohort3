import {
    functions,
    Account,
    ActControler
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