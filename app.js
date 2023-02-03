const elements = document.querySelectorAll(".hidden")
const cursorimg = document.querySelector(".cursorimg")

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

/*
document.addEventListener("mousemove", (e) => {
    cursorimg.style.left = e.pageX - 15 + "px";
    cursorimg.style.top = e.pageY - 15 + "px";
})
*/