var main = function() {
   var SlideLength = 750;
   var SlideSpeed = 1000;
   var Pause = 3000;
   var CurrentSlide = 1;
   
   var $PhotoReel = $('.PhotoReel');
   var $Photo = $PhotoReel.find('.Photo');
   
   setInterval(function() {
   $PhotoReel.animate({'margin-left': '-='+SlideLength}, SlideSpeed, function() {
    CurrentSlide++;
    if (CurrentSlide === $Photo.length) {
       CurrentSlide = 1;
       $PhotoReel.css('margin-left', -40);
         };
      });
   }, Pause); 
};
$(document).ready(main);
