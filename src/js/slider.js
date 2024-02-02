import "../css/slider.css";

document.addEventListener("DOMContentLoaded", function () {
    const dots = Array.from(document.querySelectorAll(".dot"))
    dots.map(dot => dot.addEventListener("click", ()=>{
      const element = document.querySelector('.slider');
      console.log(element.offsetWidth)
    }))
});
