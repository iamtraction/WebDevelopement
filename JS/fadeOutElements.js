//Fade Out Elements while scrolling
//Created by @snkrsnkampa
//Link this '.js' file from your html file
//Add the class .fade-out to the elements you want to fade-out
$(window).scroll(function(){
  $(".fade-out").css("opacity", 1 - $(window).scrollTop() / 800); //Decrese the value from '800' to fade-out fast and vice-versa and 0 for no fade effect
});
//NOTE: jQuery is required for this script to work
