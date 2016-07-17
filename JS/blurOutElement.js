//Blur Out Elements while scrolling
//Created by @snkrsnkampa
//Link this '.js' file from your html file
//Add the class .blur-out to the elements you want to blur-out
$(window).scroll(function(){
  var size = $(window).scrollTop()/100; //Decrese the value from '100' to increase the blur-radius and increase the value to decrease the blur-radius
  $(".blur-out").css("filter", "blur(" + size + "px)");
});
//NOTE: jQuery is required for this script to work