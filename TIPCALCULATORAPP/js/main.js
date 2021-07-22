
var tip = 0;
document.addEventListener("input", () => {
    const error = document.querySelector(".error");
    const total = document.querySelector(".total");
    const tipAmount = document.querySelector(".tip-amount");
    let bill = document.querySelector('#bill').value;
    let elements = document.querySelectorAll('button');
    let numberOfPeople = document.querySelector('#people').value;
    let people = document.querySelector('#people');
    if( numberOfPeople === "" || numberOfPeople ==="0"){
        people.style.border = " 2px solid red";
        if(numberOfPeople === "")
        {
            error.innerHTML = "Can't be empty ";
        }
        else if( numberOfPeople === "0")
        {
            error.innerHTML = "Can't be zero ";
        }
    }
    else{
        error.innerHTML = "";
        people.style.border = "none";
        let tipAmountPerPerson = (Number(bill)*Number(tip)) / (100 * Number(numberOfPeople));
        tipAmountPerPerson = tipAmountPerPerson.toFixed(2);
        let tipAmountValue = (bill*tip) / 100;
        tipAmount.innerHTML = '$' + tipAmountPerPerson;
        let result = ((Number(bill) + Number(tipAmountValue)) / Number(numberOfPeople)).toFixed(2);
        total.innerHTML ='$' + result;
    }
})

function active(target) {
    const error = document.querySelector(".error");
    const total = document.querySelector(".total");
    const tipAmount = document.querySelector(".tip-amount");
    let bill = document.querySelector('#bill').value;
    let elements = document.querySelectorAll('button');
    let numberOfPeople = document.querySelector('#people').value;
    let people = document.querySelector('#people');
    for (let i = 0; i < elements.length; i++) {
      document.querySelectorAll('button')[i].classList = "";
    }
    document.getElementById(target).classList.add('selected');
    tip = target;
    if( numberOfPeople === "" || numberOfPeople ==="0"){
        people.style.border = " 2px solid red";
        if(numberOfPeople === "")
        {
            error.innerHTML = "Can't be empty ";
        }
        else if( numberOfPeople === "0")
        {
            error.innerHTML = "Can't be zero ";
        }
    }
    else{
        error.innerHTML = "";
        let tipAmountPerPerson = (Number(bill)*Number(tip)) / (100 * Number(numberOfPeople));
        tipAmountPerPerson = tipAmountPerPerson.toFixed(2);
        let tipAmountValue = (bill*tip) / 100;
        tipAmount.innerHTML = '$' + tipAmountPerPerson;
        let result = ((Number(bill) + Number(tipAmountValue)) / Number(numberOfPeople)).toFixed(2);
        total.innerHTML ='$' + result;
    }
  }

function reset() {
        const total = document.querySelector(".total");
        const tipAmount = document.querySelector(".tip-amount");
        let bill = document.querySelector("#bill");
        let people = document.querySelector("#people");
        let elements = document.querySelectorAll('button');
        total.innerHTML = `$0.00`;
        tipAmount.innerHTML = `$0.00`;
        people.value = "";
        bill.value = "";
        for (let i = 0; i < elements.length; i++) {
            document.querySelectorAll('button')[i].classList = "";
          }
    }
