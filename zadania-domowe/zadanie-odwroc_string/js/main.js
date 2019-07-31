// Napisz skrypt, który po kliknięciu w przycisk doda kolejny element do listy z nazwą zakończoną liczbą kolejnego elementu - np. Item 4, Item 5, Item 6 itd.
// Każdemu z elementów listy ustaw klasę "item"

// Zadanie domowe robimy z wykorzystaniem serwisu https://repl.it

// Podpowiedź przed wysłaniem zadania do sprawdzenia:
// - napisz funkcję obsługującą klik przycisku button
// - musisz pobrać obecną ilość item'ów w liście, aby dodać numer kolejnego
// - musisz stworzyć w JavaScript nowy element w HTML i dodać go do listy używając odpowiedniej do tego metody w JS :)


document.getElementById("button").onclick=dodajElement;

function dodajElement() {
 
    let elementy = document.getElementsByClassName('item');
    let zliczanie = elementy.length;
    zliczanie++;
    console.log(zliczanie);
    const nowyItem = document.createElement('li');
    let textNowyItem = document.createTextNode(`Item ${zliczanie}`);
    let nowyItemAtr = document.createAttribute('class');
    nowyItemAtr.value='item';
    document.body.appendChild(nowyItem);
    nowyItem.appendChild(textNowyItem);
     nowyItem.setAttributeNode(nowyItemAtr);
    document.getElementById('items').appendChild(nowyItem);
   
    }
    

   
    


