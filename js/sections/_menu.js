/* SMALL MENU ON SCROLL */

const header = document.getElementById("header");

window.onscroll = function () {
    if (document.body.scrollTop > 130 || document.documentElement.scrollTop > 130) {
        header.classList.add("small");
    } else {
        header.classList.remove("small");
    }
};

/* NO SCROLL */

const toggle = document.getElementById("toggle");
const body = document.querySelector("body");

toggle.addEventListener("change", () => {
    if (toggle.checked) {
        body.classList.add("noscroll");
    } else {
        body.classList.remove("noscroll");
    }
});