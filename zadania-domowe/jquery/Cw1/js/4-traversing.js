$(function(){
    $('ul').each(function(){
        $(this).find('li').each(function(index){
            $(this).css('margin-left', index * 10 +'px');
        });
    });
});