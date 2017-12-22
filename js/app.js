$(document).ready(function(){
  $(".depth-0").owlCarousel({
		loop:true,
		nav:true,
	    mouseDrag: false,
	    touchDrag: false,
	    pullDrag: false,
  });
  $(".depth-1").owlCarousel({
		loop:true,
		nav:true,
		items:1,
  });
  $('.owl__depth-0').click(function(){
      var 
          firstFrom   =  $(this).parent('.double').find("img").first().attr('src');
          secondFrom  =  $(this).parent('.double').find("img").last().attr('src');
      $(".depth-1 .active img").first().attr('src', firstFrom);
      $(".depth-1 .active img").last().attr('src', secondFrom);
  		$('.block').addClass('elastic');
  		$(".depth-1__close").addClass('flex');
  		$('.depth-1').addClass('center_v').fadeIn(500);
  		$(".depth-0 .owl-nav").addClass('nein');
    });
	$(".depth-1__close").click(function(){
		$(".block").removeClass('elastic');
		$(".depth-1__close").removeClass('flex');
		$(".depth-1").removeClass('center_v').fadeOut(5);
  	$(".depth-0 .owl-nav").removeClass('nein');
	});
});
