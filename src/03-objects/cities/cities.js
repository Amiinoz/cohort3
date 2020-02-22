const count = 0;
const functions = {
  // set functions dumy test
  helloWorld: () => {
    return "Hello world from here!";
  },
  balanceGreater: fakeObjArr => {
    return [2500];
  }
  //   // create new city with counter class and info
  //   newCity: () => {
  //     functions.count++;
  //     let newOl = document.createElement("li");
  //     newOl.setAttribute("class", "cityInfo");
  //     newOl.textContent = ` Card {}`;
  // // append to child
  //     left.appendChild(newOl);
  //   }
};
// set city class and initiliaze constructor
class City {
  constructor(province, name, latitude, longitude, population) {
    this.commKey = commKey;
    this.name = name;
    this.province = province;
    this.latitude = latitude;
    this.longitude = longitude;
    this.population = population;
  }
  // show city
  show() {
    return `Province:${this.province}, Name:${this.name}, Latitude:${this.latitude}, Longitude: ${this.longitude}, Population: ${this.population}`;
  }
  // display how many moven in
  movedIn(n) {
    this.population += parseInt(n);
  }
  // display how many moven out
  movedOut(n) {
    this.population -= parseInt(n);
  }
  // check how big is the comunity
  howBig() {
    if (this.population > 100000) return "Big City";
    else if (this.population > 20000) return "Large town";
    else if (this.population > 1000) return "Town";
    else if (this.population > 100) return "Village";
    else if (this.population > 50) return "Small village";
    else return "Seems like no one lives here!!!";
  }
}
// set up controler
class ComunityControler {
  constructor(cityName) {
    this.cities = [];
    this.massage = "";
    this.counter = 0;
  }
  // show which hamisphere
  wichSphere() {
    // Southern Hamisphere
    // Northern Hamisphere
    if (latitude > 0) {
      return "Northern Hamisphere";
    } else {
      return "Southern Hamisphere";
    }
  }
  // get most northern latitude and city
  getMostNorthern() {
    const allLatitude = this.cities
      .map(eachCity => eachCity.latitude)
      .filter(eachCity => eachCity !== undefined);
    const northernLatitude = Math.max(...allLatitude);
    const northernCities = this.cities.filter(eachCity =>
      eachCity.latitude === northernLatitude ? eachCity : undefined
    );
    return northernCities;
  }
  // get the most sothern latitude and city
  getMostSouthern() {
    const allLatitude = this.cities
      .map(eachCity => eachCity.latitude)
      .filter(eachCity => eachCity !== undefined);
    const southernLatitude = Math.max(...allLatitude);
    const southernCities = this.cities.filter(eachCity =>
      eachCity.latitude === southernLatitude ? eachCity : undefined
    );
    return southernCities;
  }
  // get city population
  cityPopulation() {
    const cityArray = [];
    this.cities.forEach(e => {
      cityArray.push(e.population);
      return cityArray;
    });
    const totalCityPopulation = cityArray.reduce(
      (acctual, current) => acctual + current
    );
    return totalCityPopulation;
  }
  // create new city
  createNewCity(name, province, latitude, longtitude, population) {
    this.cities.push(
      new City(name, province, latitude, longtitude, population, this.counter)
    );
    this.counter++;
  }
  removeCity(deleteCity) {
    this.cities = this.cities.filter(e => e.name != deleteCity);
  }
}

export { functions, City, ComunityControler };
