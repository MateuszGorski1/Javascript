document.addEventListener("DOMContentLoaded", () => {
   const activeShare = document.querySelector(".icon-container");
   const shareItem = document.querySelector(".share-container");
   const icon = document.querySelector(".share-container .icon");
   const iconContainer = document.querySelector (".share-container .icon-container")
   activeShare.addEventListener("click",() => {
    shareItem.style.backgroundColor = "hsl(217, 19%, 35%)";
    shareItem.style.visibility = "visible";
    iconContainer.addEventListener("click", () => {
        shareItem.style.visibility = "hidden";
    })
   })
   

});
