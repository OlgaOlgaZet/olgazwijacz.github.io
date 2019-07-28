
//TWORZENIE OBIEKTU

let user = {
    id: 102,
    nickname: 'ollga',
    name: 'Olga',
    surname: 'Zwijacz',
    married: true,
    children: [{
        name: 'Kasia',
        childId: 190,
    },{
        name: 'Madzia',
        childId: 111,
    }],
    age: 32,
    printInfo(){
        console.log(`Użytkownik o imieniu ${this.id} ma na imię ${this.name}...`) //this.id oznacza id tego obiektu, bo nie mamy zdefiniowanej zmiennej ,może być też user.id

    },
    // PARAMETRY METODY

    setNickname(newName) {
        this.nickname= newName; //stworzyliśmy metode setnickname gdzie dalismy parametr z nowym nikiem
    }
}
user.setNickname('zenek44'); 
console.log(user);

//DOSTĘP DO WŁAŚCIWOŚCI OBIEKTU

console.log(user.name);  // taki
console.log(user['name']); //albo taki, oba OK
console.log(user['chosenfild']); //albo taki, jak mamy wczesniej zdefiniowana zmienna, ktora jest poza obiektem a odwołuje się do zmiennej tego obiektu let chosenfild = 'age' 


//DOSTĘP DO METODY OBIEKTU

user.printInfo(); //metody sa funkcjami tylko trzeba odwołać się do obiektu (w tym przypadku user) zeby z niej skorzystać
console.log(); //konsola jest obiektem o metodzie log:)




//obiekt można przypisać do wielu zmiennych 
let currentUser = user; 
user.setNickname('adamowak'); 
console.log(currentUser);


function changeUser(obj) {
    obj.name = 'Ola';
}
currentUser.isLogged = true;
console.log(currentUser);

console.log(user.children[1].name);