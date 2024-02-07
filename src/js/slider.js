import "../css/slider.css";

document.addEventListener("DOMContentLoaded", function () {
    const scrollToElement = document.querySelector(".slider-container");
    const dots = Array.from(document.querySelectorAll(".dot"));

    dots[0].addEventListener("click", () => {
        scrollToElement.scroll(0, null);
    });
    dots[1].addEventListener("click", () => {
        scrollToElement.scroll(280, null);
    });
    dots[2].addEventListener("click", () => {
        scrollToElement.scroll(580, null);
    });
    dots[3].addEventListener("click", () => {
        scrollToElement.scroll(820, null);
    });

    dots.map((dot, i) =>
        dot.addEventListener("click", event => {
            event.target.classList.add("active");
        })
    );

    function removeDot(index) {
        dots.map(dotRemoveActive => dotRemoveActive.classList.remove("active"));
        dots[index].classList.add("active");
    }

    scrollToElement.addEventListener("scroll", () => {
        let pos = Math.floor(scrollToElement.scrollLeft);
        if (pos >= 0 && pos <= 264) {
            removeDot(0);
        }
        if (pos >= 265 && pos <= 573) {
            removeDot(1);
        }
        if (pos >= 574 && pos <= 879) {
            console.log("Yes");
            removeDot(2);
        }
        if (pos >= 840) {
            removeDot(3);
        }
    });

    let dotIndex = 0;
    setInterval(function () {
        dots[dotIndex].click();
        dotIndex++;
        if (dotIndex === 4) {
            dotIndex = 0;
        }
    }, 5000);
});
