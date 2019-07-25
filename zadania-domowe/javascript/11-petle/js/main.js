
// Pętla forEach
let array = ['Jacek', 'Marcin', 'Ania', 'Aga'];

let arrayNumbers = [1,2,3,4,5,6];

for (i=0; i<array.lenght; i++) {
        console.log(`index ${i} element ${array[i]}`);
}

array.forEach(function(element, index) {
        console.log(`element z tablicy${element} i index ${index}`);
})
array.forEach((y, z) => console.log(`element z tablicy ${z}`));

const NewArray = arrayNumbers.map((element => ++element));

console.log(NewArray);


// Pętle for in

let mojObject = {
        name: 'Jacek',
        secondName: 'Marcin',
        age: 37,
}
for (let key in mojObject) {
        console.log(mojObject[key]);
}


// jesli mamy tablice to możemy sobie po niej zrobić pętle

console.log(Object.keys(mojObject));
Object.keys(mojObject).forEach(e => console.log(`klucz ${e} wartosc ${mojObject[e]}`)); 

// Pętla while
let num = 0;
while (num < 5) {
        console.log(num++);
}
let numDo = 0;
do {
        console.log(numDo++);
}while (numDo<8);

for(let i=0; i<300; i++) {
        if (i===25){
                break;
        }
        console.log(i)
}
for (let j=0; j<10; j++) {
        if (j == 5) {
        continue;
        } else {
                console.log(j);

        }
        console.log ('=====')
}

