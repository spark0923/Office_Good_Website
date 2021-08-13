let hamburger_menu = document.getElementById("hamburger_button")
let nav_bar = document.getElementById("navigation")
let hamburger_image = document.getElementById("hamburger_image")
nav_bar.style.display = "none"

hamburger_menu.onclick = function openMenu(){
    if(nav_bar.style.display == "none"){
        nav_bar.style.display = "flex"
        hamburger_image.setAttribute("src","./images/xicon.png")
        hamburger_image.setAttribute("style", "width: 40px; height: 40px;")
    }
    else{
        nav_bar.style.display = "none"
        hamburger_image.setAttribute("src","./images/hamgurger_white-01-01.png")
        hamburger_image.setAttribute("style", "height: 75px; width: auto;")
    }
}

if(nav_bar.style.display != "none"){
    document.getElementById("body").onclick = function closeMenu(){
        console.log("WHY")
        nav_bar.style.display = "none"
    }
}