$(function(){
var h1Text = $('h1').text() //zwroci aktualny tekst naglowka, ta sama metoda jest do podmiany tresci
console.log(h1Text)
 $('h1').text('To jest nowy tekst'); 
 
 $('h1').text('<span>Pierwsze</span> słowo nagłówkowe'); //Span wyswietli  jako tekst
 $('h1').html('<span>Pierwsze</span> słowo nagłówkowe'); // span doda sie jako znacznik html
 $('span').text('Zmiana');



 //DODAWANIE ELEMENTOW to sie wstawia jako html czyli nie wstawia jako text można sobie tu kawałek bloku html walnąć np $('h1').append('<p>LOL</p>');

 $('h1').append(' Na końcu');
 $('h1').prepend('Na początku ');
 $('h1').after('Po elemencie');
 $('h1').before('<h2>Przed elementem</h2>');


 //USUWANIE ELEMENTOW 
 $('.paragraf').eq(0).empty(); //empty kasuje zawartość
 $('.paragraf').eq(1).remove(); //empty kasuje zcały tag

 $('li').css('margin-left', '20px'); //można jako string metody jedna właściwość
 $('li').css({marginLeft: '20px', color: 'green'}); //albo jako obiekt kilka włąściwośći
 //$ this oznacza-  dla każdego kolejneho li, czyli ten obiekt ktory wywołał iteracje ,each oznacza = dla każdego takiego elementu wywołaj funkcje 
 // w foreach na tablicy jest najpierw index potem element 
 
 
 /* $('ul').each(function(index){
 $(this).css('margin-left', index * 10 +'px')  */  


 /* $('ul:first-of-type li').each(function(index)){
    $(this).css('margin-left', index * 10 +'px') znajdz pierwszy ul - first of type */
   

   /* DWIE PETLE ZEBY OSOBNO KAZDA LISTE WYMARGINOWAC, znajdz wszsytkie ul, w tej funkcji dla dażdego ul znajdz li i wykonaj petle each i tu musi być index bo znajdz li i rob od 0, metoda 'kaczki programistycznej'*/

    $('ul').each(function(){
        $(this).find('li').each(function(index){
                $(this).css('margin-left', index * 10 +'px');
         });
    });



    //  DODAWANIE I USUWANIE KLAS, taki jest właściwy sposob zmiany styli, zmieniamy klase i robimy style tam i tylko dodajemy ta klase tak jak poniżej tj addClass 

    $('li').addClass('list-item');
});