let one = 2;
let two = 8;

let wynik = one % two;

console.log(wynik);

// inkrementacja

console.log(one ++);
console.log(one);

// dekrementacja
console.log(one --);
console.log(one);

var zmienna;

console.log(zmienna);
zmienna = 1;

console.log(zmienna);
console.log(zmienna += 5);
console.log(zmienna %= 5);

// operatory porównania

console.log(1 === '1');

//operatory logiczne

let number = 100;
let wyn = (100<0) ? "ok":"not ok";
console.log(wyn);


//  10 - instrukcje warunkowe

let numer = 2;

function wyswietl() {
    console.log('Libcza rozna od 1');
}
if (numer === 1) {
    console.log('liczba 1');
} else {
   wyswietl();
}

let kolor = "bialyy";

function wyswietl() {
    console.log('Kolor zielony');
}
switch (kolor) {
case 'zielony':
wyswietl();
break;
case 'czerwony':
console.log('Kolor czerwony');
break;
case 'zolty':
console.log('zolty');
break;
deafault: 
console.log('Inny kolor');
}