let bill = document.getElementById("billAmount");
let people = document.getElementById("peopleAmount");
let reset = document.getElementById("reset");
const tipButtons = Array.from(document.querySelectorAll(".tipbtn"));
const tip5 = document.getElementById("tip5");
let customTip = document.getElementById("customAmount");
let tipPerPerson = document.querySelector(".tipPerPersonDigits");
let totalPerPerson = document.querySelector(".totalPerPersonDigits");
let tipNumber;







function calcFromBill () {
    tipPerPerson.textContent = parseFloat((bill.value * `0.05`) / 1 ).toFixed(2); 
    totalPerPerson.textContent = parseFloat((bill.value / 1) + (bill.value * `0.05`) / 1 ).toFixed(2);  
}

function calcFromPeople () {
    tipPerPerson.textContent = parseFloat((bill.value * `0.05`) / people.value ).toFixed(2); 
    totalPerPerson.textContent = parseFloat((bill.value / people.value) + (bill.value * `0.05`) / people.value).toFixed(2);  
}

function calcFromTip () {
    tipPerPerson.textContent = parseFloat((bill.value * tipNumber) / people.value ).toFixed(2); 
    totalPerPerson.textContent = parseFloat((bill.value / people.value) + (bill.value * tipNumber) / people.value).toFixed(2); 
}

function noNumber () {
    if (isNaN (tipPerPerson.textContent)) {
        tipPerPerson.textContent = "0.00";
    }
    if (isNaN (totalPerPerson.textContent)) {
        totalPerPerson.textContent = "0.00";
    }
};











let disableButton = () => {
    reset.style.backgroundColor = "#0D686D";
    reset.style.color = "rgba(0, 71, 75, 0.35)";
};

let enableButton = () => {
    reset.style.backgroundColor = "#9FE8DF";
    reset.style.color = "#00474B";
};
let activetip5 = () => {
    tip5.style.backgroundColor = "#9FE8DF";
    tip5.style.color = "#00474B"
}










disableButton();

bill.addEventListener("input", function() {
    activetip5();
    people.value = "1";
    calcFromBill ()
    enableButton();
    noNumber ()
    

    people.addEventListener("input", function () {
        activetip5();
        calcFromPeople () 
        enableButton();
        noNumber ()
    });
});





for (let i = 0; i < tipButtons.length ; i ++) {
    tipButtons[i].addEventListener("click", function (event) {
        tipNumber = parseFloat(event.target.textContent) / 100;
        calcFromTip ()
        enableButton(); 
        noNumber () 
         
        customTip.addEventListener("input", function () {
            tipNumber = customTip.value / 100; 
            calcFromTip ()
            enableButton();
            noNumber ()
        });
    });
   
};









reset.onclick = function () {
    bill.value = "";
    people.value = "";
    customTip.value = "";
    tipPerPerson.textContent = "0.00";
    totalPerPerson.textContent = "0.00";
    disableButton();
}
