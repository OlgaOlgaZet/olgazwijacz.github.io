// string i number

let stringVar= 'jestem stringiem';
let numerVar = 123445;



console.log(typeof stringVar);
console.log(typeof numerVar);

console.log(`tekst plus zmienna liczbowa ${numerVar}`);
console.log(typeof (stringVar + numerVar));

// Boolen
let bolVar = true;

console.log(typeof bolVar);

let divMain = document.getElementById('main');

function checkDiv(){
    if(divMain !== null){
        console.log('Div istnieje');
    }
    else {
        console.log('nie ma diva');
    }
}
checkDiv();

