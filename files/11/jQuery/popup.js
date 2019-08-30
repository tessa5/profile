$(function(){
    let $pop = $('#popup'),
        $cont = $('.pop-cont'),
        $p1 = $cont.find('.p-img1'),
        $p2 = $cont.find('.p-img2'),
        $p3 = $cont.find('.p-img3'),
    
        $c1 = $('.img1 a'),
        $c2 = $('.img2 a'),
        $c3 = $('.img3 a');
    
    $c1.click(function(event){
        event.preventDefault();
        $pop.css('display', 'block');
        $p1.css('display', 'block');
        $p2.css('display', 'none');
        $p3.css('display', 'none');
    });
    $c2.click(function(event){
        event.preventDefault();
        $pop.css('display', 'block');
        $p1.css('display', 'none');
        $p2.css('display', 'block');
        $p3.css('display', 'none');
    });
    $c3.click(function(event){
        event.preventDefault();
        $pop.css('display', 'block');
        $p1.css('display', 'none');
        $p2.css('display', 'none');
        $p3.css('display', 'block');
    });
    $cont.find('button').click(function(){
        $pop.css('display',"none");
    });
});