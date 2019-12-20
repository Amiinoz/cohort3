import { objectExpression, functionExpression, numericLiteral, numberLiteralTypeAnnotation } from "@babel/types";



//////// ---------TESTING ----------//////////////


////////--------------TESTING----------////////
// 100% test covarage
// 1. Write stub
// 2.write failing test
// 3.write only code to maade the test pass
// 4.write onother test
// 5.repeat
// 6.refactor



////////--------------FOREACH----------////////

let daworves = ['Billuf', 'Browfell', 'Fill', 'Roger'];

daworves.forEach( function (item, index, array){
        if (item === 'Billuf'){
            item = item.toUpperCase();
        }else{
            item = item.toLowerCase();
        }
        console.log(index, item);
});



////////--------------FOREACH----------////////


//BASICS
// Basics➤
// On page script
<script type="text/javascript">  ...
</script>
Include external JS file
<script src="filename.js"></script>
Delay - 1 second timeout
setTimeout(function () {
	
}, 1000);
Functions
function addNumbers(a, b) {
    return a + b; ;
}
x = addNumbers(1, 2);


// Variables X
var a;                          // variable
var b = "init";                 // string
var c = "Hi" + " " + "Joe";     // = "Hi Joe"
var d = 1 + 2 + "3";            // = "33"
var e = [2,3,5,8];              // array
var f = false;                  // boolean
var g = /()/;                   // RegEx
var h = function(){};           // function object
const PI = 3.14;                // constant
var a = 1, b = 2, c = a + b;    // one line
let z = 'zzz';                  // block scope local


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



    // ------------------------------------.MAP()-------------------------------------

