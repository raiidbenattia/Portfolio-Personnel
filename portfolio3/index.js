let navlogo = document.querySelector(".nav-logo");
let navlinks = document.querySelector(".nav-links");
let menu = document.querySelector(".menu");
let firstLine = document.querySelector("#first");
let SecondLine = document.querySelector("#second");

let menuOpen = false;

menu.addEventListener("click", () => {
  if (!menuOpen) {
    navlogo.style.display = "none";
    navlinks.style.display = "flex";
    firstLine.classList.add("first");
    SecondLine.classList.add("second");
    menuOpen = true;
  } else {
    navlogo.style.display = "block";
    navlinks.style.display = "none";
    firstLine.classList.remove("first");
    SecondLine.classList.remove("second");
    menuOpen = false;
  }
});
