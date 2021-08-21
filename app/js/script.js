const btnHamburger = document.querySelector("#btnHamburger");
const header = document.querySelector("header");
const mobileMenu = document.querySelector(".mobile-menu");
const submitBtn = document.querySelector("#submitBtn");

btnHamburger.addEventListener("click", () => {
    if (header.classList.contains("open")) {
        header.classList.remove("open");
        mobileMenu.classList.remove("show");
    } else {
        header.classList.add("open");
        mobileMenu.classList.add("show");
    }
});

submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    alert("Submitted!");
});