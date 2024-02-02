import "../css/slider.css";

document.addEventListener("DOMContentLoaded", function () {
    const dots = Array.from(document.querySelectorAll(".dot"));
    dots.map((dot, i) =>
        dot.addEventListener("click", event => {
            let targetItem = `.slide-${i + 1}`;
            const scrollToElement = document.querySelector(targetItem);
            scrollToElement.scrollIntoView({ behavior: "smooth" });
        })
    );
});