import {ComunityControler, City, Functions, functions} from './cities.js'

const url = "http://localhost:5000/"
let inquireCommKey;
const newComunityControler = new ComunityControler();
let choosenCity;
let currentCity, currentCityCommKey;

document.addEventListener('LoadData', async () => {
  await fetchStart.loadData(newComunityControler);
  let dispMassage;
  let displayK;
  if(newComunityControler.cities.length < 1 ){
    alert("No data was found");
  }else{
    alert("Present date")

    document.getElementById("panel-right");
    for(let i=0; i < newComunityControler.cities.lenght; i++ ){
      message=`City: ${newComunityControler.cities[i].name},  `+
      `CityLatitude: ${newComunityControler.cities[i].latitude}, 
      CityLongatude: ${newComunityControler.cities[i].longitude}, CityPopulation: ${newComunityControler.cities[i].population}`;
      inquireCommKey=newComunityControler.cities[i].commKey;
      functions.addCard(document.getElementById("panel").dispMassage.displayK)

    }
  }
})

addCityBtn.addEventListener("click", async function() {
  inquireCommKey= 
})

i


