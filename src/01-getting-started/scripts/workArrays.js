const workArraysFunctions = {
  helloWorld: () => {
    // console.log("hello from work arrays");
  },

  addArray: () => {
    console.log("clicked");
    var myarr = [];
       myarr.push(document.getElementById("inp").value);
       console.log(myarr); //to confirm it has been added to the array

       

    // let items = [];
 ß 
    // if (typeof(arrInput) === "number"){
    //    items.push(arrInput);
    //    massValue = arrInput + " has been added to the array";
    // }else{
    //    massValue = "the input is not a valid number";
    // }
  
}
};

export default workArraysFunctions;
