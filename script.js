function clickBox(e){
let boxColor=e.currentTarget.querySelector("h3").textContent
document.getElementById("box").style.background=boxColor

document.getElementById("text").textContent="hi, my name is "  + boxColor;
}

let blue=document.getElementById("blue"),
    green=document.getElementById("green"),
    red=document.getElementById("red");
    
    blue.addEventListener("click",  
    clickBox)
    green.addEventListener("click", 
    clickBox)
    red.addEventListener("click",
    clickBox)
