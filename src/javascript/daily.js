import { objectExpression, arrayTypeAnnotation } from "@babel/types";

const functions = {
  helloWorld: () => {
    return "Hello world from here!";
  },

  // Destructuring-assignment - November 26, 2019

  arrayDestructuring: () => {
    // we have an array with the name and surname
    let carMaker = ["Honda", "Civic"];
    // destructuring assignment
    // sets carModel = arr[0]
    // and carName = arr[1]
    let [carModel, carName] = carMaker;
    return carModel + " " + carName;

    // alert(carModel); // Honda
    // alert(carName); // Civic
  },

  objectDestructuring: () => {
    let basketballPlayer = {
      name: "Mike Logic",
      position: "Point Guard",
      height: 511
    };

    let { name, position, height } = basketballPlayer;

    return name;
    // alert(name); // Mike Logic
    // alert(position); // Point guard
    // alert(height); // 511
  },

  // Callback Exercise (Part 1) - 2019 - 11 - 08
  // WesternFourProvinces: () => {
  //   //array of full names
  //   let staffNames = (data, callback) => {
  //     for (let i = 0; i < people.length; i++) {
  //       if (
  //         data[i].province.toUperCase() === "AB" ||
  //         data[i].province.toUperCase() === "BC"
  //       ) {
  //         if (typeof callback === "function") {
  //           callback(data[i]);
  //         }
  //       }
  //     }
  //   };
  // people.forEach(function(obj) {
  //  if(obj.fname)
  // };
  // },
  // window.onload = functon(){}

  //More Array Exercises (Really) - 2019 -11-06
  balanceGreater: objArr => {
    const arrayOfBalance = objArr.filter(objArr => objArr.balance >= 1000);
    const arrLargeNum = arrayOfBalance.map(a => a.balance);
    return arrLargeNum;
  },
  // More Array Exercises - 2019 -10 29
  avarageBalance: staff => {
    let initialValue = 0;
    let sum = staff.reduce(function(total, currentValue) {
      return total + currentValue.balance;
    }, initialValue);
    return Math.round(sum / staff.length);
  },

  totalValue: staff => {
    let initialValue = 0;
    let sum = staff.reduce(function(total, currentValue) {
      return total + currentValue.balance;
    }, initialValue);
    return sum;
  },
  // loopStaff each / map Exercises - 2019 -10 25
  loopStaffMap: staff => {
    let empemail = [];
    const newStaffEm = staff.map(item => {
      let staffEmail = functions.makeEmailObj(staff[6]);
      empemail.push(staffEmail);
    });
    return empemail;
  },
  //FIXME:
  loopStaffForEach: staff => {
    let empEmail = [];
    const newStaff = staff.forEach(() => {
      let staffEmail = functions.makeEmailObj(staff[3]);
      empEmail.push(staffEmail);
    });
    return empEmail;
  },
  // loopStaff: in / of  Exercises - 2019 -10 24
  loopStaffOf: staff => {
    let email = [];
    for (const value of staff) {
      let staffEmail = functions.makeEmailObj(value);
      email.push(staffEmail);
    }
    return email;
  },
  loopStaffIn: staff => {
    let email = [];
    for (let i in staff) {
      let staffEmail = functions.makeEmailObj(staff[i]);
      email.push(staffEmail);
    }
    return email;
  },
  // loopStaff Exercises - 2019 -10 22
  loopStaff: a => {
    let email = [];
    for (let i = 0; i < a.length; i++) {
      let staffEmail = functions.makeEmailObj(a[i]);
      email.push(staffEmail);
    }
    return email;
  },
  // More Array Work - 2019-10-16-17
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
  // makeEmailObj - 2019 -10 11
  makeEmailArr: arr => {
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
