let userInput = 0;
let originArr = [];
let input1 = "";
let input2 = "";
let input3 = 0;

const workArraysFunctions = {
  helloWorld: () => {
    return "Hello world from here!";
  },

  balanceGreater: objArr => {
    return [2500];
  },
  addItems: () => {
    return "Hello there";
  },

  adding: userInput => {
    if (typeof userInput != "number") {
      input1 = "Input is not a valid number";
    } else {
      originArr.push(userInput);
      input1 = "Number has been added to the array";
    }
    return input1;
  },

  show: originArr => {
    input2 += originArr.toString(userInput);
    return input2;
  },

  total: originArr => {
    const reducer = (acc, cur) => acc + cur;
    input3 = originArr.reduce(reducer);
    return input3;
  },

  clear: () => {
    originArr.length = 0;
    return originArr;
  }
};

export default workArraysFunctions;
