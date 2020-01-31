const data = [
  {
    name: "Maricica",
    surname: "Ghinea",
    gender: "female",
    region: "Romania"
  },
  {
    name: "Nishant",
    surname: "Bhattarai",
    gender: "male",
    region: "Nepal"
  },
  {
    name: "Nicuță",
    surname: "Lotru",
    gender: "male",
    region: "Romania"
  },
  {
    name: "Barbara",
    surname: "Schneider",
    gender: "female",
    region: "United States"
  },
  {
    name: "Stanca",
    surname: "Grigoriu",
    gender: "female",
    region: "Romania"
  },
  {
    name: "Bella",
    surname: "Musker",
    gender: "female",
    region: "New Zealand"
  },
  {
    name: "Fabian",
    surname: "Dediu",
    gender: "male",
    region: "Romania"
  },
  {
    name: "Славчо",
    surname: "КОСТАДИНОВ",
    gender: "male",
    region: "Bulgaria"
  },
  {
    name: "Upendra",
    surname: "Ranjit",
    gender: "male",
    region: "Nepal"
  },
  {
    name: "Dumitra",
    surname: "Vicovean",
    gender: "female",
    region: "Romania"
  }
];

// //----------showDelayProblem-----

// function showDelayProblem() {
//     console.log('One');
//     setTimeout(() => { // Simulates a fetch
//         console.log("Two");
//     }, 1 * 1000);
//     console.log('Three'); // We have a problem Houston
// }
// showDelayProblem();

// // -----------ShowDelaySolution----

// async function showDelaySolution() {
//     try {
//         console.log('One');
//         const value = await // Simulate fetch
//         new Promise(
//             (resolve, reject) =>
//             setTimeout(() => resolve("Two"),
//                 1 * 1000));
//         // Now that we have the value we can use it.
//         console.log(value);
//         console.log('Three');
//     } catch (error) {
//         console.log(error);
//     }
// }
// console.log('Before: showDelaySolution');
// showDelaySolution();

// // ------------Fetch----------

// const functions = {

//     url: 'https://uinames.com/api/?amount=10',

//     getFirstName(data) {
//         return (data[0].name);
//     },

//     getAllFirstNames(data) {
//         return data.map((d, i, x) => d.name);
//     },

//     showDelayProblem() {
//         console.log('One');
//         setTimeout(() => { // Simulates a fetch
//             console.log("Two");
//         }, 1 * 1000);
//         console.log('Three'); // We have a problem Huston
//     },

//     async showDelaySolution() {
//         try {
//             console.log('One');
//             const value = await // Simulate fetch
//             new Promise(
//                 (resolve, reject) =>
//                 setTimeout(() => resolve("Two"),
//                     1 * 2000));
//             // Now that we have the value we can use it.
//             console.log(value);
//             console.log('Three');
//         } catch (error) {
//             console.log(error);
//         }
//     },

//     async getUsers() {
//         try {
//             const response = await fetch(functions.url);
//             const data = await response.json();
//             return data;
//         } catch (error) {
//             console.error('Error:', error);
//             throw (error);
//         }
//     },

//     async workWithData() {
//         const data = await functions.getUsers();
//         console.log(functions.getFirstName(data));
//         console.log(functions.getAllFirstNames(data));
//     },

// }

const functions = {
  url: "https://uinames.com/api/?amount=10",

  getFirstName(data) {
    return data[0].name;
  },

  getAllFirstNames(data) {
    return data.map((d, i, x) => d.name);
  },

  showDelayProblem() {
    console.log("One");
    setTimeout(() => {
      // Simulates a fetch
      console.log("Two");
    }, 1 * 1000);
    console.log("Three"); // We have a problem Huston
  },

  async showDelaySolution() {
    try {
      console.log("One");
      const value = await // Simulate fetch
      new Promise((resolve, reject) =>
        setTimeout(() => resolve("Two"), 1 * 2000)
      );
      // Now that we have the value we can use it.
      console.log(value);
      console.log("Three");
    } catch (error) {
      console.log(error);
    }
  },

  async getUsers() {
    try {
      const response = await fetch(functions.url);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error:", error);
      throw error;
    }
  },

  async workWithData() {
    const data = await functions.getUsers();
    console.log(functions.getFirstName(data));
    console.log(functions.getAllFirstNames(data));
  }
};
