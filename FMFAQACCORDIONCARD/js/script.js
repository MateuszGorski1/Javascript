document.addEventListener("DOMContentLoaded", ()=>{
    const para = document.querySelectorAll('.question');
        para.forEach(item =>{
            item.addEventListener('click', () => {
                const question = item.parentNode.children[1];
            if(item.style.fontWeight=="" || item.style.fontWeight == "400") 
            {
                item.style.fontWeight= "700";
                item.style.color = "hsl(14, 88%, 65%)";
                item.children[0].style.transform = 'rotate(180deg)';
                question.style.display = "block";
            }
            else{
                item.style.fontWeight= "400";
                question.style.display = "none";
                item.children[0].style.transform = 'rotate(0deg)';
                item.style.color ="hsl(237, 12%, 33%)"
            }
            })
        }
        )

});
