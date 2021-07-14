document.addEventListener("DOMContentLoaded", ()=>{
    const img = document.querySelectorAll('.img');
    img.forEach(item =>{
    item.addEventListener('click', () => {
        const parent = item.parentNode;
        const question = parent.parentNode.children[1];
       if(parent.style.fontWeight=="" || parent.style.fontWeight == "400") 
       {
        parent.style.fontWeight= "700";
        parent.style.color = "hsl(14, 88%, 65%)"
        item.style.transform = 'rotate(180deg)';
        question.style.display = "block";
       }
       else{
        parent.style.fontWeight= "400";
        item.style.transform = 'rotate(0deg)';
        question.style.display = "none";
        parent.style.color ="hsl(237, 12%, 33%)"
       }
    })
}
)

});
