import calcTaxFunctions from "./calcTax";

test("Mo test ", () => {
  expect(calcTaxFunctions.helloWorld()).toEqual("Hello world from here!");
});
const fakeObjArr = [
  {
    fname: "Rob",
    lname: "Loban",
    balance: 2500
  }
];
expect(calcTaxFunctions.balanceGreater(fakeObjArr)).toEqual([2500]);

test("Canadian Fed Tax", () => {
  expect(calcTaxFunctions.canFedTax(-3)).toBe(0);
  expect(calcTaxFunctions.canFedTax(0)).toBe(0);
  expect(calcTaxFunctions.canFedTax(47630)).toBe(7144.5);
  expect(calcTaxFunctions.canFedTax(95259)).toBe(16908.445);
  expect(calcTaxFunctions.canFedTax(147667)).toBe(30534.525);
  expect(calcTaxFunctions.canFedTax(210371)).toBe(48718.685);
  expect(calcTaxFunctions.canFedTax(210372)).toBe(48719.015);
});
