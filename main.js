$(document).ready(function(){
    $('.openmenubg').hide();
    $('.menu').click(function(){
        $('.openmenubg').slideDown(500);
        $('.grid').hide();
        $('.header').delay(500).queue(function(next){
            $(this).css('background-image','none');
            next();
        });
    });
    $('.fa-times').click(function(){
        $('.openmenubg').slideUp(500);
        $('.grid').delay(500).fadeIn(200);
        $('.header').css('background-image','linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url(gallery/womenbg011.jpg)');
    });
});