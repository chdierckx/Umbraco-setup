//AOS - Animate on scroll
AOS.init({
    offset: 200,
    duration: 600,
    easing: 'ease-in-sine',
    delay: 100,
  });



$('#slick-slider').slick({
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1
 });

//Slick slider with animate css

// $(document).ready(function() {
//   $('#slick-slider').on('init', function(e, slick) {
//       var $firstAnimatingElements = $('div.slide:first-child').find('[data-animation]');
//       doAnimations($firstAnimatingElements);    
//   });
//   $('#slick-slider').on('beforeChange', function(e, slick, currentSlide, nextSlide) {
//             var $animatingElements = $('div.slide[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
//             doAnimations($animatingElements);    
//   });
//   $('#slick-slider').slick({
//      autoplay: true,
//      autoplaySpeed: 5000,
//      fade: true,
//      dots: true,
//      infinite: true,
//      speed: 500,
//      slidesToShow: 1
//   });
//   function doAnimations(elements) {
//       var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
//       elements.each(function() {
//           var $this = $(this);
//           var $animationDelay = $this.data('delay');
//           var $animationType = 'animated ' + $this.data('animation');
//           $this.css({
//               'animation-delay': $animationDelay,
//               '-webkit-animation-delay': $animationDelay
//           });
//           $this.addClass($animationType).one(animationEndEvents, function() {
//               $this.removeClass($animationType);
//           });
//       });
//   }
// });

  
// !function e(o, r, n) {
//     function a(l, t) {
//         if (!r[l]) {
//             if (!o[l]) {
//                 var s = "function" == typeof require && require;
//                 if (!t && s) return s(l, !0);
//                 if (i) return i(l, !0);
//                 var c = new Error("Cannot find module '" + l + "'");
//                 throw c.code = "MODULE_NOT_FOUND", c
//             }
//             var d = r[l] = { exports: {} };
//             o[l][0].call(d.exports,
//                 function(e) {
//                     var r = o[l][1][e];
//                     return a(r ? r : e)
//                 },
//                 d,
//                 d.exports,
//                 e,
//                 o,
//                 r,
//                 n)
//         }
//         return r[l].exports
//     }

//     for (var i = "function" == typeof require && require, l = 0; l < n.length; l++) a(n[l]);
//     return a
// }({
//         1: [
//             function(e, o, r) {
//                 !function() {
//                     "use strict";
//                     $(document).ready(function() {
//                         $(window).bind("scroll",
//                             function() {
//                                 var e = 150;
//                                 $(window).scrollTop() > e
//                                     ? $(".header").addClass("header--fixed")
//                                     : $(".header").removeClass("header--fixed")
//                             }), $(".mobile-nav-handler").click(function(e) {
//                             $(".mobile-nav").toggleClass("mobile-nav--open"), $(".header").toggleClass("header--hide"),
//                                 $("body").toggleClass("no-scroll"), $("#toggle-nav").toggleClass("active")
//                         }), $(".nav-link").click(function(e) {
//                             $(".mobile-nav").removeClass("mobile-nav--open"), $(".header").removeClass("header--hide"),
//                                 $("body").removeClass("no-scroll"), $("#toggle-nav").removeClass("active")
//                         })
//                     })
//                 }()
//             }, {}
//         ]
//     },
//     {},
//     [1]);

