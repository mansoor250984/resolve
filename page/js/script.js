$(document).ready(function() { 
						   
function handleResize() {
        const $element = $('.nav');
        if ($(window).width() < 1025) {
          $element.addClass('mobile');
        } else {
          $element.removeClass('mobile');
        }
      }
 // Initial check
      handleResize();

      // Bind the function to the window resize event
      $(window).resize(function() {
        handleResize();
      });					   
						   
						   
						   
$(".menu-bar").click(function(){
    $(".nav div.menu, .overlay").toggle(400);
});
$(".menu .fa-bars").click(function(){
    $(".nav div.menu, .overlay").toggle(400);
});

$(".popup .closeBtn").click(function(){
    $(".popup").hide(100);
});


$(".mobile ul li a.dmenu").click( function ( e ){ 
   e.preventDefault()
   $( this ).parent().find( ".sub-menu" ).toggle(500).toggleClass("hidden", 500) } )






});
