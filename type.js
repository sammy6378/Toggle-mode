


const toggle = document.querySelector(".bx-adjust");

toggle.addEventListener("click", (e) => {
    e.preventDefault();
  const body = document.querySelector("body");
  toggle.classList.toggle("bxs-moon");
  body.classList.toggle("dark");
});

const menu = document.querySelector(".nav-bar");
const btn = document.querySelector(".bx-menu")
btn.addEventListener("click", (e) => {
    e.preventDefault();
    btn.classList.toggle("bx-x");
    menu.classList.toggle("active");
});