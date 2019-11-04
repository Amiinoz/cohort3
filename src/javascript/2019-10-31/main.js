import functions from "./functions.js";

// btn.addEventListener("click", () => {
//   functions.helloWolrd();
// });
add.addEventListener('click', function(){
  console.log("click");
  functions.card(bigdiv);
});

// bigdiv.addEventListener("click", () => {
//   // console.log(event.target);
//   // console.log(event.target.parentNode);
//   // console.log(event.target.parentNode.children);
// });
// let clicks = 0; // counter
// let a = document.getElementById("add"); // element
// a.onclick = function() {
//   // onclick not onClick
//   const div = document.createElement("div");
//   div.textContent = clicks++;
//   div.className = "test";
//   bigdiv.append(div); // increment it
// };
