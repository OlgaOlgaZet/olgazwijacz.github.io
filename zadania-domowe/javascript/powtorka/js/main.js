'use strict';


//RODZAJE

//DEKLARACJA
function add(numOne, numTwo){
    const result = numOne + numTwo;
    return  result;
}
// to samo któcej:

function add(numOne, numTwo){
    if(typeof numOne === 'number' && typeof numTwo === 'number' ) {
        return numOne + numTwo;
    }
    return 'Błąd';
   // console.log(arguments); //arguments - rzadko się z tego korzysta, funkcja zdefiniowana w prototypie funkcji javascript, jakby 'tablica' posaidająca pola
   // return numOne + numTwo;

}
// console.log(add(2,'4'));

// console.log(add(2,4));
// console.log(add(1,2));

// console.log(sum);


//WYRAŻENIE FUNKCYJNE
var sum = 9; // wyloguje undifaied bo za pierwszym przejściem widzi tylko zmienną, a za drugim dopiero przypisaną do niej wartość, a że console log jest wyżej to nie łapie przypisanej 9 w pierwszym przejściu.
const divide = function(numOne, numTwo){ //kiedy funkcja jest podpięta pod zmienną to sie używa przy hoisting, let i const nie podlega hoistingowi,
    return numOne / numTwo;
}


////////////////////////////////////////////////////

// SELF INVOKE FUNCTION samo wywołująca się funkcja, gdy chcemy do zmiennej przypisać wynik funkcji
const result = (function(){ 
    // console.log('dwa');
    return 'trzy'
})();
// console.log(result);

////////////////////////////////////////////////////

//FUNCKJA STRZAŁKOWA

//w jednej lini jak nie ma nawiasów toreturn jest automatyczny
// const multiply = (a,b) => {
// return a * b;
// }

//w jednej lini jak nie ma nawiasów toreturn jest automatyczny

const multiply = (a,b) => a * b;


// console.log(multiply(1,2));


////////////////////////////////////////////////////

class Person {
    constructor() {
        this.name = 'Piotrek';


    setTimeout(function() {
        // console.log(this.name);
    }, 1000) //tu sie nie wywoła, setTimeout to funkcja JS obiektu window wiec tu this loguje wszystko z window a poniżej tylko to co jest w person
        setTimeout(()=> {
        // console.log(this.name); //this odwołuje się do zakresu leksykalnego otaczającego go tj. Person, this w funkcji strzałkowej odwołuje się do klasy w której jest umieszone a nie czałego obiektu
    }, 1000) 


document.getElementById('btn').addEventListener('click', function(){
    console.log( this);
    }.bind(this)) //bind jak damy to wtedy odwołuje się do obiektu person czyli tak jak poniżej w przypadku funckji strzałkowej
    document.getElementById('btn').addEventListener('click', () => {
        console.log( this);
    })
}
}
const user = new Person();