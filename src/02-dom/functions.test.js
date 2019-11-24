import functions from "./functions.js";

test("Mo test ", () => {
    expect(functions.helloWorld()).toEqual("Hello world from here!");
});
const fakeObjArr = [{
    fname: "Rob",
    lname: "Loban",
    balance: 2500
}];
expect(functions.balanceGreater(fakeObjArr)).toEqual([2500]);
// ----------------- Basic DOM
test("Basic dom show btn", () => {
    functions.btnShow;
});
test("Basic dom Add btn", () => {
    // expect(functions.btnAdd()).toEqual("newItem");
});
test("Basic dom divBasic", () => {
    // expect(functions.divIdBasic()).toEqual("event.target");
});
// -----------------Cards

test("Creating Cards in the Dom", () => {
    functions.count = 0;

    // Create a div and set up test
    const left = document.createElement("div");
    let cardCount = left.childElementCount;
    console.log("before create card", cardCount);

    // calling function
    functions.createCards(left);
    console.log("after create card", cardCount);

    // test cards
    expect(functions.count).toEqual(1);
    expect(left.childElementCount).toEqual(cardCount + 1);
    expect(left.lastChild.textContent).toEqual("Card 1" + "Add After" + "Add Before" + "Delet");

    // Add After test
    // functions.addAfterCard(panel, panel.lastChild);
    // expect((panel.firstChild.childNodes[0]).textContent).toEqual("Card 1");


    // expect(cardDivs.lastChild.childNodes[0].textContent).toEqual("Card 1");
    // expect(cardDivs.childElementCount).toEqual(1);

    // expect(cardDivs.lastChild.childNodes[1].textContent).toEqual("Card 2");
    // expect(cardDivs.childElementCount).toEqual(2);

    // expect(cardDivs.lastChild.childNodes[1].textContent).toEqual("Card 2")




    // expect(cardDivs.childElementCount).toEqual(1);

    // expect(cardDivs.lastChild.childNodes[1].textContent).toEqual("Card 2")
    // expect(cardDivs.childElementCount).toEqual(2);

});