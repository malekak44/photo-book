const btnHamburger = document.querySelector("#btnHamburger");
const header = document.querySelector("header");
const mobileMenu = document.querySelector(".mobile-menu");

btnHamburger.addEventListener("click", () => {
    if (header.classList.contains("open")) {
        header.classList.remove("open");
        mobileMenu.classList.remove("show");
    } else {
        header.classList.add("open");
        mobileMenu.classList.add("show");
    }
});