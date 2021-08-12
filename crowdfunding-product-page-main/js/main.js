document.addEventListener("DOMContentLoaded", () =>{
    const menuButton = document.querySelector(".hamburger");
    const menu = document.querySelector(".menu-content");
    const container = document.querySelector(".container");
    const about = document.querySelector("a[href='#about']");
    const discover = document.querySelector("a[href='#discover']");
    const getStarted = document.querySelector("a[href='#getstarted']");
    const aboutContent = document.querySelector(".about");
    const discoverContent = document.querySelector(".discover");
    const getStartedContent = document.querySelector(".header-container");
    const bookmark = document.querySelector(".bookmark");
    const bookmarkText = document.querySelector(".bookmarkdiv");
    const bookmarkImg = document.querySelector("#bookmarkimg");
    const displayModal = document.querySelector("#displaymodal");
    const modal = document.querySelector(".modal-container");
    const closeMenu = document.querySelector("#closemenu");
    const radio = document.querySelectorAll(".radio-container");
    const inputs = document.querySelectorAll("input[name='pledge']");
    const pledges = document.querySelectorAll(".pledge-container");
    const options = document.querySelectorAll(".option");
    const optionContainer = document.querySelectorAll(".option-footer");
    const success= document.querySelector(".success-modal");
    const finish = document.querySelectorAll(".continue");
    const gotit = document.querySelector("#gotit");

    radio.forEach( item => {
        item.addEventListener("click", () =>{
            pledges.forEach( pledge => {
                pledge.style.display = "none";
            })
            options.forEach(option => { 
                option.style.border = "1px solid hsl(0, 0%, 68%)";
            })
            inputs.forEach(input => {
                input.checked = "false";
            })
            item.parentNode.children[3].style.display = "flex";
            item.parentNode.style.border = "2px solid hsl(176, 50%, 47%)";
            item.children[0].checked = "true";
        })
       
    })

    menuButton.addEventListener("click", () => {
        if(menu.style.display == "block"){
            menu.style.display = "none";
            menuButton.classList.add("hamburger");
            menuButton.classList.remove("hamburger2");
            container.style.filter =" brightness(100%)";
        }
        else{
            menu.style.display = "block";
            menuButton.classList.add("hamburger2");
            menuButton.classList.remove("hamburger");
            container.style.filter =" brightness(70%)";
        }
    })

    about.addEventListener("click", () =>{
        aboutContent.scrollIntoView();
    })

    discover.addEventListener("click", () =>{
        discoverContent.scrollIntoView();
    })

    getStarted.addEventListener("click", () =>{
        getStartedContent.scrollIntoView();
    })

    displaymodal.addEventListener("click", () => {
        modal.style.display = "block";
        container.style.filter =" brightness(70%)";
        optionContainer.forEach(option => {
            option.style.pointerEvents = "none";
        })
    })

    closeMenu.addEventListener("click", () => {
        modal.style.display = "none";
        container.style.filter =" brightness(100%)";
        optionContainer.forEach(option => {
            option.style.pointerEvents = "auto";
        })
    })

    finish.forEach(button => {
        button.addEventListener("click", () =>{
            let inputValue = button.parentNode.children[1];
            let error = button.parentNode.children[3];
            error.style.display = "none";
            if(inputValue.defaultValue > inputValue.value ){
                inputValue.style.border = "1px solid red";
                error.style.display = "block";
            }
            else{
                inputValue.style.border = "1px solid hsl(0, 0%, 68%)";
                inputValue.value = inputValue.defaultValue;
                error.style.display = "none";
                setTimeout(function(){success.style.display = "flex";}, 1000);
                modal.style.display = "none";
                gotit.addEventListener("click", () =>{
                success.style.display = "none";
                container.style.filter =" brightness(100%)";
                optionContainer.forEach(option => {
                    option.style.pointerEvents = "auto";
                })
            })
            }
        })

    })

    bookmark.addEventListener("click", () => {
        console.log(bookmarkText.style.color )
        if(bookmarkText.style.color == "rgb(60, 180, 172)")
        {
            bookmarkText.style.color = "hsl(0, 10%, 25%)";
            bookmarkImg.style.filter ="none";
            bookmarkText.innerHTML = "Bookmark";
        }
        else
        {
            bookmarkText.style.color = "hsl(176, 50%, 47%)";
            bookmarkImg.style.filter ="invert(82%) sepia(10%) saturate(2821%) hue-rotate(119deg) brightness(80%) contrast(71%)";
            bookmarkText.innerHTML = "Bookmarked";
        }

    })

})