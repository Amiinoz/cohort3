import { objectExpression } from "@babel/types";

// 100% test covarage
// 1. Write stub
// 2.write failing test
// 3.write only code to maade the test pass
// 4.write onother test
// 5.repeat
// 6.refactor



// ___________________
// TO GET THE KEYS AND VALUES FROM OBJECT
let obj = {
    my: 'name',
    is: 'Rudolf',
    the: 'raindeer'
  }

//Object.keys 
Object.keys(obj).forEach((key, endex) => {
    console.log(key, obj[key]);
});
// Object.values 
    Object.values(obj).forEach(value => {
        console.log(value);
    });
// Object.entries
Object.entries(obj).forEach(value => {
    console.log(value);
    });
//could also use as 
Object.entries(obj).map(value => {
    return value[1] + value[0].replace(',' , '');
    });
