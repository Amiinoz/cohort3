import {
  objectExpression,
  arrayTypeAnnotation
} from "@babel/types";



const functions = {

  loopStaffIn: (data) =>{
    const staffEmail = "";
    


for(let i = 0; i < data.length; i++){

let childArray = myArray[i].child;

for(let j = 0; j < childArray.length; j++){

console.log(childArray[j]);

}

}

  },

  loopStaff: (data) => {
    const email = [];
    for (let i = 0; i < data.length; i++){
      // console.log(data[i]);
     let staffEmail = functions.makeEmailObj(data[i]);
    email.push(staffEmail);
  } return email;
  },

  makeSlice: () => {
    var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
    var citrus = fruits.slice(1, 3);
    return citrus;
  },

  makeSplice: () => {
    const array = [1, 2, 3, 4, 5];
    return array.splice(2);
  },

  makeForeach: () => {
    const array = [1, 2, 10, 17];
    const double = [];
    const newArray = array.forEach(num => {
      double.push(num * 2);
    });
    return double;
  },

  makeMap: arr => {
    const newNums = [1, 2, 10, 16];
    const mapNums = newNums.map(num => num * 2);
    return mapNums;
  },

  makeReduce: arr => {
    var arr = [1, 2, 3, 4];
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
      sum += arr[i];
      return sum;
    }
  },

  makeFilter: arr => {
    const array = [3, 6, 9];
    const filteredArray = array.filter(num => num < 5);
    return filteredArray;
  },

  makeSort: arr => {
    const months = ["March", "Jan", "Feb", "Dec"];
    months.sort();
    return months[0];
  },

  makeForOfLoop: arr => {
    const airLines1 = ["United", "WestJet", "AirCanada"];
    let item;
    for (item of airLines1) {
      return item;
    }
  },

  makeForInLoop: obj => {
    let person = {
      name: "Mark",
      Age: 23,
      Occupation: "Lawyer"
    };
    let personalInfo = "";
    let i;
    for (i in person) {
      personalInfo += person[i] + "";
    }
    return personalInfo;
  },

  makeDoWhileLoop: () => {
    let counter = 5;
    do {
      return counter;
      counter++;
    } while (counter > 0);
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

  makeEmailObj: obj => {
    return (
      obj.fname.toLowerCase() + "." + obj.lname.toLowerCase() + "@evolveu.ca"
    );
  },

  makeEmailArr: arr => {
    console.log(arr[0]);
    return arr[0].toLowerCase() + "." + arr[1].toLowerCase() + "@evolveu.ca";
    let button = document.getElementById("btn");
    let input = document.getElementById("inpt").value;

    function onButtonClicked() {
      console.log("I'am in the button click event");
    }

    function getValueFromInput() {
      console.log(input);
    }

    button.addEventListener("click", onButtonClicked);
  }
};

export default functions;