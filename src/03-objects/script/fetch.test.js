import functions from "./fetch";



const data = [{
        "name": "Maricica",
        "surname": "Ghinea",
        "gender": "female",
        "region": "Romania"
    },
    {
        "name": "Nishant",
        "surname": "Bhattarai",
        "gender": "male",
        "region": "Nepal"
    },
    {
        "name": "Nicuță",
        "surname": "Lotru",
        "gender": "male",
        "region": "Romania"
    },
    {
        "name": "Barbara",
        "surname": "Schneider",
        "gender": "female",
        "region": "United States"
    },
    {
        "name": "Stanca",
        "surname": "Grigoriu",
        "gender": "female",
        "region": "Romania"
    },
    {
        "name": "Bella",
        "surname": "Musker",
        "gender": "female",
        "region": "New Zealand"
    },
    {
        "name": "Fabian",
        "surname": "Dediu",
        "gender": "male",
        "region": "Romania"
    },
    {
        "name": "Славчо",
        "surname": "КОСТАДИНОВ",
        "gender": "male",
        "region": "Bulgaria"
    },
    {
        "name": "Upendra",
        "surname": "Ranjit",
        "gender": "male",
        "region": "Nepal"
    },
    {
        "name": "Dumitra",
        "surname": "Vicovean",
        "gender": "female",
        "region": "Romania"
    }
]

test("Mo test ", () => {
    expect(functions.helloWorld()).toEqual("Hello world from here!");
});
const fakeObjArr = [{
    fname: "Rob",
    lname: "Loban",
    balance: 2500
}];
expect(functions.balanceGreater(fakeObjArr)).toEqual([2500]);
// ----- initial test
test('Getting the first names', () => {
    expect(functions.getFirstName()).toEqual("Maricica");
});