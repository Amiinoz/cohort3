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
    let newDiv = functions.createCard();
    left.insertBefore(newDiv, addAffter.nextSibling);
  },

  deleteCard: () => {
    // let newDiv = functions.createCard();
    // newDiv.remove();
    console.log("dlete me");
    let delCard = event.target.parentNode;
    let newDiv = functions.createCard();
    // // list.removeChild(list.childNodes[0]);
    // // newDiv.removeChild(newDiv.childNodes[0]);
    // // parent.removeChild(child);
    // left.removeChild(card_1);
    // markerDiv.removeChild(myCoolDiv);
    delCard.removeChild(card_1);
    // newDiv.removeChild();
  }
};

export default functions;
