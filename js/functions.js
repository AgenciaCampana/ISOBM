var $doc = $('html, body');
$('a').on('click', function() {
	var topo = $( $.attr(this, 'href') ).offset().top;
    $doc.animate({
        scrollTop: topo - 120
    }, 800);
    return false;
});

// Script Menu Mobile
$('.btn-menu').on('click touchstart', function(e){
	$('html').toggleClass('menu-active');
	e.preventDefault();
});

jQuery("document").ready(function($){
var nav = $('.menu');
	$(window).scroll(function () {
		var widthAll = $(window).width();
		if (widthAll > 992) {
			if ($(this).scrollTop() > 136) {
				nav.addClass("fixed");
				$('.logo-iso-menu').css('display','initial');
				$('.home-menu-roll').css('display','none');
			} 
			else {
				nav.removeClass("fixed");
				$('.logo-iso-menu').css('display','none');
				$('.home-menu-roll').css('display','inline-block');
			}
		}
		else {
			nav.removeClass("fixed");
		}
	});
});