$(document).ready(function () {
    $(window).scroll(function (e) {
      var scrollTop = $(window).scrollTop();
      var docHeight = $(document).height();
      var winHeight = $(window).height();
      var scrollPercent = scrollTop / (docHeight - winHeight);
      var scrollPercentRounded = Math.round(scrollPercent * 100);
  
      $("#scrollPercentLabel>span").html(scrollPercentRounded);
      repositionLabel();
    });
  
    $(window).resize(function () {
      repositionLabel();
    });
  
    // function repositionLabel() {
    //  $("#scrollPercentLabel").css({
    //    position: "fixed",
    //    left: ($(window).width() - $("#scrollPercentLabel").outerWidth()) / 2,
    //    top:
    //      ($(window).height() - $("#scrollPercentLabel").outerHeight()) / 2 -
    //      $("#scrollPercentLabel").height()
    //  });
    // }
  
    repositionLabel();
  });





// MULTI TITLE STICKY BAR 
// https://codepen.io/chrissp26/pen/AwBYPm


function nightButton() {
  var elementBoby = document.body;
  var elementImg = document.images;
  elementBoby.classList.toggle("dark-mode");
  elementImg.classList.toggle("img-mode");

  console.log("Nik ta mere JS !!!");


}



