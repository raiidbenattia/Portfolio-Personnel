let div = document.createElement("div");
let logo = document.createElement("span");
let i = document.createElement("i");
let line = document.createElement("span");
let section = document.querySelector(".section-right");
let menu = document.querySelector(".ri-menu-line");
let theme = document.querySelector(".switch-theme i");
let root = document.documentElement;

// span

line.className = "line";
section.prepend(line);

// div
div.className = "section-top";
section.prepend(div);

// logo

logo.className = "logo";
logo.innerHTML = `<span>&lt;<span>ss</span>/&gt;</span>`;
div.prepend(logo);

// icon

i.className = "ri-close-fill";
div.append(i);

// add active class

menu.addEventListener("click", () => {
  section.classList.add("active");
});

// remove active class
i.addEventListener("click", () => {
  section.classList.remove("active");
});

// تحديث الحالة عند تحميل الصفحة
const storedTheme = localStorage.getItem("theme");

// change icon
const icons = document.querySelectorAll(".changeable");
const newSrcs = [
  "assets/icon-express1.svg",
  "assets/icon-socket1.svg",
  "assets/icon-cypress1.svg",
];
const oldSrcs = [
  "assets/icon-express.svg",
  "assets/icon-socket.svg",
  "assets/icon-cypress.svg",
];

// change Pic
const pictures = document.querySelectorAll(".pic");
const newPic = ["assets/Pic-1.png", "assets/Pic-2.png"];
const oldPic = ["assets/Pic1.png", "assets/Pic2.png"];

if (storedTheme) {
  theme.classList.remove("ri-sun-line", "ri-moon-clear-line");
  theme.classList.add(storedTheme);

  // تعديل الألوان بناءً على الوضع المخزن
  if (storedTheme === "ri-moon-clear-line") {
    root.style.setProperty("--main-color", "#fff");
    root.style.setProperty("--second-color", "black");
    root.style.setProperty("--p-color", "#D1D5DB");
    root.style.setProperty("--bg-color", "#374151");
    root.style.setProperty("--section-color", "#111827");
    root.style.setProperty("--s-color", "#1F2937");

    icons.forEach((img, index) => {
      img.src = newSrcs[index];
    });
    pictures.forEach((img, index) => {
      img.src = newPic[index];
    });
  } else {
    root.style.setProperty("--main-color", "#111827");
    root.style.setProperty("--second-color", "#fff");
    root.style.setProperty("--p-color", "#4B5563");
    root.style.setProperty("--section-color", "#F9FAFB");
    root.style.setProperty("--card-color", "var(--second-color)");
    icons.forEach((img, index) => {
      img.src = oldSrcs[index];
    });
    pictures.forEach((img, index) => {
      img.src = oldPic[index];
    });
  }
} else {
  // إذا لم يتم تعيين أي قيمة، افتراض الوضع النهاري
  theme.classList.add("ri-sun-line");
  localStorage.setItem("theme", "ri-sun-line");
  root.style.setProperty("--main-color", "#111827");
  root.style.setProperty("--second-color", "#fff");
  root.style.setProperty("--p-color", "#4B5563");
  root.style.setProperty("--bg-color", "#E5E7EB");
  root.style.setProperty("--section-color", "#F9FAFB");
  root.style.setProperty("--card-color", "var(--second-color)");
  icons.forEach((img, index) => {
    img.src = oldSrcs[index];
  });
  pictures.forEach((img, index) => {
    img.src = oldPic[index];
  });
}

// التبديل بين الوضعين عند النقر
theme.addEventListener("click", () => {
  if (theme.classList.contains("ri-sun-line")) {
    theme.classList.replace("ri-sun-line", "ri-moon-clear-line");
    localStorage.setItem("theme", "ri-moon-clear-line");

    // تعديل الألوان للوضع الليلي
    root.style.setProperty("--main-color", "#fff");
    root.style.setProperty("--second-color", "black");
    root.style.setProperty("--p-color", "#D1D5DB");
    root.style.setProperty("--bg-color", "#374151");
    root.style.setProperty("--section-color", "#111827");
    root.style.setProperty("--card-color", "#1F2937");
    icons.forEach((img, index) => {
      img.src = newSrcs[index];
    });
    pictures.forEach((img, index) => {
      img.src = newPic[index];
    });
  } else {
    theme.classList.replace("ri-moon-clear-line", "ri-sun-line");
    localStorage.setItem("theme", "ri-sun-line");

    // تعديل الألوان للوضع النهاري
    root.style.setProperty("--main-color", "#111827");
    root.style.setProperty("--second-color", "#fff");
    root.style.setProperty("--p-color", "#4B5563");
    root.style.setProperty("--bg-color", "#E5E7EB");
    root.style.setProperty("--section-color", "#F9FAFB");
    root.style.setProperty("--card-color", "var(--second-color)");
    icons.forEach((img, index) => {
      img.src = oldSrcs[index];
    });
    pictures.forEach((img, index) => {
      img.src = oldPic[index];
    });
  }
});

// Select the navbar element
const navbar = document.querySelector(".nav-bar");

// Function to handle scroll event
function handleScroll() {
  if (window.scrollY === 0) {
    // Remove box-shadow when at the top
    navbar.style.boxShadow = "none";
  } else {
    // Add box-shadow when scrolled
    navbar.style.boxShadow = "0 4px 6px var(--bg-color)";
  }
}

// Attach the scroll event listener
window.addEventListener("scroll", handleScroll);

// copy
function copyToClipboard(elementId) {
  // Get the text from the element
  const text = document.getElementById(elementId).innerText;
  // Copy the text to the clipboard
  navigator.clipboard
    .writeText(text)
    .then(() => {})
    .catch(() => {});
}
