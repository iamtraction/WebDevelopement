//Parallax scrolling background of elements
//add the class '.parallax' to the elements you want use parallax scrolling effect
(function(){
  "use strict"; // Start of use strict
  var parallax = document.querySelectorAll(".parallax"), speed = 0.5; //Change the value of the variable speed to control the scrolling speen
  window.onscroll = function(){
    [].slice.call(parallax).forEach(function(el,i){
      var windowYOffset = window.pageYOffset,
          elBackgrounPos = "0 " + (windowYOffset * speed) + "px";
      el.style.backgroundPosition = elBackgrounPos;
    });
  };
})();
