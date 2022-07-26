$(document).ready(function () {
  $(".owl-carousel").owlCarousel();
});

$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  dots: true,
  dotsEach: false,
  items: 2,
  responsive: {
    549: {
      items: 3,
      center: true,
      dotsEach: false,
    },
    700: {
      items: 5,
    },
    1200: {
      items: 5,
    },
  },
});
