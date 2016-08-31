$(document).ready(function(){

  //Промо в верхней части
  $("#promo").owlCarousel({
  	items: 1,
  });

  //Галерея на главной
  var gallery = $('#gallery');
  gallery.owlCarousel({
  	items: 4,
  	loop: true,
  	center: true,
  });

  gallery.on('changed.owl.carousel', function(event){
  	
  });

  $('#gallery img[data-large-img-url]').on('click', function(){
  	$('#gallery-large-img').attr('src', $(this).data('large-img-url') );
  });


});
