var main = function() {
   var SlideLength = 750;
   var SlideSpeed = 1000;
   var Pause = 3000;
   var currentSlide = 1;
   
   var $PhotoReel = $('.PhotoReel');
   var $Photo = $PhotoReel.find('.Photo');
   
   setInterval(function() {
   $PhotoReel.animate({'margin-left': '-='+SlideLength}, SlideSpeed, function() {
    currentSlide++;
    if (currentSlide === $PhotoReel.last) {
       CurrentSlide = 1;
       $PhotoReel.css('margin-left', -40);
         };
      });
   }, Pause); 
};
$(document).ready(main);
