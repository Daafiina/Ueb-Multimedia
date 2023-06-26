$(document).ready(function(){
    "user strick"
    $('.slider').ripples({
        dropRadius: 20,
        perturbance: 0.01,
      });

      /*
      $(".text").typed({
        strings:["FGasdst Sentence.","Second Sentence"],
        typespeed:0,
        loop:true
      });
      */

          

      $('.work').magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        gallery: {
        enabled: true
        },        
      });

      $("#team-members").owlCarousel({
        items: 3,
        autoplay: true,
        smartSpeed: 750,
        loop: true,
        autoplayHoverPause: true,
        responsive:{
        0:{
          items: 1
        },

        480:{
          items: 2
        },

        768:{
          items:3
        },
      }
      });


      $('a.smooth-scroll').click(function (event) {

        event.preventDefault();

        var section = $(this).attr("href");

        $('html, body').animate({
          scrollTop: $(section).offset().top - -2
        }, 1250, "easeInOutExpo");
      });
});
