let hamburger_menu = document.getElementById("hamburger_button")
let nav_bar = document.getElementById("navigation")
let hamburger_image = document.getElementById("hamburger_image")
nav_bar.style.display = "none"

hamburger_menu.onclick = function openMenu(){
    if(nav_bar.style.display == "none"){
        hamburger_menu.classList.toggle("change");
        nav_bar.style.display = "flex"
    }
    else{
        hamburger_menu.classList.toggle("change");
        nav_bar.style.display = "none"
    }
}

if(nav_bar.style.display != "none"){
    document.getElementById("body").onclick = function closeMenu(){
        console.log("WHY")
        nav_bar.style.display = "none"
    }
}
