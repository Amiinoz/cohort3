import functions from './syntax'

test('Check if variable return is number 4', () => {
    expect(functions.multiplyNumbers(8)).toBe(4);
});
test('Check if variable returns string', () => {
    expect(functions.stringName()).toBe("John Is a teatcher in our school");
});
test('Check if the boolean returns false', () => {
    expect(functions.boolean()).toBe(false);
});
test('Using splice method on Arrays', () => {
    expect(functions.bestCars()).toEqual(['BMW']);
});
test('Using dictionary, object', () => {
    expect(functions.custInfo()).toEqual(237702);
});
test('Using undefined', () => {
    expect(functions.returnUndefined()).toEqual(undefined);
});
test('Using if else statement', () => {
    expect(functions.getTime()).toBe("Good morning");
});
test('using parameters', () => {
    expect(functions.paramaters()).toEqual(15);
});
test('using return', () => {
    expect(functions.returnFunction()).toEqual(8);
});
test('using arrays with .unshift', () => {
    expect(functions.arrayUnshift()).toEqual(4);
});
test('using arrays with conscat', () => {
    expect(functions.arrayConcar()).toEqual(["spegeti", "rice", "steak", "chicken"]);
});
test('using arrays update values', () => {
    expect(functions.updateArray()).toEqual(["Banana", "Orange", "Apple", "Mango"]);
});
test(" for loop", () => {
    expect(functions.makeBasicLoop([0, 1, 2, 3, 4, 5, 6])).toEqual([
        0,
        1,
        2,
        3,
        4,
        5,
        6
    ]);
});
test("for in loop", () => {
    expect(functions.makeForInLoop("Age")).toEqual("Mark23Lawyer");
});
test("do while loop", () => {
    expect(functions.makeDoWhileLoop([6])).toEqual(5);
});
test("while loop", () => {
    expect(functions.makeBasicWhileLoop([7])).toEqual(6);
});
test("ForEach ", () => {
    expect(functions.makeForeach()).toEqual([2, 4, 20, 34]);
});
test("object dictionaries ", () => {
    expect(functions.objectDictonaries()).toBe(true);
});
