let hamburger_menu = document.getElementById("hamburger_button")
let nav_bar = document.getElementById("navigation")
hamburger_menu.onclick = function openMenu(){
    if(nav_bar.style.display === "none"){
        console.log("HERE IT IS")
        nav_bar.style.display = "flex"
    }
    else{
        console.log("GOIN BACK")
        nav_bar.style.display = "none"
    }
}