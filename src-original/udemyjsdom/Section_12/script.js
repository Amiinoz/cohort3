
// 1. If you click on the list item, it toggles the.done class 
//on and off.
// the done class = text-decoration: line-through;
// if the shopping list gets clicked then toggle lin-through
// the done button deletes that shopping item
// new items adds button





var button = document.getElementById("enter");
// var button = document.getElementsByClassName("done");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.getElementsByTagName("li")[];



li.addEventListener("click", function(){

	console.log("hello");
})

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
	
	
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function removeCompletedList(){

	document.querySelector("li").classList.toggle("done");
	
}

function addlinethrough() {
	li.style.textDecoration = "line-through"
}

        function changeTextDecorationListDone(elem) {
        	var anchor = document.getElementsByClassName("done");
        	
		}
			





button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

