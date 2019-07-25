// ZMIENNE I STAŁE


//console.log('Hello World')
// var newName = 'Olga';
// let newNumber = 123;
// const nextName = 'Ania';

// console.log(newName);
// console.log(newNumber);
// console.log(nextName);

// newNumber = 321;
// console.log(newNumber);

//nextName = "Monika";
//console.log(nextName);


// FUNKCJE

// function functionOne() {
//     console.log(newName);
// }
// functionOne();

// const functionTwo =function() {
//     console.log(nextName);
// }
// functionTwo();




// function parametrFunction(a,b,c){
//     console.log(a);
//     let suma = b + c;
//     // console.log(suma);
//     return suma;
    
// }
// let sum = 4+ parametrFunction("Suma", 3, 6);
// console.log(sum);


//standard ES6

const arrowFunction = () => {
    console.log("Funkcja strzalkowa");

}
arrowFunction();
const arrowFunctionTwo = (par) =>{
    console.log(par);

}
arrowFunctionTwo('Funkcja strzalkowa 2');


//Zapis strocony
const arrowFunctionThree =a => a;
console.log(arrowFunctionThree("Funkcja 3"));


//Zapis rozszerzony shift+alt+strza kopiuje wiersz
arrowFunctionThree("Funkcja 3");
const arrowFunction3Standard = function(a) {
    return a;
}
console.log(arrowFunction3Standard("Funkcja 3 Standard"));
