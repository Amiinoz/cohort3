import {
    objectExpression
} from "@babel/types";

const functions = {
    // Forloop
    makeBasicLoop: () =>{
         let array1 =[];
         for( let i = 0; i <= 6; i++){
             array1.push(i);
         }
         return array1;
    },

    // makeEmailObj
    makeEmailObj: (obj) => {
        return (obj.fname.toLowerCase() + "." + obj.lname.toLowerCase() + "@evolveu.ca");

    },
    // makeEmailArr
    makeEmailArr: (arr) => {
        console.log(arr[0]);
        return (arr[0].toLowerCase() + '.' + arr[1].toLowerCase() + "@evolveu.ca");


        let button = document.getElementById("btn");
        let input = document.getElementById("inpt").value;

        // comp 100
        function onButtonClicked() {
            console.log("I'am in the button click event");
        }

        function getValueFromInput() {
            console.log(input);
        }

        button.addEventListener("click", onButtonClicked);


    },

};

















export default functions;