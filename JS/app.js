"use strict";
(function ($) {
  $(document).ready(function () {
    $(".project-slider").slick({
      autoplay: true,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 1,
      prevArrow: ".prev-btn",
      nextArrow: ".next-btn",
      responsive: [
        {
          breakpoint: 1160,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    });
  });
})(jQuery);

const hamburger = document.querySelector(".hamburger");
const line1 = document.querySelector(".line-1");
const line2 = document.querySelector(".line-2");
const line3 = document.querySelector(".line-3");
const navMenu = document.querySelector(".link-list-wrap");
const body = document.querySelector("body");

hamburger.addEventListener("click", function trigger() {
  navMenu.classList.toggle("display");
  line1.classList.toggle("change");
  line2.classList.toggle("change");
  line3.classList.toggle("change");
});
