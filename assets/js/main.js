(function($) {
    "use strict";
    $(document).ready(function() {

      ////meanmenu////
       $('.main-menu').meanmenu({
       		meanMenuContainer: '.menu-area',
       		meanScreenWidth: "991",
       		onePage: true
       });

      ////Sticky Js///
      $("header").sticky({ topSpacing: 0 });


      ////pop up js///
      $('#play').magnificPopup({
          type: 'iframe'
          
          // other options
      });


      ////App-screen-Shot-Swipwer-slider js///

      var swiper = new Swiper('#app-screen-slider-1', {
          loop:true,
          slidesPerView: 6,
          // centeredSlides: true,
          navigation: {
          nextEl: '.swiper-button-prev',
          prevEl: '.swiper-button-next',
        },
          breakpoints: {
            1199: {
              slidesPerView: 5,
              spaceBetween: 30,
            },
            991: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
            767: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            575: {
              slidesPerView: 1,
              spaceBetween: 5,
            }
          }
      });

      ////App-screen-Shot-Swipwer-slider-2/-3 js///

      var swiper = new Swiper('#app-screen-slider', {
          loop:true,
          slidesPerView: 5,
          initialSlide: 5,
          centeredSlides: true,
          lazyLoadingInPrevNext: true,
          keyboardControl: true,
          mousewheelControl: false,
          lazyLoading: true,
          preventClicks: false,
          preventClicksPropagation: false,
          lazyLoadingInPrevNext: true,
          effect: 'coverflow',
          coverflowEffect: {
              rotate: 0,
              stretch: 50,
              depth: 250,
              modifier: .4,
              slideShadows: false,
            },
          navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        breakpoints: {
                1199: {
                    slidesPerView: 4,
                    spaceBetween: 30,
                },
                991: {
                    slidesPerView: 3,
                    spaceBetween: 10,
                },
                767: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                },
                575: {
                    slidesPerView: 1,
                    spaceBetween: 5,
                }
            }
      });

      ////It's Awesome-tyny js///
if ($('#its-awesome').length) {
       var slider2 = tns({
          container: '#its-awesome',
          items: 1,
          nav:true,
          mouseDrag: true,
          navPosition:"bottom",
          controls:false,
          loop:true,
          speed: 400
        });
}


      ////blog-swiper-slider/
      var swiper = new Swiper('#blog-details-related-Post', {
      slidesPerView: 2,
      spaceBetween: 50,
       navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
       breakpoints: {
            1199: {
              slidesPerView: 2,
            },
            991: {
              slidesPerView: 2,
            },
            767: {
              slidesPerView: 1,
            },
            575: {
              slidesPerView: 1,
            }
          }
    });
    ///tabs///
    if ($('#tabs').length) {
    $( "#tabs" ).tabs({
       show: { effect: "fold", duration: 800 }
    });
  }

      //App-Feature-tyny js///
      if ($('#vertical').length) {
        if ($(window).width()<768) {
       var slider = tns({
          container: '#vertical',
          items: 1,
          nav:false,
          controlsText:["<i class='fas fa-angle-right'></i>", "<i class='fas fa-angle-left'></i>"],
          // axis: "vertical",
          loop:false,
          speed: 400,
        });
       }
       else{
        var slider = tns({
          container: '#vertical',
          items: 3,
          nav:false,
          controlsText:["<i class='fas fa-chevron-down'></i>", "<i class='fas fa-chevron-up'></i>"],
          axis: "vertical",
          loop:false,
          speed: 400,
        });
       }
     }

      //counterup Js///
      if ($('.counter').length) {
      $('.counter').counterUp({
                delay: 10,
                time: 1000
            });
        }

        //wow//
        new WOW().init();
      
    });



    $(window).on('load', function() {

    });
})(jQuery)