let logoMenu = document.querySelector(".icon-menu");
let menu = document.querySelector("#menu");
let i = document.querySelector(".ri-close-large-line");

const mediaQuery = window.matchMedia("(max-width: 991px)");

function handleMediaChange(e) {
  if (e.matches) {
    logoMenu.addEventListener("click", () => {
      menu.style.top = "97px";
      logoMenu.style.display = "none";
      i.style.display = "block";
    });
    i.addEventListener("click", () => {
      menu.style.top = "-340px";
      logoMenu.style.display = "flex";
      i.style.display = "none";
    });
  } else {
    // إعادة ضبط الأنماط إذا تجاوز العرض 975px
    menu.style.display = "";
    logoMenu.style.display = "";
    i.style.display = "";
  }
}

// استمع للتغيرات في حجم الشاشة
mediaQuery.addEventListener("change", handleMediaChange);

// استدعاء الوظيفة عند التحميل الأول
handleMediaChange(mediaQuery);
