import functions from "./daily.js";

// Callback Exercise (Part 1) - 2019 - 11 - 08
const people = [
  { fname: "Alex", lname: "Smith", province: "BC", age: 33 },
  { fname: "Angela", lname: "Jones", province: "AB", age: 61 },
  { fname: "Anne", lname: "Bird", province: "SK", age: 35 },
  { fname: "Brent", lname: "Riddle", province: "MN", age: 79 },
  { fname: "Byron", lname: "Cardenas", province: "BC", age: 38 },
  { fname: "Carrie", lname: "Ramirez", province: "AB", age: 89 },
  { fname: "Cheryl", lname: "Glenn", province: "SK", age: 70 },
  { fname: "Dima", lname: "Curry", province: "MN", age: 67 },
  { fname: "Dustin", lname: "Bullock", province: "BC", age: 59 },
  { fname: "Eva", lname: "Keiths", province: "AB", age: 24 },
  { fname: "Faith", lname: "Liu", province: "SK", age: 46 },
  { fname: "Fawad", lname: "Bowman", province: "MN", age: 69 },
  { fname: "Forest", lname: "Vaughn", province: "BC", age: 52 },
  { fname: "Giovanni", lname: "Browning", province: "AB", age: 32 },
  { fname: "Greg", lname: "Hogan", province: "SK", age: 55 },
  { fname: "Harpreet", lname: "Ramsey", province: "MN", age: 18 },
  { fname: "Ian", lname: "Fitzgerald", province: "BC", age: 16 },
  { fname: "James", lname: "Kramer", province: "AB", age: 57 },
  { fname: "Jarvis", lname: "Ortega", province: "SK", age: 69 },
  { fname: "Jawad", lname: "Huerta", province: "MN", age: 35 },
  { fname: "Jinbong", lname: "Robinson", province: "BC", age: 26 },
  { fname: "Jingnan", lname: "Hatfield", province: "AB", age: 71 },
  { fname: "Joe", lname: "Banks", province: "SK", age: 37 },
  { fname: "Kristina", lname: "Dalton", province: "MN", age: 73 },
  { fname: "Latora", lname: "Matthews", province: "BC", age: 25 },
  { fname: "Lauren", lname: "McClure", province: "AB", age: 42 },
  { fname: "Licedt", lname: "Rasmussen", province: "SK", age: 30 },
  { fname: "Linden", lname: "Pierce", province: "MN", age: 68 },
  { fname: "Luis", lname: "Price", province: "BC", age: 23 },
  { fname: "Marcela", lname: "Perez", province: "AB", age: 20 },
  { fname: "Marilou", lname: "Graham", province: "SK", age: 32 },
  { fname: "Matt", lname: "Novak", province: "MN", age: 29 },
  { fname: "Monica", lname: "Giles", province: "BC", age: 34 },
  { fname: "Niloufar", lname: "Carson", province: "AB", age: 29 },
  { fname: "Omar", lname: "Olson", province: "SK", age: 69 },
  { fname: "Roger", lname: "Woodard", province: "MN", age: 84 },
  { fname: "Roman", lname: "Swanson", province: "BC", age: 21 },
  { fname: "Seun", lname: "Kelly", province: "AB", age: 60 },
  { fname: "Shane", lname: "Frost", province: "SK", age: 87 },
  { fname: "Steven", lname: "Haynes", province: "MN", age: 47 },
  { fname: "Thomas", lname: "Hart", province: "BC", age: 14 },
  { fname: "Trent", lname: "Kerr", province: "AB", age: 12 },
  { fname: "Darrell", lname: "Koch", province: "SK", age: 10 },
  { fname: "Tylor", lname: "Torres", province: "MN", age: 98 }
];

//More Array Exercises (Really) - 2019 -11-06
const data = {
  staff: [
    { fname: "Jane", lname: "Smith", balance: 10 },
    { fname: "Liam", lname: "Henry", balance: 1000 },
    { fname: "Emma", lname: "Jones", balance: 1330 },
    { fname: "Olivia", lname: "Notly", balance: 310 },
    { fname: "Noah", lname: "Ho", balance: 503 },
    { fname: "William", lname: "Lee", balance: 520 },
    { fname: "Benjamin", lname: "Amis", balance: 150 }
  ],
  company: "EvolveU",
  city: "Calgary",
  prov: "Alberta"
};
// tdd test --> start
test("Mo test ", () => {
  expect(functions.helloWorld()).toEqual("Hello world from here!");
});

test("Return full names from AB and BC", () => {
  expect(functions.WesternFourProvinces()).toEqual("Billy Bob");
});
test("Return array with balance greather then 1000", () => {
  const fakeObjArr = [{ fname: "Rob", lname: "Loban", balance: 2500 }];
  // tdd test --> end

  //More Array Exercises (Really) - 2019 -11-06
  expect(functions.balanceGreater(fakeObjArr)).toEqual([2500]);
  expect(functions.balanceGreater(data.staff)).toEqual([1000, 1330]);
});

// Daily Exercise 2019-11-05
test("How do pointers work", () => {
  console.log("Reference");
  const a = { name: "Larry", bal: 10 };
  const arr = [];
  const obj = {};
  arr.push(a);
  obj[a.name] = a;

  expect(a.bal).toBe(10);
  expect(arr[0].bal).toBe(10);
  expect(obj[a.name].bal).toBe(10);
  expect(obj.Larry.bal).toBe(10);

  a.bal += 1;
  expect(a.bal).toBe(11);
  expect(arr[0].bal).toBe(11);
  expect(obj[a.name].bal).toBe(11);
  expect(obj.Larry.bal).toBe(11);

  // a = "";
  addThree(a);
  expect(a.bal).toBe(14);
  expect(arr[0].bal).toBe(14);
  expect(obj[a.name].bal).toBe(14);
  expect(obj.Larry.bal).toBe(14);
});

function addThree(thing) {
  thing.bal = thing.bal + 3;
}

test("Return the avarage balance", () => {
  expect(functions.avarageBalance(data.staff)).toEqual(546);
});

test("Return total balance", () => {
  const staffEmail = functions.totalValue(data.staff);
  expect(staffEmail).toEqual(3823);
});

test("Company email for map", () => {
  const staffEmail = functions.loopStaffMap(data.staff);
  expect(staffEmail[6]).toEqual("benjamin.amis@evolveu.ca");
});

test("Comany email forEach", () => {
  const staffEmail = functions.loopStaffForEach(data.staff);
  expect(staffEmail[3]).toEqual("olivia.notly@evolveu.ca");
});

test("Company email for of loop", () => {
  const staffEmail = functions.loopStaffOf(data.staff);
  expect(staffEmail[6]).toEqual("benjamin.amis@evolveu.ca");
});

test("Company email for in loop", () => {
  const staffEmail = functions.loopStaffIn(data.staff);
  expect(staffEmail[0]).toEqual("jane.smith@evolveu.ca");
});
test("email builder for company", () => {
  const staffEmail = functions.loopStaff(data.staff);

  expect(staffEmail[0]).toEqual("jane.smith@evolveu.ca");
  expect(staffEmail[3]).toEqual("olivia.notly@evolveu.ca");
  expect(staffEmail[6]).toEqual("benjamin.amis@evolveu.ca");
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
