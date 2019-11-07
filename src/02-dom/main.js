import functions from "./script.js";


idBtnShow.addEventListener("click", () => {
    console.log(idol.children);
});

let count = 1;
idBtnAdd.addEventListener("click", () =>{
    console.log("add Clicked");
    let newItem = document.createElement("li");
    idol.appendChild(newItem);
    newItem.textContent = `Item Number ${count++}`;
});

IdBasic.addEventListener("click", () => {
    console.log(event.target);
});