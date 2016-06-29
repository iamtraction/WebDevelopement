//Reverse Scroll html elements
//add '.reverse-scroll' class to the elements you want to reverse-scroll
$(document).ready(function(){ 
 $(window).scroll(function(){
   $('.reverse-scroll').css('transform', 'translate3d(0,' + $(this).scrollTop()*0.2 + 'px, 0)');  //increase the value from '0.2' to increase scroll speed
 }).scroll();
});
//Use negative value instead of positive (eg. -0.2) to control the normal scroll speed of elements
//NOTE: jQuery is required for this script to work
