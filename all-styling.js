$( document ).ready(function() {
  $(".button-collapse").sideNav();
  $('.collapsible').collapsible();
});

$(".zoomIt").hover(function() {
    $(this).addClass("z-depth-5");
}, function() {
    $(this).removeClass("z-depth-5");
});

window.onscroll = function() {myFunction()};

function myFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      document.getElementById("main_nav").style.visibility = "visible";
      document.getElementById("main_nav").className = "animated fadeInDown";
    } else {
      document.getElementById("main_nav").style.visibility = "hidden";
      document.getElementById("main_nav").className = "animated fadeInUp";
    }
}

$('.h_first').on('click', function() {
    $('.some1').toggleClass('clicked1');
});

$('.h_second').on('click', function() {
    $('.some2').toggleClass('clicked2');
});

$('.h_third').on('click', function() {
    $('.some3').toggleClass('clicked3');
});
// $(".about-section").mouseover(function(){
//   $(".about-section").addClass("z-depth-2").removeClass("z-depth-1");
// })


// window.onscroll = function() {myFunction()};
//
// function myFunction() {
//     if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
//         document.getElementById("tran").className = "determinate1";
//     } else {
//         // document.getElementById("myP").className = "";
//     }
// }
