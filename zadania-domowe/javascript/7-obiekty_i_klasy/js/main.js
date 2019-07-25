let obj = {
    name: 'Jacek',
    years: 37,
    print(){
        console.log(this.name);
    },
secondName: 'Marcin',
};


obj.printTwo = function(){
   
   console.log(this.secondName); 
   return this.secondName;
};

obj.todayDay = '20.07.2019';

obj.print()

console.log(obj.printTwo());
console.log(obj);

// KLASY W STANDARDZIE ES5

function Person(name, surname) {
    this.name = name;
    this.surname = surname;
    this.printInfo = function() {
        console.log('Imię' + this.name+ ',' + 'Nazwisko' +this.surname);
    }
}
// KLASY W STANDARDZIE ES6

class PersonES {
    constructor(name, surname) {
    this.name = name;
    this.surname = surname;
    }
   printInfo() {
        console.log(`Imię ${this.name} \nNazwisko ${this.surname}`);
    }
}

let olga = new Person('Olga', 'Zwijacz');
olga.printInfo();
let daria = new PersonES('Daria', 'Daria2');
daria.printInfo();
