const functions = {
    helloWorld: () => {
        return ("Hello world from here!");
    },
    balanceGreater: (fakeObjArr) => {
        return [2500];
    }
};
class City {
    constructor(province, name, latitude, longitude, population) {
        this.province = province;
        this.name = name;
        this.latitude = latitude;
        this.longitude = longitude;
        this.population = population;
    }

    show() {
        return `Province:${this.province}, Name:${this.name}, Latitude:${this.latitude}, Longitude: ${this.longitude}, Population: ${this.population}`
    }

    movedIn(n) {
        this.pop += parseInt(n);

    }

    movedOut(n) {
        this.pop -= parseInt(n);
    }
    howBig() {

        if (this.population > 100000) return "Big City";
        else if (this.population > 20000) return "Large town";
        else if (this.population > 1000) return "Town";
        else if (this.population > 100) return "Village";
        else return "Hamlet";

    }

}

class CityControler {
    constructor(cityName) {
        this.cities = [];
        this.massage = "";
        this.counter = 0;
    }
    createNewCity(province, name, latitude, longtitude, population) {
        this.cities.push(new City(province, latitude, longtitude, population, this.counter));
        this.counter++;
    }
    removeCity(deleteCity) {
        this.cities = this.cities.filter((e) => e.name != deleteCity);
    }

    cityPopulation() {
        const cityArray = [];
        this.cities.forEach(e => {
            cityArray.push(e.population);
            return cityArray;
        });
        const totalCityPopulation = cityArray.reduce((acctual, current) => acctual + current);
        return totalCityPopulation;
    }

    wichSphere() {
        // Southern Hamisphere
        // Northern Hamisphere

    }

    getMosNorthem() {


    }

    getMostSouthern() {

    }



}













export {
    functions,
    City,
    CityControler,
}