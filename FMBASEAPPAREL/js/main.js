window.onload = function(){
    const emailValue = document.querySelector("#email").value;
    const errorInfo = document.querySelector("#info");
    const emailTextArea = document.querySelector("#email");
    const errorIcon = document.querySelector("#error");
    let regex = /\S+@\S+\.\S+/;
const validateForm = () => {
    if(regex.test(emailValue)){
        emailValue = "";
    }
    else{
        showError();
    }
}  

const showError = () => {
    errorInfo.style.display = "block";
    errorIcon.style.display = "block";
    emailTextArea.style.border = "2px solid red";
}

const form = document.querySelector("#form");
form.addEventListener("submit", validateForm);
}