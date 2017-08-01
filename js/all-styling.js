$( document ).ready(function() {
  $(".button-collapse").sideNav();
  $('.collapsible').collapsible();
  $('.modal').modal();
});

$('#modal1').modal('open'); $('#modal1').modal('close');
$('#modal2').modal('open'); $('#modal2').modal('close');
$('#modal3').modal('open'); $('#modal3').modal('close');
$('#modal4').modal('open'); $('#modal4').modal('close');
$('#modal5').modal('open'); $('#modal5').modal('close');
$('#modal6').modal('open'); $('#modal6').modal('close');
$('#modal7').modal('open'); $('#modal7').modal('close');

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

$('.h_zero').on('click', function() {
    $('.some0').toggleClass('clicked0');
});

$('.h_first').on('click', function() {
    $('.some1').toggleClass('clicked1');
});

$('.h_second').on('click', function() {
    $('.some2').toggleClass('clicked2');
});

$('.h_third').on('click', function() {
    $('.some3').toggleClass('clicked3');
});

$('.h_fourth').on('click', function() {
    $('.some4').toggleClass('clicked4');
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

