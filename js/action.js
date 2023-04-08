



 // SCROLL BAR


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




// DARK MODE
// https://codepen.io/adhuham/pen/BaNroxd

const btn = document.querySelector(".btn-toggle");
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

const currentTheme = localStorage.getItem("theme");
if (currentTheme == "dark") {
  document.body.classList.toggle("dark-theme");
  console.log("toggle Dark Theme");
} else if (currentTheme == "light") {
  document.body.classList.toggle("light-theme");
  console.log("toggle Light Theme");
}

btn.addEventListener("click", function () {
  if (prefersDarkScheme.matches) {
    document.body.classList.toggle("light-theme");
    var theme = document.body.classList.contains("light-theme")
      ? "light"
      : "dark";
      console.log("Matches Dark Theme");
  } else {
    document.body.classList.toggle("dark-theme");
    var theme = document.body.classList.contains("dark-theme")
      ? "dark"
      : "light";
      console.log("Matches Light Theme");

  }
  localStorage.setItem("theme", theme);
});





// RANDOM IAMGE HOME PAGE






 // HEIGHT CONTENT

//recup la valeur entière du la page
var heightContentPage = document.body.scrollHeight;

console.log(heightContentPage, "px");

heightContentPage = heightContentPage * 1.2;

console.log(heightContentPage, "px");

document.getElementById("stickyContainer").style.height = heightContentPage + "px"; 
// JE SAIS PAS POURQUOI LA VALEUR NE MATCH PAS AVEC LE SRICKYCONTAINER



