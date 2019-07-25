function iloczyn( p1, p2, p3 ) {
    let wynik = p1 * p2 * p3;
    return wynik;
  }
  let wynikZwracanyPrzezFunkcje = iloczyn(3, 5, 6);
  console.log(wynikZwracanyPrzezFunkcje);
  
  (function() {
    for (let i=0; i<10; i++ ){
      console.log(i);
    }
  
  })();
  /*  ALBO taki zapis 
  
  (() {
    for (let i=0; i<10l i++ ){
      console.log(i);
    }
  }
  })();
   */


   