import functions from './functions.js';

// **********
//
// Add the event listeners
// 

idNumber.addEventListener('change', (() => {
    idNumberSize.textContent = functions.size(idNumber.value);
}));

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