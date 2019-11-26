let count = 1;
const functions = {

    helloWorld: () => {
        return "Hello world from here!";
    },
    balanceGreater: objArr => {
        return [2500];
    },
    // -----------Basic DOM
    btnShow: e => {
        console.log(idol.children);
    },
    btnAdd: e => {
        console.log("add Clicked");
        let newItem = document.createElement("li");
        idol.appendChild(newItem);
        newItem.textContent = `Item Number ${count++}`;
    },
    divIdBasic: e => {
        console.log(event.target);
    },
    // ---------------Cards

    count: 0,

    createCards: () => {
        console.log("Add Card");

        functions.count++;

        // create the div
        let newDiv = document.createElement("div");
        newDiv.setAttribute("class", "test");
        left.appendChild(newDiv);
        newDiv.textContent = `Card ${functions.count}`;


        // Create space between buttons
        newDiv.appendChild(document.createElement("br"));
        newDiv.appendChild(document.createElement("br"));


        // Create addAfter button
        let addAfter = document.createElement("button");
        addAfter.setAttribute("id", "added");
        addAfter.textContent = "Add After";
        addAfter.className = "btn";
        newDiv.appendChild(addAfter);

        // Create addBefore button
        let addBefore = document.createElement("button");
        addBefore.setAttribute("id", "bef");
        addBefore.textContent = "Add Before";
        addBefore.className = "btn";
        newDiv.appendChild(addBefore);


        // Create space between buttons
        newDiv.appendChild(document.createElement("br"));
        newDiv.appendChild(document.createElement("br"));

        // Create delete button
        let deletButton = document.createElement("button");
        deletButton.setAttribute("id", "delBtn");
        deletButton.textContent = "Delete";
        deletButton.className = "btn"
        newDiv.appendChild(deletButton);

        // Create more space
        newDiv.appendChild(document.createElement("br"));
        return newDiv;

    },
    addAfterCard: () => {
        console.log("Add After Button");
        let addAffter = event.target.parentNode;
        let newDiv = functions.createCards();
        left.insertBefore(newDiv,addAffter.nextSibling);
    },
    addBeforeCard: () => {
        console.log("Add before Button");
        let addBefore = event.target.parentNode;
        let newDiv = functions.createCards();
        left.insertBefore(newDiv, addBefore);
    },
    deleteCard: () => {
        console.log("Delete Button")
        left.removeChild(event.target.parentNode);
    },







};







export default functions;