var previousPartiesMenuButtons = document.querySelectorAll("#previousParties_container_menu a");
var previousPartiesImagesDivs = document.querySelectorAll(".previousParties_container_images_div");



// Function
// Apllying display none
function apllyingDisplayNone_previousParties() {
    previousPartiesImagesDivs.forEach(element => {
        if(element.id != previousPartiesImagesDivs[0].id){
            element.style.display = "none";
        }
    });
}apllyingDisplayNone_previousParties()

previousPartiesMenuButtons.forEach(element => {
    element.addEventListener("click", (e) => {
        e.preventDefault();

        let div = document.getElementById(e.target.getAttribute("href"));

        if(div.style.display == "none"){
            console.log("sim")
            // Set display none
            setDisplayNone_previousParties();
            activateDiv_previousParties(div.id)

            div.style.display = "flex";
        }
    })
});

// Set display none
function setDisplayNone_previousParties(){
    previousPartiesImagesDivs.forEach(element => {
        if(element.style.display != "none"){
            element.style.display = "none";
        }
    });
}

function activateDiv_previousParties(id) {
    previousPartiesMenuButtons.forEach(element => {
        let button = element.getAttribute("href");
        
        if(element.classList == "activeDiv"){
            element.classList.remove("activeDiv");
        }

        if(button == id){
            element.classList.add("activeDiv")
        }
    });
}
