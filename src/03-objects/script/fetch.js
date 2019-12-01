const functions = {

    helloWorld: () => {
        return "Hello world from here!";
    },
    balanceGreater: objArr => {
        return [2500];
    },
    // ----- initial test

    getFirstName: (data) => {
        const name = [];
        const newName = data.forEach(name => {
            return (name[0]);
        });

    }


}


export default functions;