var headerMenu = document.getElementById("header_top_menu");
var headerHamburguer = document.getElementById("header_top_hamburguer");

if(window.innerWidth <= 1024){
    headerMenu.style.display = "none";
}


// Functions
headerHamburguer.addEventListener("click", () => {
    actionHeaderMenu();
})

function actionHeaderMenu() {
    if(headerMenu.style.display != "none"){
        headerMenu.style.right = "-30%";
        headerHamburguer.style.transform = `translateX(0px)`;
        headerHamburguer.classList.remove("hamburguerIconAnimation");

        setTimeout(() => {
            headerMenu.style.display = "none";
        }, 401);
    }else{
        headerMenu.style.display = "block";

        setTimeout(() => {
            headerMenu.style.right = "0%";
            headerHamburguer.style.transform = `translateX(-${headerMenu.offsetWidth - 50}px)`;
            headerHamburguer.classList.add("hamburguerIconAnimation");
        }, 1);
    }
}
