import functions from "./functions.js";
import calcFunctions from "./calc.js";
import calcTaxFunctions from "./calcTax.js";
import workArraysFunctions from "./workArrays.js";
import dictFunctions from "./dict.js";

// **********
//
// Add the event listeners
//

idNumber.addEventListener("change", () => {
  idNumberSize.textContent = functions.size(idNumber.value);
});

// My calculator-----
// slecting Elements
const btns = document.querySelectorAll(".btns");
const input = document.getElementById("input");
const equal = document.getElementById("equal");
const clear = document.getElementById("clear");

// btns

btns.forEach(btn => {
  btn.addEventListener("click", () => {
    const btnValue = btn.textContent;
    input.value += btnValue;
  });
});

//equal the btn event
equal.addEventListener("click", () => {
  if (input.value) {
    let finalValue = eval(input.value);
    input.value = finalValue;
  } else {
    alert("Please input a number");
    input.value = "";
  }
});
//clear the btn event
clear.addEventListener("click", () => {
  let valueLength = input.value.length;

  let finalValueOutput = input.value.slice(0, valueLength - 1);
  input.value = finalValueOutput;
});

// My Tax Calculator start-----

// My Tax Calculator End-----

// My Working with Arrays start-----
// const addButton = document.getElementById("add");
// const addInput = document.getElementById("inp").value;
// const massIput = document.getElementsById('message').value;

// addButton.addEventListener("click", function() {
// //   const addButton = document.getElementById("add");
//   const addInput = document.getElementById("inp").value;
//   console.log("clicked");

//   let items = [];

//   if (typeof addInput === "number") {
//     items.push(addInput);
//     massInput = addInput + " has been added to the array";
//   } else {
//     massInput = "the input is not a valid number";
//   }


let button = document.getElementById('add');
let adinput = document.getElementById('inp');
// let div = document.getElementById('mss');
button.addEventListener('click', function(){
    let p = document.createElement('p');
    p.appendChild(document.createTextNode("Testing"));
    // div.appendChild(p);
    document.getElementById('mss').appendChild('p');


    items = [];
    console.log('heeeeeeeey');
});







  
  workArraysFunctions.addArray();

// My Working with Arrays end-----

// My Dict start-----

// My Dict end-----
