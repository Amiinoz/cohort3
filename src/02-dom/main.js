import functions from "./script.js";

// idBtnShow.addEventListener("click", () => {
//   console.log(idol.children);
// });
const idBtnShow = document.getElementById('idol');
idBtnShow.addEventListener("click", functions.show());

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

document.getElementById('idol').addEventListener('click', function(e){

  let itemDel = e.target;
  if(itemDel.tagName.toUpperCase() == "li"){
    itemDel.parentNode.removeChild(itemDel);
  }


});

