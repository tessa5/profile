/*$(function(){
    let $pop = $('#pop'),
        $cont = $('.pop-cont'),
        $p1 = $cont.find('.pop1'),
        $p2 = $cont.find('.pop2'),
        $p3 = $cont.find('.pop3'),
        $p4 = $cont.find('.pop4'),
        $p5 = $cont.find('.pop5'),
        $p6 = $cont.find('.pop6'),
        $p7 = $cont.find('.pop7'),
        
        $c1 = $('.img1'),
        $c2 = $('.img2'),
        $c3 = $('.img3'),
        $c4 = $('.img4'),
        $c5 = $('.img5'),
        $c6 = $('.img6'),
        $c7 = $('.img7');
    
    $c1.click(function(event){
        event.preventDefault();
        $pop.css('display', 'block');
        $p1.css('display', 'block');
        $p2.css('display', 'none');
        $p3.css('display', 'none');
        $p4.css('display', 'none');
        $p5.css('display', 'none');
        $p6.css('display', 'none');
        $p7.css('display', 'none');
    });
    
    
     $c2.click(function(event){
         event.preventDefault();
        $pop.css('display', 'block');
        $p1.css('display', 'none');
        $p2.css('display', 'block');
        $p3.css('display', 'none');
        $p4.css('display', 'none');
        $p5.css('display', 'none');
        $p6.css('display', 'none');
        $p7.css('display', 'none');
    });
    
     $c3.click(function(event){
         event.preventDefault();
        $pop.css('display', 'block');
        $p1.css('display', 'none');
        $p2.css('display', 'none');
        $p3.css('display', 'block');
        $p4.css('display', 'none');
        $p5.css('display', 'none');
        $p6.css('display', 'none');
        $p7.css('display', 'none');
    });
    
     $c4.click(function(event){
         event.preventDefault();
        $pop.css('display', 'block');
        $p1.css('display', 'none');
        $p2.css('display', 'none');
        $p3.css('display', 'none');
        $p4.css('display', 'block');
        $p5.css('display', 'none');
        $p6.css('display', 'none');
        $p7.css('display', 'none');
    });
    
     $c5.click(function(event){
         event.preventDefault();
        $pop.css('display', 'block');
        $p1.css('display', 'none');
        $p2.css('display', 'none');
        $p3.css('display', 'none');
        $p4.css('display', 'none');
        $p5.css('display', 'block');
        $p6.css('display', 'none');
        $p7.css('display', 'none');
    });
    
     $c6.click(function(event){
         event.preventDefault();
        $pop.css('display', 'block');
        $p1.css('display', 'none');
        $p2.css('display', 'none');
        $p3.css('display', 'none');
        $p4.css('display', 'none');
        $p5.css('display', 'none');
        $p6.css('display', 'block');
        $p7.css('display', 'none');
    });
    
     $c7.click(function(event){
         event.preventDefault();
        $pop.css('display', 'block');
        $p1.css('display', 'none');
        $p2.css('display', 'block');
        $p3.css('display', 'none');
        $p4.css('display', 'none');
        $p5.css('display', 'none');
        $p6.css('display', 'none');
        $p7.css('display', 'none');
    });
    
    $pop.find('button').click(function(){
        $pop.css('display', 'none');
    });
});*/

$(function(){
    let $pop = $('#pop'),
        $cont = $('.pop-cont'),
        $p1 = $cont.find('.pop1'),
        $p2 = $cont.find('.pop2'),
        $p3 = $cont.find('.pop3'),
        
        $c1 = $('.img1'),
        $c2 = $('.img2'),
        $c3 = $('.img3');
    
    $c1.click(function(){
        $pop.css('display', 'block');
        $p1.css('display', 'block');
        $p2.css('display', 'none');
        $p3.css('display', 'none');
    });
    $c2.click(function(){
        $pop.css('display', 'block');
        $p1.css('display', 'none');
        $p2.css('display', 'block');
        $p3.css('display', 'none');
    });
    $c3.click(function(){
        $pop.css('display', 'block');
        $p1.css('display', 'none');
        $p2.css('display', 'none');
        $p3.css('display', 'block');
    });
    
    $pop.find('button').click(function(){
        $pop.css('display','none');
    });
});