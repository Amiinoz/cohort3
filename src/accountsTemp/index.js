import {
    functions,
    Account,
    ActControler,
} from "./account.js";


const container = document.getElementById('accounts');
const accHolder = document.getElementById('idAccName');
const accType = document.getElementById('AccType');
const accSave = document.getElementById('idSave');
const accChek = document.getElementById('idCheck');
const rumFund = document.getElementById('idRum');

const addAcc = document.getElementById('idAddAcc');


container.addEventListener('click', function () {
    console.log(event)

    if (event.target.id === "idAddAcc") {
        console.log("hello world from add account");
        if (idAccName.value === "") {
            accHolder.textContent = "Please enter an account name.";
        } else {
            let accHolder = 
        }
    }




});