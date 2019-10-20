import functions from './syntax'

test('Check if variable return is number 4' , () =>{
    expect(functions.multiplyNumbers(8)).toBe(4);
});
test('Check if variable returns string' , () =>{
    expect(functions.stringName()).toBe("John Is a teatcher in our school");
});
test('Check if the boolean returns false' , () =>{
    expect(functions.boolean()).toBe(false);
});
test('Using splice method on Arrays' , () =>{
    expect(functions.bestCars()).toEqual(['BMW']);
});
test('Using dictionary, object' , () =>{
    expect(functions.custInfo()).toEqual(237702); 
});
test('Using undefined' , () =>{
    expect(functions.returnUndefined()).toEqual(undefined); 
});
test('Using if else statement' , () =>{
    expect(functions.buildingsWeOwn()).toEqual("What can of rental are you looking for"); 
});


