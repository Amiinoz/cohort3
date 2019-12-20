import {
    functions,
    City,
    CityControler
} from "./cities.js";
// --------Google Maps -----------

const count = 0;
const community = new CityControler();

function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(43.666667, -79.416667),
        zoom: 5
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}

// create the city card
const addCityButon = document.getElementById("idAddCity");
console.log(addCityButon);

addCityButon.addEventListener('click', function () {
    console.log("Heloo world");
})

addCityButon.addEventListener('click', functions.newCity);

// function newCity() {

//     functions.count++;
//     let newOl = document.createElement("li");
//     newOl.setAttribute("class", "cityInfo");
//     newOl.textContent = ` Card {}`
//     ncity.appendChild(newOl);

// }