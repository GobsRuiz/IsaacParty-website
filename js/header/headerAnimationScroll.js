var headerTop = document.getElementById("header_top");
var headerLogo = document.getElementById("header_top_logo");
var headerMenu = document.getElementById("header_top_menu");
var headerHamburguer = document.getElementById("header_top_hamburguer");



// Functions
window.addEventListener("scroll", (e) => {
    if(window.pageYOffset >= 25){
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