import functions from './daily.js'
import { tsThisType } from '@babel/types';

/* 
Test forEach
*/
test('Advanced arrays forEach', () =>{
    expect(functions.makeForEach([newArray]))
        .toEqual([2,4,20,32])

}),

/* 
Test for of
*/
//TODO:
// test('Next level for of loop', () => {
//     expect(functions.makeForOfLoop("cowSays"))
//         .toEqual("m","o","o");
// });
/* 
Test for in
*/
//FIXME:
test('Next Level for in loop', () => {
    expect(functions.makeForInLoop("Mark"))
        .toEqual("Lawyer")
});
/* 
Test do while
*/
test('basic do while loop', () => {
    expect(functions.makeDoWhileLoop([6]))
        .toEqual(5);
}); 
/* 
Test while
*/
test('basic while loop', () =>{
    expect(functions.makeBasicWhileLoop([7]))
        .toEqual(6);
});
/* 
Test for loop
*/
test('basic for loop', () => {
    expect(functions.makeBasicLoop([0, 1, 2, 3, 4, 5, 6]))
        .toEqual([0, 1, 2, 3, 4, 5, 6]);
});
/*
Write the function to format an email based on an object / map
*/
test('email builder from an object / map', () => {
    const name = {
        fname: 'first',
        lname: 'last'
    };
    expect(functions.makeEmailObj(name))
        .toEqual("first.last@evolveu.ca");
    expect(functions.makeEmailObj({
            fname: 'First',
            lname: 'Last'
        }))
        .toEqual("first.last@evolveu.ca");
    expect(functions.makeEmailObj({
            fname: "Bill",
            lname: "Smith"
        }))
        .toEqual("bill.smith@evolveu.ca");
});
/*
    Write a function to format an email based on an array.
*/
test('email builder from an array', () => {
    const name = ["first", "last"];
    expect(functions.makeEmailArr(name))
        .toEqual("first.last@evolveu.ca");
    expect(functions.makeEmailArr(["First", "Last"]))
        .toEqual("first.last@evolveu.ca");
    expect(functions.makeEmailArr(["Bill", "Smith"]))
        .toEqual("bill.smith@evolveu.ca");
});
