$(function(){
  $(window).scroll(function(){
    var topo = $(window).scrollTop();
    if(topo > 90) {
      $('nav').addClass('menu-fixed');
    } else {
      $('nav').removeClass('menu-fixed');
    }
  });
});
