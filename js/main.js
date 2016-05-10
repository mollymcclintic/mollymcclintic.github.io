// // Do it when someone clicks a nav link
// $('nav a').on('click', function(e) {
//   // prevent the standard link operation on click
//   e.preventDefault();
//   // use the href of the link to identify what
//   // section to scroll to
//   var thisTarget = $(this).attr('href');
//   // get that section's top offset
//   var targetOffset = $(thisTarget).offset().top;
//   // use jQuery.animate() to animate the body's
//   // scrollTop to the targetOffest
//   $('body').animate({
//     scrollTop: targetOffset
//   }, 600);
// });

// Add in Fonts 
//   @font-face {
//   font-family: <Averta>;
//   src: url("../fonts/Averta-Black") format("opentype");
// }

// Hamburger Nav info 

$('.hamburger').on('click', function(e) {
  // Prevent link from jumping to the top of the page
  e.preventDefault();
  // If menu is already showing, slide it up. Otherwise, slide it down.
  $('.menu').toggleClass('slide-down');
});

// Bus driving across screen

$(document).ready(function(e) {
    width = "+=" + $(document).width();
    $("#animate").animate({
    left: width
  }, 5000, function() {
    // Animation complete.
  });
});