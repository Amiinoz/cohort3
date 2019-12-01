import {
    functions,
    City,
    CityControler,
}
from "./cities.js";


const toronto = new City("ON", "Toronto", 43.666667, -79.416667, 5213000);
const montreal = new City("NS", "Corner Brook", 64.233333, -57.933333, 20791);
const CapeDorset = new City("NU", "Cape Dorset", 49.25, -76.55, 1326);
const Shamattawa = new City("MN", "Shamattawa", 55.85, -92.083333, 870);
const BurwashLanding = new City("YK", "Burwash Landing", 61.35, -139.0, 1);

test("Mo test ", () => {
    expect(functions.helloWorld()).toEqual("Hello world from here!");
});
const fakeObjArr = [{
    fname: "Rob",
    lname: "Loban",
    balance: 2500
}];
expect(functions.balanceGreater(fakeObjArr)).toEqual([2500]);
// --- Cities

test("City test tdot", () => {
    expect(toronto.name).toEqual("Toronto");
    expect(toronto.latitude).toEqual(43.666667);
});

test("show cities", () => {
    expect(BurwashLanding.show()).toEqual("Province:YK, Name:Burwash Landing, Latitude:61.35, Longitude: -139, Population: 1");

});

test("movedIn - Check how many people", () => {
    CapeDorset.movedIn(3);
    expect(CapeDorset.population).toEqual(1326)
});
test("movedOut - Check how many people", () => {
    montreal.movedOut(15000);
    expect(montreal.population).toEqual(20791)
});

test("howBig - Check to see how big is the city", () => {

});