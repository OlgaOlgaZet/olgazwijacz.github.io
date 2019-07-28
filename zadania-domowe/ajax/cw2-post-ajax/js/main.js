/* napisz funkcję getPosts() i wywołaj ją po załadowaniu strony. Napisz nasłuch zdarzenia click dla przycisku- po kliknięciu wyłap funckę getPosts()*/



const getPosts = (pageNum) => {
    console.log('dziala');


/* W funkcji getPost pobierz dane z pierwszą stroną postow z adresu  'https://jsonplaceholder.typicode.com/photos?_page=' */ 


fetch('https://jsonplaceholder.typicode.com/photos?_page=' + pageNum)
      .then(response => response.json())
      .then(posts => {

/* dla KAŻDEGO z pobranych postów stworz kontener div, obraze img oraz nagłówek h2 - wstaw do nich odpwoeidnie dane, dodaj je do kontenera, a kontener dodaj do znacznika z id #post-list */

            posts.forEach(post=>{
         

            let div = document.createElement('div');
            let img = document.createElement('img');
            let h2 = document.createElement('h2');
            img.setAttribute('src', post.url); //img nie przechowuje tekstu, zdjęcie przekazywane jest w atrybucie zatem misumu dodac klase czyli tutaj src i w zawartości wpisać url obrazka czyli post.url w tym przypadku. 
            img.setAttribute = ('alt', post.title);
            h2.innerText = `${post.id}. ${post.title}`;
            
            //inner html wstawia tylko stringi zatem jeśli chce wstawić do diva img i h2 to musze to zrobić appenchildem
            div.classList.add('post-item'); //dodajemy klase dod diva. classList ma metode toggle też warto wiedzieć
            div.appendChild(img);
            div.appendChild(h2);
            document.getElementById('post-list').appendChild(div);
  
    
            });

});


}
getPosts(1);


document.getElementById('get-posts').addEventListener('click', ()=> {
    let countPosts = document.getElementsByClassName('post-item').length;

    console.log(countPosts)
    let nextPage = (countPosts/10) +1;
    getPosts(nextPage);
});


//DODAJ INFINITE SCROLLA

//czym się różni funkcja i wyrazenie funkcyjne
//czym jest rekurencja
