//$.noConflict();

//$.noConflict();
jQuery(document).ready(function(){
						   
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
						   
					   
						   
jQuery(".menu-bar").click(function(){
    $(".nav div.menu, .overlay").toggle(400);
});
jQuery(".menu .fa-bars").click(function(){
    $(".nav div.menu, .overlay").toggle(400);
});

jQuery(".popup .closeBtn").click(function(){
    $(".popup").hide(100);
});


jQuery(".mobile ul li a.dmenu").click( function ( e ){ 
   e.preventDefault()
   $( this ).parent().find( ".sub-menu" ).toggle(500).toggleClass("hidden", 500) } )



 jQuery(".checkBox input").click(function(){
    $(".formBox").slideToggle();
  });


});
