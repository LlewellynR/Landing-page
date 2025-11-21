function showMenu(){
    let menu = document.getElementById("menu");
    if(menu.style.opacity === "1"){
        menu.style.opacity = "0";
    }else if(menu.style.opacity === "0"){
        menu.style.opacity = "1";
    }

}