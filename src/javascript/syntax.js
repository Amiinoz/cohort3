const functions = {

        // number
        multiplyNumbers: () => {
            let a = 2;
            let b = 2;
            if (a * b <= 8) {
                return (a * b);
            }
        },
        // string
        stringName: () => {
            let fname = "John";
            let massage = fname.concat(" " + "Is a teatcher in our school");
            return (massage);
        },
        // boolean
        boolean: (a, b) => {
            return a !== b;
        },
        // array 
        bestCars: () => {
            const cars = ['Toyota', 'Ford', 'BMW'];
            cars.splice(0, 2);
            return (cars);
        },
        // dictionary / objects
        custInfo: (info) => {
            switch (info) {
                case 'name':
                    return ['Mike', 'Bill'];
                case 'Age':
                    return [34, 23];
                case 'AccNumber':
                    return [237702, 33400];
                default:
                    return (237702);
                    //   return ('AccNumber'[0]);
            }
        },
        // undefined
        returnUndefined: () => {
            const carsModels = {
                names: ['ford', 'Honda', 'Fiat'],
                models: ['Focus', 'Civic', 'Oto'],
                makeYear: [2013, 2019, 1978],
            }
            if (typeof carsModels[2] > 2020) {
                return (undefined);
            }
        },
        // sample if / else
        usingIfElse: () => {
            const x = 12;
            const y = 10;
            const z = x + y;

            if (x < y) {
                console.log("x is greater then y")
            } else {
                return (z);
            }
        },
        // functions
        // getTime: () => {
        //     let hours = new Date().getHours();
        //     let timeOfDay;
        //     if (hours < 12) {
        //         timeOfDay = "Morning"
        //         console.log(" Good morning");
        //     } else {
        //         timeOfDay = "Afternoon"
        //         console.log("You are running late");
        //     }
        // },
        checkAge: () => {
            
        }






//TODO:

// parameters
// returns

//TODO:
// arrays
// add to the front
// add to the end
// update values

//TODO:
// loops 
// for
// for/in
// while
// do while
// forEach (with array and function)
//TODO:
// Objects / Dictionaries
// declare object
// lookup key to retrieve value
};

export default functions;
