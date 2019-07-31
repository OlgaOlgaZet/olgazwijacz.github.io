
    // znajdz element ..............................nasluchuj zdarzenie
document.getElementById("quadraticEquation").addEventListener("submit", function(e){
    e.preventDefault();
   
    /*zablokuj domyslne działanie - po kliku suba nie będzie przeladowywac
    // console.log('test')// sprawdzamy czy się logute test w konsoli, jeśli tak to funkja nam odpala, fajnyu   sposob na sprawdzeni czy funkcja ddziała*/
    let result;
    let a = parseInt(document.getElementById('a').value); /*pobieramy sobie każdy element po id a value to jesto wartość*/
    /* console.log(typeof a)*/ /*sprawedza tym danych powinien być liczba a loguje string robimy parseInt*/
     let b = parseInt(document.getElementById('b').value);
    let c = parseInt(document.getElementById('c').value);
   
    let delta = Math.pow(b, 2) - (4*a*c);
    console.log(a,b,c);
    document. getElementById('wynik').innerHTML = delta; 
    /* pobieramy referencje do obiektu paragrafu z id "wynik" poprzez getElby i za pomocą innerHtml nadpisz go wynikiem delty. Inner html to włąściwość*/
    

     /*jak wieksza od zera to dwa miejsca zerowe dlatego x1 i x2*/ 
    if(delta>0){
    let x1 = (-b-Math.sqrt(delta))/(2*a);
    let x2 = (-b+Math.sqrt(delta))/(2*a);
    result = `x1 jest równie ${x1}, x2 jest równe ${x2}`;
    } else if(delta === 0) {
        let x = -b/(2*a) ;
    } else {
    result = 'Brak miejsc zerowych';
    }
    document.getElementById('miejscezerowe').innerHTML = result // resulty z if
});
