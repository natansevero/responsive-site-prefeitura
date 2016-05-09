$(function(){
  $('div.menu-oculto').click(function(){
    $('#menu-mobile').fadeIn(500);
  });

  $('.fechar').click(function(event){
		if (event.target != this) {
			return;
		}

		$('#menu-mobile').fadeOut(500);
	});
  
});
