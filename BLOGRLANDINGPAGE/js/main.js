document.addEventListener("DOMContentLoaded", () =>{
    const menu = document.querySelector(".menu");
    const menus = document.querySelectorAll("#menus");
    if(document.documentElement.clientWidth>=1420){
        menu.classList.remove("menu");
        menu.classList.add("menu2");
    }
    
    menus.forEach( item => {
        item.addEventListener("click", () => {
            const submenu = document.querySelector(`.${item.nextSibling.nextSibling.className}`);
            const imgs = document.querySelectorAll("img[id*='img']");
            const clear = document.querySelectorAll("div[class*='submenu']");
            const img = item.children[0].id;
            const className = submenu.className;

            clear.forEach( submenus => {
                if(submenus.className!=className){
                submenus.style.display = "none";
                if(document.documentElement.clientWidth<=1420)  menu.style.padding.top = "2rem";
                }
            })

            imgs.forEach( images => {
                if(images.id!=img){
                    console.log(images.style.transform)
                    if(images.style.transform == "rotate(180deg)"){
                        images.style.transform = "rotate(0deg)";
                    }
                }
            })

            if(submenu.style.display == "none" || submenu.style.display == ""){
                if(document.documentElement.clientWidth<=1420)  menu.style.paddingTop = "2rem";
                submenu.style.display = "flex";
                item.children[0].style.transform= "rotate(180deg)";
            }
            else {
                if(document.documentElement.clientWidth<=1420)  menu.style.paddingTop = "10rem";
                submenu.style.display = "none";
                item.children[0].style.transform= "rotate(0deg)";
            }

        })
    })

    window.addEventListener('resize', () => {
        if(document.documentElement.clientWidth>=1420){
            menu.classList.remove("menu");
            menu.classList.add("menu2");
        }
        else {
            menu.classList.add("menu");
            menu.classList.remove("menu2");
        }
    })
    

})