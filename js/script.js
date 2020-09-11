$(document).ready(function(){
    $('.slider').slick({
        arrows: false,
        dots:true,
        infinite: true,
        autoplay: true,
        autoplayspeed: 1500,
        pauseOnHover: true,
        pauseOnDotsHover:true,
    });
    // $('.header__burger').click(function(event) {
    //     $('.header__burger,.header__menu').toogleClass('active');
    // });
    $('.header__burger').click(function(){
        $('.header__burger, .header__menu').toggleClass('active');
	$('body').toggleClass('lock');
});

$('.header__menu').click(function(){
       $('.header__burger, .header__menu').removeClass('active');
       $('body').removeClass('lock');
});
});