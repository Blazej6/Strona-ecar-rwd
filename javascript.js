$(document).ready(function () {
     $('a[href^="#"]').on('click', function (e) {
         e.preventDefault();

         var target = this.hash,
             $target = $(target);

         $('html, body').stop().animate({
             'scrollTop': $target.offset().top - 40
         }, 900, 'swing', function () {
            // window.location.hash = target;
         });
     });
 });

$("#fleet").click(function() {
    $('html, body').animate({
        scrollTop: $("#flota").offset().top - 40
    }, 2000);
});