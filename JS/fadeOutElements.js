$(window).scroll(function(){
  $(".fade-out").css("opacity", 1 - $(window).scrollTop() / 800);
});
