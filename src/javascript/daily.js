
let name = { 
    fname: 'first',
    lname: 'last'
};
// let makeEmailObj = Object.values(name);
// const makeEmailObj = name.map(x => x*2);
// console.log(makeEmailObj);


//makeEmailArr
const functions = {
   makeEmailArr:(arr) =>{
        console.log(arr[0]);
        return (arr[0].toLowerCase() + '.'+ arr[1].toLowerCase() + "@evolveu.ca");
    },
};

















export default functions;