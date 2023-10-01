/* global $*/
$(function(){
  $('#back a').on('click', function(event){
    $('body, html').animate({
      scrollTop:0
    }, 800);
    event.preventDefault();
  });
});

$(function(){
  $('.menu-trigger').on('click', function(e){
    $(this).toggleClass('active');
    $('#sp-menu').fadeToggle();
    event.preventDfault();
  });
});