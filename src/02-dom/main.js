import functions from "./functions.js";

// -------Basic DOM
const idShowButton = document.getElementById("idBtnShow");
idShowButton.addEventListener("click", functions.btnShow);
idBtnAdd.addEventListener("click", functions.btnAdd);
IdBasic.addEventListener("click", functions.divIdBasic);

// -------Cards
const addAfter = document.getElementsByTagName("button")
const addBefore = document.getElementsByTagName("button");
const deletButton = document.getElementsByTagName("button");
const idAddingCards = document.getElementById("idAddDiv");

const left = document.getElementById("left");
left.addEventListener("click", () => {
  if (event.target.id === "idAddDiv") {
    console.log("I am Add Button");
    functions.createCards(left);

  }
  if (event.target.id === "added") {

    functions.addAfterCard(left);
  }
  if (event.target.id === "bef") {

    functions.addBeforeCard(left);

  }
  if (event.target.id === "delBtn") {
    // console.log(event);
    functions.deleteCard(left);
  }

});