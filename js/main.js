/* Custom functions */

// hero--bg to full browser size

$(function() {

  function abso() {

    w = $(window).width();
    h = $(window).height()

    // editing height to make up for fixed nav size

    if ($(window).width()<768) {
      h = h - 48;
    } else {
      h = h - 118; // header height
    }

    $('.full').css({
      height: h
    });

    // console.log(w + " x " + h);
  }

  $(window).resize(function() {
    abso();         
  });

  abso();

});

// scrollto function

$.fn.scrollView = function () {
  return this.each(function () {
    $('html, body').animate({
      scrollTop: $(this).offset().top - 80
    }, 1000);
  });
};

var d   = new Date();
var day = d.getDay(); // returns a # 0 - 6
var dayName = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var today = dayName[day];


$(document).ready(function(){

  // menu link redirects to menu/cocktails

  $("a[href='/menu']").on('click', function(e){
    e.preventDefault();
    window.location.href = "/menu/cocktails";
  });

  $("a[href='/events']").on('click', function(e){
    e.preventDefault();
    window.location.href = "/events/" + today.toLowerCase();
  });

  // menu toggle
  // 
  var toggleMenu = function () {
    if ($("body").hasClass("js-menu-open")) {
      $("body").removeClass("js-menu-open");
      $("body").addClass("js-menu-closed");
    } else {
      $("body").removeClass("js-menu-closed");
      $("body").addClass("js-menu-open");
    }
    console.log("toggleMenu");
  }

  $("#push").on('click', function() {
    toggleMenu();
  });

  var toggleMenuNav = function () {
    if ($("body").hasClass("js-menuNav-open")) {
      $("body").removeClass("js-menuNav-open");
      $("body").addClass("js-menuNav-closed");
    } else {
      $("body").removeClass("js-menuNav-closed");
      $("body").addClass("js-menuNav-open");
    }
    console.log("toggleMenuNav");
  }

  $("#pushMenuNav").on('click', function(e) {
    toggleMenuNav();
  });

  // scrollto hours

  $('a[href*="/hours"]').click(function(e){
    toggleMenu();
    e.preventDefault();
    $('#hours').scrollView();

  });
})



// $(function() {
//   FastClick.attach(document.body);
// });




// $(window).bind('resize', function(){
//     var size = window.getComputedStyle(document.body,':after').getPropertyValue('content');

//     if (size.indexOf("gridBreak") !=-1) {
//       // $("body").css("background", "blue");
//     } else if (size.indexOf("tablet") !=-1) {
//       $('.flexslider').flexslider('destroy');
//       console.log("tablet");
//     }

//   });