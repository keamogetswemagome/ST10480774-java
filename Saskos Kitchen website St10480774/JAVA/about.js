
document.addEventListener("DOMContentLoaded", () => {
    document.body.style.opacity = "0";
    setTimeout(() => {
        document.body.style.transition = "1s";
        document.body.style.opacity = "1";
    }, 50);

    
    showWelcomeMessage();

    
    highlightActiveMenu();
});


function showWelcomeMessage() {
    alert("Welcome to Sasko’s Kitchen About Page!\nWe’re happy to have you here.");
}


function highlightActiveMenu() {
    const currentPage = window.location.pathname.split("/").pop();
    const links = document.querySelectorAll("nav a");

    links.forEach(link => {
        if (link.getAttribute("href") === currentPage) {
            link.classList.add("active");
        }
    });
}
