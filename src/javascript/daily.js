import {
    objectExpression
} from "@babel/types";

const functions = {

    makeForOfLoop: (arr) => {
        const airLines1 = ['United', 'WestJet', 'AirCanada'];
        let item;
        for (item of airLines1) {
            return item;
        }
    },
    makeForInLoop: (obj) => {
        let person = {
            name: "Mark",
            Age: 23,
            Occupation: "Lawyer"
        };
        let personalInfo = "";
        let i;
        for (i in person) {
            personalInfo += person[i] + "";
        };
        return personalInfo;

    },
    makeDoWhileLoop: () => {
        let counter = 5;
        do {
            return (counter);
            counter++;
        }
        while (counter > 0)
    },
    makeBasicWhileLoop: () => {
        let nums = 6;
        while (nums < 7) {
            return nums;
            nums++;
        }
    },
    makeBasicLoop: () => {
        let array1 = [];
        for (let i = 0; i <= 6; i++) {
            array1.push(i);
        }
        return array1;
    },
    makeEmailObj: (obj) => {
        return (obj.fname.toLowerCase() + "." + obj.lname.toLowerCase() + "@evolveu.ca");

    },
    makeEmailArr: (arr) => {
        console.log(arr[0]);
        return (arr[0].toLowerCase() + '.' + arr[1].toLowerCase() + "@evolveu.ca");
        let button = document.getElementById("btn");
        let input = document.getElementById("inpt").value;

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