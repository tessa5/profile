$(function(){
    let $pop = $('#pop'),
        $cont = $('.pop-cont'),
        $p1 = $cont.find('.pi1'),
        $p2 = $cont.find('.pi2'),
        $p3 = $cont.find('.pi3'),
        $p4 = $cont.find('.pi4'),
        
        $c1 = $('.img1'),
        $c2 = $('.img2'),
        $c3 = $('.img3'),
        $c4 = $('.img4');
        
    $c1.click(function(event){
        event.preventDefault();
        $pop.css('display', 'block');
        $p1.css('display', 'block');
        $p2.css('display', 'none');
        $p3.css('display', 'none');
        $p4.css('display', 'none');
    });
     $c2.click(function(event){
        event.preventDefault();
        $pop.css('display', 'block');
        $p1.css('display', 'none');
        $p2.css('display', 'block');
        $p3.css('display', 'none');
        $p4.css('display', 'none');
    });
     $c3.click(function(event){
        event.preventDefault();
        $pop.css('display', 'block');
        $p1.css('display', 'none');
        $p2.css('display', 'none');
        $p3.css('display', 'block');
        $p4.css('display', 'none');
    });
     $c4.click(function(event){
        event.preventDefault();
        $pop.css('display', 'block');
        $p1.css('display', 'none');
        $p2.css('display', 'none');
        $p3.css('display', 'none');
        $p4.css('display', 'block');
    });
    
    $pop.find('button').click(function(){
        $pop.css('display', 'none');
    });
});