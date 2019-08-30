$(function(){
    slideImg();
    function slideImg(){
        let $interval = setInterval(function(){
            slide()
        }, 4000);
    }
    function slide(){
        $('.slide').animate({
            left: '-100%'
        }, 1000, 'swing', function(){
            $(this).css({left:0});
            $(this).append( $('.slide img').eq(0));
        });
    }
});