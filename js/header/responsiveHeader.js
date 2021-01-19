var headerMenu = document.getElementById("header_top_menu");
var headerHamburguer = document.getElementById("header_top_hamburguer");
var headerCloseResponsiveMenu = document.getElementById("header_top_menu_closeResponsiveMenu");



// Functions
if(window.innerWidth <= 1024){
    headerMenu.style.display = "none";

    // Event listener
    headerHamburguer.addEventListener("click", () => {
        actionHeaderMenu();
    })

    // Open and close menu
    function actionHeaderMenu() {
        if(headerMenu.style.display != "none"){
            headerMenu.style.right = "-30%";

            setTimeout(() => {
                headerMenu.style.display = "none";
            }, 401);
        }else{
            headerMenu.style.display = "block";

            setTimeout(() => {
                headerMenu.style.right = "0%";
            }, 1);

            closeMenu();
        }
    }

    // Btn close menu
    function closeMenu() {
        headerCloseResponsiveMenu.addEventListener("click", () => {
            actionHeaderMenu()
        })
    }
}