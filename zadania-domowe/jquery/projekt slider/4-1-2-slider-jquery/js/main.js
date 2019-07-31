$(function(){
    var slideShow = $('.slide-show');
    var slideCount= $('.single-slide').length;
    var slideWidth = 100/slideCount;   // caly widok dzielone przez ilosc slajdow
    var slideIndex = 0; //to bedzie nasza flaga czyli przechowuje info zeby je uzyc potem w skrypcie
    // console.log(slideWidth);

    /* Ustaw szerokość knotenera .slide-show ilosc-slajdow *100 +'%' */ 
    slideShow.css('width', 100 * slideCount + '%'); // mnożymy x 100 bo caly slajd ma zajmowac 100 

    /* Ustaw szerokość pojedynczego slajdu na  100/ ilosc-slajdow +'%' 
    Ustaw przesunięcie każdego slidu i index * szerokość-slidu +'%'*/ 

    $('.single-slide').each(function(index){
            $(this).css({width: slideWidth + '%', left: index * slideWidth + '%'}); // left bo jest pozycja absolute
        });


    // Robimy przejście slajdu na klik  
    /* Po kliklieciu na element wykonal animację na elemekcie slideshow gdzie przesuniesz go o -100* to trwa 800 ms i ustaw nowa wartość zmiennej slideIndex (czyli slideIndex = 0 +1) - ponieważ mamy slideIndex jest poza funkcją to sie nie nadpisuje
    */




//ROZSZERZONY ZAPIS

    // $('.next-slide').click(function(){
    //     console.log('next');
    //     // slideShow.animate({left: '-100%'}, 800, function(){
    //    /* }) //animate a nie css bo css nie bedzie płynnego przejscia. Przesuwamy o -100% bo ma sie przesowac w lewo) poniżej inny zapis left: */
    //     slideShow.animate({left: (slideIndex +1) * (-100) + '%'}, 800, function(){
    //     slideIndex +=1; //dzieki temu możemy slidować do nieskończoności 
    //     });  
    // });
    //     $('.prev-slide').click(function(){
    //         console.log('prev');
    //         slideShow.animate({left: (slideIndex -1) * (-100) + '%'}, 800, function(){
    //         slideIndex -=1; //dzieki temu możemy slidować do nieskończoności 
    //         });
    //     });

// SKRÓCONY ZAPIS POWYŻSZEGO 


    function slide(newSlideIndex) {
        if (newSlideIndex > slideCount - 1 || newSlideIndex < 0) return // -1 bo ilość slidów jest wieksza niż ilość indeksów dlatego -1

        slideShow.animate({left: newSlideIndex * (-100) + '%'}, 800, function(){
            slideIndex = newSlideIndex; 
        });
    }
        $('.next-slide').click(function(){
                slide(slideIndex + 1);
        });     
        $('.prev-slide').click(function(){
                slide(slideIndex - 1);
        });

// OBSŁUGA STRZAŁKAMI KLAWIATURY
 $(window).keydown(function(event){
console.log(event.keyCode); // .keypress nie działa na klawiaturze numerycznej. Dzieki przypisaniu eventu w konsoli możemy sobie odczytać keyCode danego klawisza. np w = 87; Sprawdzamy w konsoli jakie wartości mają strzałki.
switch(event.keyCode) {
    case 37:
            slide(slideIndex - 1);
    break;
    case 39:
            slide(slideIndex + 1);
    break;
}
 });
        
});






