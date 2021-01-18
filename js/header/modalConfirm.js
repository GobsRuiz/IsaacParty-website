var headerBtnOpenModalConfirm = document.getElementById("header_content_openModalConfirm");
var headerBtnCloseModalConfirm = document.getElementById("header_content_modalConfirm_btnClose");
var headerModalConfirm = document.getElementById("header_content_modalConfirm");



// Functions
headerBtnOpenModalConfirm.addEventListener("click", () => {
    headerModalConfirm.style.display = "flex";

    closeModalConfirm()
})

function closeModalConfirm() {
    window.addEventListener("click", (e) => {
        if(e.target.id == headerModalConfirm.id || e.target.id == headerBtnCloseModalConfirm.id){
            headerModalConfirm.style.display = "none";
        }
    }) 
}