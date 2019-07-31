/* $(function(){
    $('h1').click(function(){
        $(this).css('color', 'green');
    });
})
*/

//TO SAMO CO POWYŻEJ TYLKO Z WYKORZYSTANIEM ARKUSZA STYLI: dodajemy w css klase i tutaj podpinamy sama klase a nie robimy w js styli 

//addClass - dodaj klasę
//toggleClass - przełącz

$(function(){
    $('h1').click(function(){
        $(this).toggleClass('text-red');
    });

    // przy on przypisujemy zdarzenie i funkcje zwrotna
    $('ul').on({    
        click: function() {
            $(this).css('background-color', 'gray');
        },
        mouseover: function() {
            $('h1').css('color', 'blue');
        }
    });
    $('form').submit(function(e){
        e.preventDefault();
        var value = $('#input-text').val();  //val z () bo jest metodą a nie właściwość, przez metodę za pomocą jquery ustawiana jest ta właściwość
        $('#dane-z-forma').text(value);

    })
});
