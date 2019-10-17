import { objectExpression } from "@babel/types";





const functions = {



makeEmailObj:(obj) => {
    // console.log("obj.first");
    return (obj.fname.toLowerCase() + "." + obj.lname.toLowerCase() + "@evolveu.ca");
},




   makeEmailArr:(arr) =>{
        console.log(arr[0]);
        return (arr[0].toLowerCase() + '.'+ arr[1].toLowerCase() + "@evolveu.ca");
    },
};

















export default functions;