document.addEventListener("DOMContentLoaded", () => {

    const validateForm = () => {
        const firstName = document.querySelector("#firstName");
        const lastName = document.querySelector("#lastName");
        const password = document.querySelector("#password");
        const email = document.querySelector("#email");
        const emailValue = email.value;
        const img1 = document.querySelector("#img1");
        const img2 = document.querySelector("#img2");
        const img3 = document.querySelector("#img3");
        const img4 = document.querySelector("#img4");
        const p1 = document.querySelector("#p1");
        const p2 = document.querySelector("#p2");
        const p3 = document.querySelector("#p3");
        const p4 = document.querySelector("#p4");
        const regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
       if(document.documentElement.clientWidth > 1100)
       {
            if(firstName.value === ""){
                firstName.style.border ="2px solid red";
                img1.style.display = "block";
                img1.style.top = "2.8rem";
                img1.style.right = "3rem";
                p1.style.display = "block";
                firstName.value = "";
            }

            if(lastName.value === ""){
                lastName.style.border ="2px solid red";
                img2.style.display = "block";
                img2.style.top = "6.8rem";
                img2.style.right = "3rem";
                p2.style.display = "block";
                lastName.value = "";
            }

            if(password.value === ""){
                password.style.border ="2px solid red";
                img4.style.display = "block";
                img4.style.top = "14.8rem";
                img4.style.right = "3rem";
                p4.style.display = "block";
                password.value = "";
            }

            if(regex.test(emailValue)){
                emailValue = "";
            }

            else if(regex.test(emailValue)===false){
                email.style.border = "2px solid red";
                img3.style.display = "block";
                img3.style.top = "10.7rem";
                img3.style.right = "3rem";
                p3.style.display = "block";
            }
        }

        else{
            if(firstName.value === ""){
                firstName.style.border ="2px solid red";
                img1.style.display = "block";
                img1.style.top = "1.6rem";
                img1.style.right = "2.2rem";
                p1.style.display = "block";
                firstName.value = "";
            }

            if(lastName.value === ""){
                lastName.style.border ="2px solid red";
                img2.style.display = "block";
                img2.style.top = "4.8rem";
                img2.style.right = "2.2rem";
                p2.style.display = "block";
                lastName.value = "";
            }

            if(password.value === ""){
                password.style.border ="2px solid red";
                img4.style.display = "block";
                img4.style.top = "11.15rem";
                img4.style.right = "2.2rem";
                p4.style.display = "block";
                password.value = "";
            }

            if(regex.test(emailValue)){
                emailValue = "";
            }

            else if(regex.test(emailValue)===false){
                email.style.border = "2px solid red";
                img3.style.display = "block";
                img3.style.top = "7.95rem";
                img3.style.right = "2.2rem";
                p3.style.display = "block";
            }

        }
    

    }
    const button = document.querySelector("#form");
    button.addEventListener("submit",validateForm);
})

