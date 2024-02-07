// Styles
import "../css/index.css";
import "../css/normalize.min.css";
//import "../css/image-slider.css"
//Scripts
import "../js/slider.js"
//import "../js/image-slider.js"
//Resources
import "../../assets/images/24eatups-team.png"
import "../../assets/images/people-eating.png"
import "../../assets/images/image1.png"
import "../../assets/images/image2.png"
import "../../assets/images/image3.png"

import "../../node_modules/@splidejs/splide/dist/css/splide.min.css"

import Splide from '../../node_modules/@splidejs/splide/dist/js/splide.min.js';

document.addEventListener("DOMContentLoaded", ()=>{
  new Splide( '.splide', {
    type   : 'loop',
  perPage: 1,
  autoplay: true,
  pauseOnHover: true,
  interval: 5000,
  }).mount();
  
  
  class Eatups{
    constructor(){
      this.home = document.querySelector(".home")
      this.menu = document.querySelector(".menu")
      this.info = document.querySelector(".info")
    }
    eatupsLoader(){
      this.home.addEventListener("click", ()=>{
        this.home.classList.add("active")
        this.menu.classList.remove("active")
        this.info.classList.remove("active")
      })
      this.menu.addEventListener("click", ()=>{
        this.home.classList.remove("active")
        this.menu.classList.add("active")
        this.info.classList.remove("active")
      })
      this.info.addEventListener("click", ()=>{
        this.home.classList.remove("active")
        this.menu.classList.remove("active")
        this.info.classList.add("active")
      })
    }
  }
  
  let newSite = new Eatups()
  newSite.eatupsLoader()
})


 

