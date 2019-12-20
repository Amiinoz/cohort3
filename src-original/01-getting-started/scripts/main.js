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


// / ------------------My calculator------------------
// slecting Elements 
const btns = document.querySelectorAll('.btns');
const input = document.getElementById('input');
const equal = document.getElementById('equal');
const clear = document.getElementById('clear');


// btns

btns.forEach((btn) => {
    btn.addEventListener('click', () => {
        const btnValue = btn.textContent;
        input.value += btnValue;

    });
});

//equal btn event
equal.addEventListener('click', () => {
    if (input.value) {
        let finalValue = eval(input.value);
        input.value = finalValue;
    } else {
        alert('Please input a number');
        input.value = '';

    }
});
//clear btn event
clear.addEventListener('click', () => {
    let valueLength = input.value.length;

    let finalValueOutput = input.value.slice(0, valueLength - 1);
    input.value = finalValueOutput;

}); 

// My Tax Calculator start-----
idCalc.addEventListener("click", () => {
      functions.canadianTax();
      const taxFinalResult = functions.canFedTax(idIncome.value);
      idTax.value = taxFinalResult.toFixed(2);

      // My Tax Calculator End-----

      // My Working with Arrays start-----
      addArr.addEventListener("click", () => {
        let numInput = inputArr.value;
        let outputAdd = arrayFunc.adding(numInput);
        messageFinal.innerText = outputAdd;
      });

      show.addEventListener("click", () => {
        let outputShow = arrayFunc.showing(originArr);
        messageFinal.innerText = outputShow;
      });

      total.addEventListener("click", () => {
        let outputTotal = arrayFunc.totalling(originArr);
        messageFinal.innerText = outputTotal;
      });

      clear.addEventListener("click", () => {
        let outputClear = arrayFunc.clearing(originArr);
        messageFinal.innerText = outputClear;
      });

     

      // My Dict start-----
      idShowButton.addEventListener("click", () => {
        console.log("Province Search Button has been Clickitty Clacked");
        let clickedProvince = functions.findProvinceSearch(idSearchTextBox.value);
        idMessageArea.textContent = `Province: ${clickedProvince}`;
        console.log(selectedProvince);
        idSearchTextBox.value = "";
    });

