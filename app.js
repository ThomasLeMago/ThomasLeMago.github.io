const elements = document.querySelectorAll(".hidden");
const cursorimg = document.querySelector(".cursorimg");
const btnCss = document.querySelector(".btncss");
const btnCode = document.querySelector(".btngen");
const btnGit = document.querySelector(".btngit");

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

btnCode.addEventListener("click", () => {
    window.location.href = "https://thomaslemago.github.io/CodeGen/web";
})

btnCss.addEventListener("click", () => {
    window.location.href = "https://thomaslemago.github.io/css";
})

btnGit.addEventListener("click", () => {
    window.location.href = "https://github.com/ThomasLeMago";
})