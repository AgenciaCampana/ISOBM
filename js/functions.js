
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
				// $('.home-menu-roll').css('display','none');
			} 
			else {
				nav.removeClass("fixed");
				$('.logo-iso-menu').css('display','none');
				// $('.home-menu-roll').css('display','inline-block');
			}
		}
		else {
			nav.removeClass("fixed");
		}
	});
});

var tamanhoCabecalho = function () {
	var tamanhoTela = $(window).height();
	var larguraTela = $(window).width();
	if (larguraTela > 991) {
		if (tamanhoTela > 890) {
			$(".cabecalho").height(tamanhoTela - 50);
		}
		else {
			$(".cabecalho").height(830);
		}
	}
	else {
		$(".cabecalho").height(830);
	}
}
$(window).resize(function () {
	tamanhoCabecalho();
});
$(document).ready(function () {
	tamanhoCabecalho();
});