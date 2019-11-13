const functions = {
  helloWorld: () => {
    return "Hello world from here!";
  },

  balanceGreater: objArr => {
    return [2500];
  },
  show: e => {
    console.log(idol.children);
  },

  create: () => {
    counter: 0;
    const newDiv = document.createElement("div");
    newDiv.innerHTML = `<p> Card Number ${functions.counter} </p>
    <button id="idAddBefore"> Add Before</button>
    <button id="idAddAfter"> Add Before</button>
    <button id="idDelete"> Add Before</button>`;
  }
};

export default functions;
