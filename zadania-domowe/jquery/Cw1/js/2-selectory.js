// Selektory czyli w jaki sposob sie odwolujemy

/* $(function()){ b} Spradz czy dolar jest załadowany (czylo jquery) i jezeli tak to rob cala reszte*/

$(function(){
var heading = $('#main-heading') //Jesli chcemy cos wyszukać w html to dajemy to w stringa, tutaj: szukaj wszystkich elementow z id heading
console.log(heading); //w konsoli wyświetli się jako kolekcja (tablica)

var paragraphs = $('.paragraph');
console.log(paragraphs);


var listItems = $('li');
console.log(listItems);

//teraz chcemy zmienić kolor wszystkich elementow listy, najpierw robimy w czystym js

var items = document.getElementsByTagName('li'); //forEach i push nie zadziała bo to nie jest tablica, htmlcollection to specyficzny rodzaj obiektu ktory przechowuje dane jak tablica ale nie jest tablica. 
console.log(items); 
/* items.style.color = 'pink';  to nie zadziała bo teraz to działa na tablice a ona nie ma takiej możliwości trzeba użyć FOR*/

/* TO ZADZIAŁA: 
for(var i = 0; i<items.length; i++){
items[i].style.color = 'pink';
}
*/

/* ROBIMY TO SAMO W QUERY*/
listItems.css('color', 'pink'); //jesli wywołamy metodę na kolekcji to wykonaj ją na wszystkich elemenetach, nie jest to bezpośrednia tablica sama w sobie dlatego listItems[0] nie zadziała jeśłi chcemy się odwołać do danego elementu dlatego piszemy eq(0) listItems.eq(0)css('color', 'pink'); 
listItems.eq(0).css('color', 'red'); 
});
