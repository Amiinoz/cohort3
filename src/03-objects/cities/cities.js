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

        if (this.population > 100000) return "City";
        else if (this.population > 20000) return "Large town";
        else if (this.population > 1000) return "Town";
        else if (this.population > 100) return "Village";
        else return "Hamlet";

    }

}

class CityControler {
    constructor() {
        this.cities = [];
        this.massage = "";
    }
}













export {
    functions,
    City,
    CityControler,
}