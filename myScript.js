const bill = document.getElementById("billAmount");
const people = document.getElementById("peopleAmount");
const reset = document.getElementById("reset");
const tipButtons = Array.from(document.querySelectorAll(".tipbtn"));
const tip5 = document.getElementById("tip5");

let customTip = document.getElementById("customAmount");
let tipPerPerson = document.querySelector(".tipPerPersonDigits");
let totalPerPerson = document.querySelector(".totalPerPersonDigits");

let tipPerPersonResult;
let totalPerPersonResult;
let billValue = bill.value;
let peopleValue = people.value;
let tipNumber;



bill.addEventListener("input", function () {  
    billValue = parseFloat(bill.value); 
    peopleValue = parseFloat(people.value);

    tipPerPerson.textContent = parseFloat((billValue * tipNumber) / peopleValue ).toFixed(2); 
    totalPerPerson.textContent = parseFloat((billValue / peopleValue) + (billValue * tipNumber) / peopleValue ).toFixed(2);  


    if (isNaN (tipPerPerson.textContent)) {
        tipPerPerson.textContent = "0.00";
    }
    if (isNaN (totalPerPerson.textContent)) {
        totalPerPerson.textContent = "0.00";
    }
});
 


people.addEventListener("input", function () {
    billValue = parseFloat(bill.value); 
    peopleValue = parseFloat(people.value);
    peopleValue = parseFloat(event.target.textContent)

    tipPerPerson.textContent = parseFloat((billValue * tipNumber) / peopleValue ).toFixed(2); 
    totalPerPerson.textContent = parseFloat((billValue / peopleValue) + (billValue * tipNumber) / peopleValue ).toFixed(2);    


    if (isNaN (tipPerPerson.textContent)) {
        tipPerPerson.textContent = "0.00";
    }
    if (isNaN (totalPerPerson.textContent)) {
        totalPerPerson.textContent = "0.00";
    }
});



for (let i = 0; i < tipButtons.length ; i ++) {
    tipButtons[i].addEventListener("click", function (event) {
        billValue = parseFloat(bill.value); 
        peopleValue = parseFloat(people.value);
        tipNumber = parseFloat(event.target.textContent) / 100;

        tipPerPerson.textContent = parseFloat((billValue * tipNumber) / peopleValue ).toFixed(2); 
        totalPerPerson.textContent = parseFloat((billValue / peopleValue) + (billValue * tipNumber) / peopleValue ).toFixed(2);    
         
        
        if (isNaN (tipPerPerson.textContent)) {
            tipPerPerson.textContent = "0.00";
        }
        if (isNaN (totalPerPerson.textContent)) {
            totalPerPerson.textContent = "0.00";
        }
    });
   
}; 

customTip.addEventListener("input", function () {
    billValue = parseFloat(bill.value); 
    peopleValue = parseFloat(people.value);
    tipNumber = customTip.value / 100; 

    tipPerPerson.textContent = parseFloat((billValue * tipNumber) / peopleValue ).toFixed(2); 
    totalPerPerson.textContent = parseFloat((billValue / peopleValue) + (billValue * tipNumber) / peopleValue ).toFixed(2); 

    if (isNaN (tipPerPerson.textContent)) {
        tipPerPerson.textContent = "0.00";
    }
    if (isNaN (totalPerPerson.textContent)) {
        totalPerPerson.textContent = "0.00";
    }
});



reset.onclick = function () {
    bill.value = "";
    people.value = "";
    customTip.value = "";
    tipPerPerson.textContent = "0.00";
    totalPerPerson.textContent = "0.00";
   
};








