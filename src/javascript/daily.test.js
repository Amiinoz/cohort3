import functions from "./daily.js";
import { tsThisType } from "@babel/types";

const data = {
  staff: [
      { fname: "Jane", lname: "Smith", balance: 10 },
      { fname: "Liam", lname: "Henry", balance: 1000 },
      { fname: "Emma", lname: "Jones", balance: 1330 },
      { fname: "Olivia", lname: "Notly", balance: 310 },
      { fname: "Noah", lname: "Ho", balance: 503 },
      { fname: "William", lname: "Lee", balance: 520 },
      { fname: "Benjamin", lname: "Amis", balance: 150 },
  ],
  company: "EvolveU",
  city: "Calgary",
  prov: "Alberta"
};

const staffEmail = functions.loopStaffIn(data.staff);
// Write your tests here
test('loop for in staff', () =>{
  
  expect(staffEmail[1])
    .toEqual("Liam.Henry@evolveu.ca");
      expect(staffEmail[4])
        .toEqual("Olivia.Notly@evolveu.ca")

});

const staffEmail = functions.loopStaffOf(data.staff);
// Write your tests here

test('email builder for company', () => {
  const staffEmail = functions.loopStaff(data.staff);
  expect(staffEmail[0])
      .toEqual("jane.smith@evolveu.ca");
  expect(staffEmail[3])
      .toEqual("olivia.notly@evolveu.ca");
  expect(staffEmail[6])
      .toEqual("benjamin.amis@evolveu.ca");
});

test("Make slice", () => {
  expect(functions.makeSlice()).toEqual(["Orange", "Lemon"]);
});

test("Splice", () => {
  expect(functions.makeSplice()).toEqual([3, 4, 5]);
});

test("ForEach ", () => {
  expect(functions.makeForeach()).toEqual([2, 4, 20, 34]);
});

test("Make map()", () => {
  expect(functions.makeMap()).toEqual([2, 4, 20, 32]);
}),
  test("Make reduce()", () => {
    expect(functions.makeReduce()).toEqual(1);
  }),
  test("Make filter()", () => {
    expect(functions.makeFilter()).toEqual([3]);
  });

test("Make sort()", () => {
  expect(functions.makeSort()).toEqual("Dec");
}),
  test("Next level for of loop", () => {
    expect(functions.makeForOfLoop()).toEqual("United");
  });

test("Next Level for in loop", () => {
  expect(functions.makeForInLoop("Age")).toEqual("Mark23Lawyer");
});

test("basic do while loop", () => {
  expect(functions.makeDoWhileLoop([6])).toEqual(5);
});

test("basic while loop", () => {
  expect(functions.makeBasicWhileLoop([7])).toEqual(6);
});

test("basic for loop", () => {
  expect(functions.makeBasicLoop([0, 1, 2, 3, 4, 5, 6])).toEqual([
    0,
    1,
    2,
    3,
    4,
    5,
    6
  ]);
});

test("email builder from an object / map", () => {
  const name = {
    fname: "first",
    lname: "last"
  };
  expect(functions.makeEmailObj(name)).toEqual("first.last@evolveu.ca");
  expect(
    functions.makeEmailObj({
      fname: "First",
      lname: "Last"
    })
  ).toEqual("first.last@evolveu.ca");
  expect(
    functions.makeEmailObj({
      fname: "Bill",
      lname: "Smith"
    })
  ).toEqual("bill.smith@evolveu.ca");
});

test("email builder from an array", () => {
  const name = ["first", "last"];
  expect(functions.makeEmailArr(name)).toEqual("first.last@evolveu.ca");
  expect(functions.makeEmailArr(["First", "Last"])).toEqual(
    "first.last@evolveu.ca"
  );
  expect(functions.makeEmailArr(["Bill", "Smith"])).toEqual(
    "bill.smith@evolveu.ca"
  );
});

