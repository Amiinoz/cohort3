import functions from "./script.js";

const idShowButton = document.getElementById("idBtnShow");
idShowButton.addEventListener("click", () => {
  functions.show();
});

let count = 1;
idBtnAdd.addEventListener("click", () => {
  console.log("add Clicked");
  let newItem = document.createElement("li");
  idol.appendChild(newItem);
  newItem.textContent = `Item Number ${count++}`;
});

IdBasic.addEventListener("click", () => {
  console.log(event.target);
});

document.getElementById("idol").addEventListener("click", function (e) {
  let itemDel = e.target;
  if (itemDel.tagName.toUpperCase() == "li") {
    itemDel.parentNode.removeChild(itemDel);
  }
});

// ------------------- Cards ----------------

const addDivButton = document.getElementById("idAddDiv");
const addBefButton = document.getElementById("idAddBefore");
const addAffter = document.getElementById("addAffter");
const delCard = document.getElementById("delCard");

addDivButton.addEventListener("click", () => {
  let ultimateParEle = document.getElementById("card_1");
  let newAddedFull = functions.createCard(ultimateParEle);
  card_1.appendChild(newAddedFull);
  console.log("AddCARD Clicked");
  // functions.createCard();
});

left.addEventListener("click", () => {
  if (event.target.id === "idAddBefore") {
    functions.addBefore();
  }
});

left.addEventListener("click", () => {
  if (event.target.id === "addAffter") {
    functions.addAfterCard();
  }
});
//FIXME:
// left.addEventListener("click", () => {
//   if (event.target.id === delCard);
//   functions.deleteCard();
// });
// ----------------
left.addEventListener("click", () => {
  if (event.target.id === "delCard");
  functions.deletCard();
});