import {
    objectExpression
} from "@babel/types";

const functions = {
    
    // Advanced Arrays forEach
    makeForEach: () => {
    const array = [2,4,20,30];
    const double = [];
    const newArray = array.forEach((num) => {
        double.push(num*2);
        console.log(double);
    })
},



    // for of loop
     //TODO:
    //  makeForOfLoop: () => {
    //     let cowSays =  "moo";
    //     for (let value of cowSays){
    //         console.log(value);
    //     }
    //  },
    //FIXME:
    // for in loop
     makeForInLoop: (object1) =>{
        const person = {
            name:"Mark",
            Age: 23,
            Occupation: "Lawyer"
        };
         
         for (let item in person.name){
            return(person.Occupation);

         }
     },
    // do while loop
    makeDoWhileLoop: () => {
        let counter = 5;
        do{
            return(counter);
                counter ++;
            }
            while(counter > 0)
    },
    // while loop
    makeBasicWhileLoop: () => {
        let nums = 6;
        while(nums < 7){
           return nums;
           nums++;
        }
    },
  
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