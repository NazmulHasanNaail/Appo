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


      
    });

    $(window).on('load', function() {

    });
})(jQuery)