document.addEventListener("DOMContentLoaded", () => {
    const menuButton = document.querySelector(".menu-click");
    const menu = document.querySelector(".menu");
    menuButton.addEventListener("click", () => {
        if(menu.style.display === "none" || menu.style.display ==="") {menu.style.display = "block";}
            else menu.style.display = "none";
            })
        
    window.addEventListener('resize', () => {
        if(document.documentElement.clientWidth < 1440){
            menu.classList.remove("menu-container2");
            menu.classList.add("menu-container");
        }

       else{
            menu.classList.remove("menu-container");
            menu.classList.add("menu-container2");
        }
    })
    
})