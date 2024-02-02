import "../css/slider.css";

document.addEventListener("DOMContentLoaded", function () {
    const dots = Array.from(document.querySelectorAll(".dot"));
    dots.map((dot, i) =>
        dot.addEventListener("click", event => {
            let targetItem = `.slide-${i + 1}`;
            const scrollToElement = document.querySelector(targetItem);
            scrollToElement.scrollIntoView({ behavior: "smooth" });
            
            dots.map(dotRemoveActive =>
            dotRemoveActive.classList.remove("active"))
            event.target.classList.add("active")
        })
    );
    
    let sliderContainer = document.querySelector(".slider-container")
    const [dot1, dot2, dot3, dot4] = Array.from(document.querySelectorAll(".dot"))
    
    sliderContainer.addEventListener("scroll", () =>{
      let scrollPos = sliderContainer.scrollLeft
      if (scrollPos >= 0 && scrollPos <= 223) {
        dot1.classList.add("active")
        dot2.classList.remove("active")
        dot3.classList.remove("active")
        dot4.classList.remove("active")
      }
      if (scrollPos >= 224 && scrollPos <= 446) {
        dot1.classList.remove("active")
        dot2.classList.add("active")
        dot3.classList.remove("active")
        dot4.classList.remove("active")
      }
      if (scrollPos >= 447 && scrollPos <= 652) {
        dot1.classList.remove("active")
        dot2.classList.remove("active")
        dot3.classList.add("active")
        dot4.classList.remove("active")
      }
      if (scrollPos >= 653 && scrollPos <= 900) {
        dot1.classList.remove("active")
        dot2.classList.remove("active")
        dot3.classList.remove("active")
        dot4.classList.add("active")
      }
    })
});


