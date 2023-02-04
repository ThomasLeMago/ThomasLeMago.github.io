const elements = document.querySelectorAll(".hidden");
const cursorimg = document.querySelector(".cursorimg");
const btnCss = document.querySelector(".btncss");
const btnCode = document.querySelector(".btngen");
const btnGit = document.querySelector(".btngit");
const root = document.documentElement;

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
            entry.target.style.opacity = 1;
        } else {
            entry.target.classList.remove("show");
            entry.target.style.opacity = 0;
        }
    })
})

elements.forEach((el) => observer.observe(el));

if (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i)) {
    root.style.setProperty("--max-width", "70%");
}

btnCode.addEventListener("click", () => {
    window.location.href = "https://thomaslemago.github.io/CodeGen/web";
})

btnCss.addEventListener("click", () => {
    window.location.href = "https://thomaslemago.github.io/css";
})

btnGit.addEventListener("click", () => {
    window.location.href = "https://github.com/ThomasLeMago";
})