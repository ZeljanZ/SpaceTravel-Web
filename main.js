const nav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");

// When someone clicks the hamburger button
navToggle.addEventListener("click", () => {

    const visibility = nav.getAttribute("data-visible");
    
    if (visibility === "false"){
        // if the nav is closed, open it
        nav.setAttribute("data-visible", true);
        navToggle.setAttribute("aria-expanded",false);
    } else {
        // if the nav is open, close it
        nav.setAttribute("data-visible", false);
        navToggle.setAttribute("aria-expanded", true);
    }

})













