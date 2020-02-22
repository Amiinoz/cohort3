import { functions, City, CityControler } from "./cities.js";

const toronto = new City("ON", "Toronto", 43.666667, -79.416667, 5213000);
const cornerBrook = new City(
  "NS",
  "Corner Brook",
  64.233333,
  -57.933333,
  20791
);
const CapeDorset = new City("NU", "Cape Dorset", 49.25, -76.55, 1326);
const Shamattawa = new City("MN", "Shamattawa", 55.85, -92.083333, 870);
const BurwashLanding = new City("YK", "Burwash Landing", 61.35, -139.0, 1);

test("Mo test ", () => {
  expect(functions.helloWorld()).toEqual("Hello world from here!");
});
const fakeObjArr = [
  {
    fname: "Rob",
    lname: "Loban",
    balance: 2500
  }
];
expect(functions.balanceGreater(fakeObjArr)).toEqual([2500]);
// --- Cities

test("City test tdot", () => {
  expect(toronto.name).toEqual("Toronto");
  expect(toronto.latitude).toEqual(43.666667);
});

test("show cities", () => {
  expect(BurwashLanding.show()).toEqual(
    "Province:YK, Name:Burwash Landing, Latitude:61.35, Longitude: -139, Population: 1"
  );
});

test("movedIn - Check how many people", () => {
  CapeDorset.movedIn(3);
  expect(CapeDorset.population).toEqual(1329);
});
test("movedOut - Check how many people", () => {
  cornerBrook.movedOut(15000);
  expect(cornerBrook.population).toEqual(20791);
});

test("howBig - Check to see how big is the city", () => {
  expect(toronto.howBig()).toEqual("Big City");
  expect(cornerBrook.howBig()).toEqual("Large town");
  expect(CapeDorset.howBig()).toEqual("Town");
  expect(Shamattawa.howBig()).toEqual("Village");
});

test("City controler - test", () => {
  expect(
    province.createCity("AB", "Edmonton", 53.55, -113.5, 1058000).province
  ).toEqual("AB");
  expect(provice.cities.lenght).toEqual(8);
});

test("createNewCity - test", () => {
  expect(
    cityName.createCity("AB", "Edmonton", 53.55, -113.5, 1058000).province
  ).toEqual("AB");
  expect(provice.cities.lenght).toEqual(8);
});

test("removeCity - test", () => {
  province.removeCity("ON");
  expect(province.cities.lenght).toEqual(9);
  expect(peovince.cities[i], name).toEqual("Ottawa");
});

test("cityPopulation - test", () => {
  province.cityPopulation(cityArray);
  expect(province.cities.lenght).toEqual(10);
  expect(peovince.cities[i], name).toEqual("Shamattawa");
});
test("controler test", () => {
  let contTest = new CityControler();
  contTest.createNewCity("Steve", 50, 20, 10);
  console.log(conTest);
});
