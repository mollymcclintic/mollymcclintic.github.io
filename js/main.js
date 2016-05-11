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

// Logo Nav info 
  //When the screen is >1300px, and the user clicks on the logo, prevent it from going back to index.html
  //Also, .togglecLass so when the user clicks on the logo, the nav opens and closes
$('.logo').on('click', function (e) {
    e.preventDefault();
  $('.mobile-nav').toggleClass('displayed');

  
});

//Animate the bus to the width of the screen

  $(document).ready(function(e) {
    var width = $(document).width() - $('#animate-img').width();
//Send bus across the screen to the right
    function goRight() {
        $("#animate").animate({
        left: width
      }, 5000, function() {
         setTimeout(goLeft, 50);
      });
    }
    //Send bus across the screen to the left
    function goLeft() {
        $("#animate").animate({
        left: 0
      }, 5000, function() {
         setTimeout(goRight, 50);
      });
    }

    setTimeout(goRight, 50);
});