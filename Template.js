let menu = document.querySelector(".menu")
let nav = document.querySelector(".nav")
let bar = document.querySelector(".bar")
let linkpos = document.querySelector(".link-pos")

let header = document.querySelector(".Header")
let buttonBox = document.querySelector(".button-box")

menu.addEventListener("click", function () {
    linkpos.classList.toggle("active");
    bar.classList.toggle("active");
   
    menu.classList.toggle("active");
    nav.classList.toggle("active");
    header.classList.toggle("active");
    buttonBox.classList.toggle("active");
    
});
