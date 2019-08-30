$(function(){
    let $slide = $('.slide img'),
        $count = $slide.length,
        $index = 0;
    
    $slide.eq($index).fadeIn();
    setInterval(function(){
        showSlide()
    },4000);
    function showSlide(){
        let $next = ($index + 1) % $count;
        $slide.eq($index).fadeOut(500);
        $slide.eq($next).fadeIn(500);
        $index = $next;
    }
});