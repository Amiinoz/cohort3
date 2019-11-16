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
  count: 0,

  createCard: () => {
    functions.count++;

    let newDiv = document.createElement("div");
    // card_1.appendChild(newDiv);
    newDiv.setAttribute("count", functions.count);
    // newDiv.textContent = `count ${functions.count}`;
    newDiv.className = "test";
    newDiv.innerHTML = `<p> Card Number ${functions.count} </p>
    <button id="idAddBefore"> Add Before</button>
    <button id="idAddAfter"> Add After</button></br>
    <button id="idDelete"> Add Delete</button>`;
    return newDiv;
  },

  //FIXME:

  addBefore: () => {
    let addBefButton = event.target.parentNode;
    console.log(addBefButton);
    let newDiv = functions.createCard();
    console.log(newDiv);
    left.insertBefore(newDiv, addBefButton);
  },

  addAfterCard: () => {
    let addAffter = event.target.parentNode;
    console.log("Before");
    console.log(addAffter);
    let addAfter = event.target.parentNode;
    console.log("add after");
  },

  deleteCard: () => {
    let deleteCard = event.target.parentNode;
  }
};

export default functions;
