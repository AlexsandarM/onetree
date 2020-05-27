$(document).ready(function () {

    $(window).scroll(function () {

        if ($(window).scrollTop() > 970) {
            $('.navbar').addClass('fixed-top');
        }
        if ($(window).scrollTop() < 971) {
            $('.navbar').removeClass('fixed-top');
        }

    });
});


// $(".navbar-dark ul li a[href^='#']").on('click', function (e) {

//     e.preventDefault();

//     var hash = this.hash;

//     $('html, body').animate({
//         scrollTop: $(hash).offset().top
//     }, 300, function () {

//         window.location.hash = hash;
//     });

// });

// $(document).ready(function(){
//     // Add smooth scrolling to all links
//     $("a").on('click', function(event) {

//       // Make sure this.hash has a value before overriding default behavior
//       if (this.hash !== "") {
//         // Prevent default anchor click behavior
//         event.preventDefault();

//         // Store hash
//         var hash = this.hash;

//         // Using jQuery's animate() method to add smooth page scroll
//         // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
//         $('html, body').animate({
//           scrollTop: $(hash).offset().top
//         }, 800, function(){

//           // Add hash (#) to URL when done scrolling (default click behavior)
//           window.location.hash = hash;
//         });
//       } // End if
//     });
//   });


// $("#section-parallax .col-sm-8 a[href^='#']").on('click', function (e) {

//     e.preventDefault();

//     var hash = this.hash;

//     $('html, body').animate({
//         scrollTop: $(hash).offset().top
//     }, 300, function () {

//         window.location.hash = hash;
//     });

// });

// $(".footer .scroll-to-top-button a[href^='#']").on('click', function (e) {

//     e.preventDefault();

//     var hash = this.hash;

//     $('html, body').animate({
//         scrollTop: $(hash).offset().top
//     }, 300, function () {

//         window.location.hash = hash;
//     });

// });




$(".js-wp-1").waypoint(function () {
    $('.js-wp-1').addClass('animated fadeInDown');
}, {
    offset: '60%'
});

$('.js-wp-2').waypoint(function (direction) {
    $('.js-wp-2').addClass('animated fadeInLeft');
}, {
    offset: '50%'
});

$('.js-wp-3').waypoint(function (direction) {
    $('.js-wp-3').addClass('animated fadeInRight');
}, {
    offset: '50%'
});

$('.js-wp-4').waypoint(function (direction) {
    $('.js-wp-4').addClass('animated fadeInUp');
}, {
    offset: '50%'
});

$('.js-wp-5').waypoint(function (direction) {
    $('.js-wp-5').addClass('animated fadeInLeft');
}, {
    offset: '50%'
});

$('.js-wp-6').waypoint(function (direction) {
    $('.js-wp-6').addClass('animated fadeInRight');
}, {
    offset: '50%'
});

$('.js-wp-7').waypoint(function (direction) {
    $('.js-wp-7').addClass('animated fadeInLeft');
}, {
    offset: '50%'
});