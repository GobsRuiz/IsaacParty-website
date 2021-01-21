var headerTop = document.getElementById("header_top");
var headerLogo = document.getElementById("header_top_logo");
var headerMenu = document.getElementById("header_top_menu");
var headerHamburguer = document.getElementById("header_top_hamburguer");



// Functions
window.addEventListener("scroll", (e) => {
    let value = 0;
    
    if(window.innerWidth > 1024){
        value = 25;
    }else{
        value = 10;
    }

    if(window.pageYOffset >= value){
        headerTop.classList.add("headerAnimationScroll");
        headerLogo.classList.add("headerAnimationScroll");
        
        if(window.innerWidth > 1024){
            headerMenu.classList.add("headerAnimationScroll");
        }else{
            headerHamburguer.classList.add("headerAnimationScroll");
        }
    }else{
        headerTop.classList.remove("headerAnimationScroll");
        headerLogo.classList.remove("headerAnimationScroll");

        if(window.innerWidth > 1024){
            headerMenu.classList.remove("headerAnimationScroll");
        }else{
            headerHamburguer.classList.remove("headerAnimationScroll");
        }
    }
})