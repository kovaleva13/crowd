$(document).ready(function(){
    $('.slider').slick({
        arrows:false,
        speed:1000,
        easing:'ease',
        autoplay:true,
        autoplaySpeed:2500,
        fade:true
    });
    $('.header__burger').click(function(event) {
		$('.header__burger,.header__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
});
