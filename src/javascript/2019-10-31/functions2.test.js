import functions from "./functions.js";

test("My test", () => {
  console.log("Hello world from here");
});

test("Create card", () => {
  const card = functions.card();
  const n = card.getAttribute("count");
  expect(n).toBe("1");
});
  
test("text say", () => {
    const card = functions.card();
    expect(card.textContent).toBe("count 2");
    
  });
  test("Group card", () => {
    let groupCard = document.createElement("div");
    expect(div.childElementCount(count).toBe(1));
    
  });
  test("Group card", () => {
    let groupCard = document.createElement("div");
    expect(div.childElementCount(count).toBe(2));
  });
  test("Group card", () => {
    let groupCard = document.createElement("div");
    expect(div.childElementCount(count).toBe(3));
  });

  

  
 





