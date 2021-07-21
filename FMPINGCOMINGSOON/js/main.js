document.addEventListener("DOMContentLoaded", ()=>
{
    const form = document.querySelector("#form");
    let email = document.querySelector("#email");
    let error = document.querySelector(".error");

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(regex.test(email.value)){
            success();
        }
        else{
            errorMessage();
        }
    })

    function errorMessage() {
        email.style.border = "1px solid red";
        error.style.display = "block";
    }

    function success(){
        window.location.reload(false);
        email.value = "";
        alert("You've been successfully added to newsletter!");
    }

})