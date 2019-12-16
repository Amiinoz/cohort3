const functions = {

    helloWorld: () => {
        return "Hello world from here!";
    },
    balanceGreater: objArr => {
        return [2500];
    },
    // ----- initial test
    getFirstName(data) {
        return (data[0].name);
    },
    getAllFirstNames(data) {
        return data.map((d, i, x) => d.name);
    },
}


export default functions;