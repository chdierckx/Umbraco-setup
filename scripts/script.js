//AOS - Animate on scroll
AOS.init({
    offset: 200,
    duration: 600,
    easing: 'ease-in-sine',
    delay: 100,
  });

//AOS - Laxx parallax
  window.onload = function() {
    lax.setup() // init
  
    const updateLax = () => {
      lax.update(window.scrollY)
      window.requestAnimationFrame(updateLax)
    }
  
    window.requestAnimationFrame(updateLax)
  }

  window.addEventListener("resize", function() {
    lax.updateElements()
  });

  lax.addPreset("bgFall", function() {
    return { 
      "data-lax-bg-pos-y": "0 0, (document.body.scrollHeight*1.25) (vh/2)"
    }
  });

  lax.addPreset("fall", function() {
    return { 
      "data-lax-translate-y": "0 0, -vh (vh/2)",
      "data-lax-opacity": "0 1, (-vh/2) 0 | offset=0",
    }
  });

  lax.addPreset("fadeInSlow", function() {
    return { 
      "data-lax-opacity": "0 0, (vh*2) 1"
    }
  });

  //Jquery smooth scrolling anchor links
  // Select all links with hashes
$('a[href*="#"]')
// Remove links that don't actually link to anything
.not('[href="#"]')
.not('[href="#0"]')
.click(function(event) {
  // On-page links
  if (
    location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
    && 
    location.hostname == this.hostname
  ) {
    // Figure out element to scroll to
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    // Does a scroll target exist?
    if (target.length) {
      // Only prevent default if animation is actually gonna happen
      event.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000, function() {
        // Callback after animation
        // Must change focus!
        var $target = $(target);
        $target.focus();
        if ($target.is(":focus")) { // Checking if the target was focused
          return false;
        } else {
          $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
          $target.focus(); // Set focus again
        };
      });
    }
  }
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

