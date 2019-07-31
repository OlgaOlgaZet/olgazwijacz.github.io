
/* $(function() {
    $('h1').hide(5000), function() {
       // $(this).remove(); - eloement zniknie po wykonaniu hide

    }
});
*/

/* $(function() {
    $('h1').hide(5000), show(5000) ;
    
});
*/

/*$(function() {
    $('h1').fadeOut(5000).fadeIn(5000); 
       
});
*/

/* $(function() {
    $('h1').slideUp(5000).slideDown(5000); //leci tylko gora dol, nie zmiania tak jak show hide opacity i szerokość    
}); */

$(function() {
    $('h1').animate({marginTop: '200px'}, 2000, function(){
        $(this).animate({marginLeft: '200px'}, 2000, function(){
            $('img').show(1000);
        });
    });
});


