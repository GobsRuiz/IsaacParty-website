var headerMenuLinks = document.querySelectorAll("#header_top_menu a");



// Functions
headerMenuLinks.forEach(element => {
    element.addEventListener("click", (e) => {
        e.preventDefault()

        let href = e.target.getAttribute("href");
        let section = document.getElementById(href);

        scrollToSection(section)
    })
});

function scrollToSection(section){
    window.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth',
    })
}