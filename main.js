var main = function() {
   setInterval(function() {
   $('.PhotoReel').animate({'margin-left': '-=750px'}, 1000); 
   }, 3000);
};
$(document).ready(main);
