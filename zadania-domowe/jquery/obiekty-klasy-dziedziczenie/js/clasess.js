
//ES6 

class User {
    constructor(id, name, age, married) {
    this.id = id;
    this.name = name;
    this.age = age;
    this. married = married;
    };
    printInfo() {
        console.log(`User ${this.id} is name ${this.name}`);
    }
    isMarriedInfo() {
        if(this.married){
            console.log('Zonaty');
        } else {
            console.log('Kawaler');
        };
    }
}
 //konstruktor to specjalna nazwa metody, parset metody ma stworzyc w tym miescu te 
 //id PO znaku = jest tym id z konstruktora



 let user = new User (12, 'Łukasz', 32, true); // NEW - nowa instancja(obiekt) klasy user

 let userArray = [];
for(let i = 0; i<100; i++){
let newUser = new User (i, 'Łukasz', 32, true);
userArray.push(newUser) //dodawanie do tablicy push właściwość tablicy
}

 console.log(user);
 console.log(user.name);
 console.log(userArray);
 
 user.printInfo();


 //tworzymy klase admin, jest to klasa dziedzicząca
 //rozszerzamy ją o nowy klucz, musimy w konstruktorze dopisać z Usera klucze

 class Admin extends User {
     constructor(id, name, age, married, nickname) {
         super(); //super metoda pozwala zczytać dane z Usera
         this.nickname = nickname;
         this.name = name;
         this.married =  married;
     }
     addUser() {
         console.log('Dodano');
     }

 }
 let admin = new Admin(100, 'Admin', 30, false, 'boski'); 
 console.log(admin);
 admin.printInfo();
 admin.addUser();
 console.log(admin.nickname);
 console.log(admin.name);
 user.isMarriedInfo;
