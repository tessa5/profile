$(function(){
    let $fade = $('.fade img'),
        $count = $fade.length,
        $index= 0;
    $fade.eq($index).fadeIn();
    setInterval(function(){
        free()
    }, 5000);
    
    function free(){
        let $next = ($index + 1) % $count;
        $fade.eq($index).fadeOut(500);
        $fade.eq($next).fadeIn(500);
        $index = $next;
    }
});