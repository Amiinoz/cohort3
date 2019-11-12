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
//FIXME:
// add button
// if the input = number then add to the array
// if the input is not a number display a massage
const addButton = document.getElementById("add");
const arrayInput = document.getElementById("inp").value;
const arrayShow = document.getElementById("show");
const arrayToatal = document.getElementById("total");
const arrayClear = document.getElementById("btn-clear");
const ol = document.getElementById("arrayList");

addButton.addEventListener("click", newItem);
let newArr = [];
function newItem() {
  // console.log("clicked");

  if (typeof arrayInput === "number" && isNaN(arrayInput) !== true) {
    newArr.push(arrayInput);
    console.log(newArr);
  } else {
    return "now way hose";
  }
}

//show button
// will show the contents of the array.
//  using the “State” concept What is the current “State” of the array
// Show in a single string

arrayShow.addEventListener("click", () => {});

// Total button
// will loop in the array and will return the total

arrayToatal.addEventListener("click", () => {});

// Clear button
// will emty array

arrayClear.addEventListener("clear", () => {});

// My Working with Arrays end-----

// My Dict start-----

// My Dict end-----
