const functions = {
    multiplyNumbers: () => {
        let a = 2;
        let b = 2;
        if (a * b <= 8) {
            return a * b;
        }
    },
    stringName: () => {
        let fname = "John";
        let massage = fname.concat(" " + "Is a teatcher in our school");
        return massage;
    },
    boolean: (a, b) => {
        return a !== b;
    },

    bestCars: () => {
        const cars = ["Toyota", "Ford", "BMW"];
        cars.splice(0, 2);
        return cars;
    },
    custInfo: info => {
        switch (info) {
            case "name":
                return ["Mike", "Bill"];
            case "Age":
                return [34, 23];
            case "AccNumber":
                return [237702, 33400];
            default:
                return 237702;
        }
    },
    returnUndefined: () => {
        const carsModels = {
            names: ["ford", "Honda", "Fiat"],
            models: ["Focus", "Civic", "Oto"],
            makeYear: [2013, 2019, 1978]
        };
        if (typeof carsModels[2] > 2020) {
            return undefined;
        }
    },
    getTime: () => {
        let hours = new Date().getHours();
        let timeOfDay;
        if (hours > 12) {
            timeOfDay = "Morning";
            return "Good morning";
        } else {
            timeOfDay = "Afternoon";
            return "You are running late";
        }
    },
    paramaters: (a = 3, b = 5) => {
        return Number(a * b);
    },
    returnFunction: () => {
        let x = 4;
        let y = 2;
        return x * y;
    },
    arrayUnshift: () => {
        let list = ["cat", "dog", "goat"];
        let newList = list.unshift(["bird"]);
        return newList;
    },
    arrayConcar: () => {
        let faveFood = ["spegeti", "rice", "steak"];
        let food = faveFood.concat(["chicken"]);
        return food;
    },
    updateArray: () => {
        let fruits = ["Banana", "Orange", "Apple", "Mango"];
        let v = fruits.valueOf();
        return v;
    },
    makeBasicLoop: () => {
        let array1 = [];
        for (let i = 0; i <= 6; i++) {
            array1.push(i);
        }
        return array1;
    },
    makeForInLoop: obj => {
        let person = {
            name: "Mark",
            Age: 23,
            Occupation: "Lawyer"
        };
        let personalInfo = "";
        let i;
        for (i in person) {
            personalInfo += person[i] + "";
        }
        return personalInfo;
    },
    makeDoWhileLoop: () => {
        let counter = 5;
        do {
            return counter;
            counter++;
        } while (counter > 0);
    },
    makeBasicWhileLoop: () => {
        let nums = 6;
        while (nums < 7) {
            return nums;
            nums++;
        }
    },
    makeForeach: () => {
        const array = [1, 2, 10, 17];
        const double = [];
        const newArray = array.forEach(num => {
            double.push(num * 2);
        });
        return double;
    },

    objectDictonaries: () => {
        const user = {
            name: "John",
            age: 34,
            hoppies: "reading",
            isSingle: true
        };
        return (user.isSingle);
    },

};

export default functions;
