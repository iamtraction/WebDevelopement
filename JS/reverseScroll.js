//Reverse Scroll html elements
//Created by @snkrsnkampa
//Link this '.js' file from your html file.
//Add '.reverse-scroll' class to the elements you want to reverse-scroll
$(document).ready(function(){ 
 $(window).scroll(function(){
   $('.reverse-scroll').css('transform', 'translate3d(0,' + $(this).scrollTop()*2 + 'px, 0)');  //increase the value from '2' to increase reverse scroll speed; use values < 1
 }).scroll();
});
//The base value is 1; it will scroll in normal direction and speen if the value is set to 1.
//Use values less than 1 (including negative) to control the normal scroll speed of elements.
//NOTE: jQuery is required for this script to work
