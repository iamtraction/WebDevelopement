$(document).ready(function(){ 
 $(window).scroll(function(){
   $('.reverse-scroll').css('transform', 'translate3d(0,' + $(this).scrollTop()*0.2 + 'px, 0)'); 
 }).scroll();
});
