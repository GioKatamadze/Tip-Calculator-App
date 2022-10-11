const tipButtons = Array.from(document.querySelectorAll(".tipbtn"));
let bill = document.getElementById("billAmount");
let people = document.getElementById("peopleAmount");
let reset = document.getElementById("reset");
let customTip = document.getElementById("customAmount");
let tipPerPerson = document.querySelector(".tipPerPersonDigits");
let totalPerPerson = document.querySelector(".totalPerPersonDigits");
let tipNumber;


// Calculation Functions

function calcFromBill () {
    tipPerPerson.textContent = parseFloat((bill.value * 0.05) / 1 ).toFixed(2); 
    totalPerPerson.textContent = parseFloat((bill.value / 1) + (bill.value * 0.05) / 1).toFixed(2);  
}

function calcFromPeople () {
    tipPerPerson.textContent = parseFloat((bill.value * 0.05) / people.value ).toFixed(2); 
    totalPerPerson.textContent = parseFloat((bill.value / people.value) + (bill.value * 0.05) / people.value).toFixed(2);  
}

function calcFromTip () {
    tipPerPerson.textContent = parseFloat((bill.value * tipNumber) / people.value ).toFixed(2); 
    totalPerPerson.textContent = parseFloat((bill.value / people.value) + (bill.value * tipNumber) / people.value).toFixed(2); 
}




// Number and Button Configurer

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

function enableButton () {
    if (bill.value > 0) {
        reset.style.backgroundColor = "#9FE8DF";
        reset.style.color = "#00474B";
    }  
    if (people.value > 0) {
        reset.style.backgroundColor = "#9FE8DF";
        reset.style.color = "#00474B";
    } 
};






// Valiation Functions

function billValidation () {
    if (bill.value < 0) {
        bill.value = "";
        bill.style.border = "4px solid red"
        tipPerPerson.textContent = "0.00";
        totalPerPerson.textContent = "0.00";
        reset.style.backgroundColor = "#9FE8DF";
        reset.style.color = "#00474B";
        document.getElementById("zero1").style.display = "block";
        document.getElementById("zero1").style.marginBottom = "-20px"
        document.getElementById("high1").style.display = "none";   
    }

    if (bill.value > 0 && bill.value < 1000000) {
        document.getElementById("high1").style.display = "none";
        document.getElementById("zero1").style.display = "none";
        bill.style.border = "";
    }

    if (bill.value > 1000000) {
        bill.value = 1000000;
        bill.style.border = "4px solid red"
        tipPerPerson.textContent = "0.00";
        totalPerPerson.textContent = "0.00";
        enableButton ();
        document.getElementById("high1").style.display = "block";
        document.getElementById("high1").style.marginBottom = "-20px"
        document.getElementById("zero1").style.display = "none";
    }
}

function peopleValidation () {
    if (people.value < 0) {
        people.value = "";
        people.style.border = "4px solid red"
        tipPerPerson.textContent = "0.00";
        totalPerPerson.textContent = "0.00";
        reset.style.backgroundColor = "#9FE8DF";
        reset.style.color = "#00474B";
        document.getElementById("zero2").style.display = "block";
        document.getElementById("zero2").style.marginBottom = "-20px"
        document.getElementById("high2").style.display = "none";
    }

    if (people.value > 0 && people.value < 1000000) {
        document.getElementById("high2").style.display = "none";
        document.getElementById("zero2").style.display = "none";
        people.style.border = "";
    }

    if (people.value > 1000000) {
        people.value = 1000000;
        people.style.border = "4px solid red"
        tipPerPerson.textContent = "0.00";
        totalPerPerson.textContent = "0.00";
        enableButton ();
        document.getElementById("high2").style.display = "block";
        document.getElementById("high2").style.marginBottom = "-20px"
        document.getElementById("zero2").style.display = "none";
    }
}

function customTipValidation () {
    if (customTip.value > 99999) {
        customTip.value = 99999;
        customTip.style.border = "4px solid red"
        tipPerPerson.textContent = "0.00";
        totalPerPerson.textContent = "0.00";
    }

    if (customTip.value > 0 && customTip.value < 99999) {
        customTip.style.border = ""
    }

    if (customTip.value <= 0) {
        customTip.value = "";
        customTip.style.border = "4px solid red"
        tipPerPerson.textContent = "0.00";
        totalPerPerson.textContent = "0.00";
    }
    reset.style.backgroundColor = "#9FE8DF";
    reset.style.color = "#00474B";
}






// Calculator Process

disableButton();

for (let i = 0; i < tipButtons.length ; i ++) {
    tipButtons[i].addEventListener("click", function (event) {
        if (bill.value > 0 && bill.value < 9999999 && people.value > 0 && people.value < 999999) {
            tipNumber = parseFloat(event.target.textContent) / 100;
            calcFromTip ();
            enableButton(); 
            noNumber () ;
            bill.style.border = "";
            people.style.border = "";
        }
    });
    billValidation ();
    peopleValidation();
};

customTip.addEventListener("input", function () {
    if (bill.value > 0 && bill.value < 9999999 && people.value > 0 && people.value < 999999) {
        tipNumber = customTip.value / 100; 
        enableButton();
        calcFromTip ();
        noNumber ();
        bill.style.border = "";
        people.style.border = "";
    };
    billValidation ();
    peopleValidation();
    customTipValidation ();
});

bill.addEventListener("input", function() {
    if (bill.value > 0 && bill.value < 9999999 && people.value > 0 && people.value < 999999) {
        calcFromBill ();
        noNumber ();
        reset.style.backgroundColor = "#9FE8DF";
        reset.style.color = "#00474B";
        bill.style.border = "";
        people.style.border = "";
    };
    billValidation ();
    if (bill.value <= 0 ) {
        bill.value = "";
    };
});

people.addEventListener("input", function () {
    if (bill.value > 0 && bill.value < 9999999 && people.value > 0 && people.value < 999999) {
        calcFromPeople ();
        noNumber ();
        reset.style.backgroundColor = "#9FE8DF";
        reset.style.color = "#00474B";
        bill.style.border = "";
        people.style.border = "";
    };
    peopleValidation();
    if (people.value <= 0 ) {
        people.value = "";
    };
});





// Reset

reset.onclick = function () {
    disableButton();
    bill.value = "";
    people.value = "";
    customTip.value = "";
    bill.style.border = "";
    people.style.border = "";
    customTip.style.border = ""
    tipPerPerson.textContent = "0.00";
    totalPerPerson.textContent = "0.00";
    document.getElementById("high1").style.display = "none";
    document.getElementById("high2").style.display = "none";
    document.getElementById("zero1").style.display = "none";
    document.getElementById("zero2").style.display = "none";
}
