//Fade Out Elements while scrolling
$(window).scroll(function(){
  $(".fade-out").css("opacity", 1 - $(window).scrollTop() / 800); //Decrese the value from '800' to fade-out fast and vice-versa
});
