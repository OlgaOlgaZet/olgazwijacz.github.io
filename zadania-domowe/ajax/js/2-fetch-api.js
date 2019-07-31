fetch('https://jsonplaceholder.typicode.com/todos')
  .then(response => response.json())
  .then(json => {
     
       
    
    document.getElementById('get-to-do').addEventListener('click',function(){
            json.forEach(todo =>{ //petla po wszsytkich obiektow, json to tablica, foreach to metoda, todo 
                console.log(todo)
                let toDoDiv = document.createElement('div');
                let  fontColor = (todo.completed)? 'green' : 'red'; //tworze stringa z kolorem w zależności czy todo jest wykonane czy nie
    
                toDoDiv.innerHTML = todo.title; //wstrzykuje tudodiva do todo.title
    
                toDoDiv.setAttribute('class', 'to-do');
    
                toDoDiv.style.color = fontColor;
    
                document.getElementById('to-do-list').appendChild(toDoDiv); //biore referencje do diva gdzie chce to wstawic
            });
       
       
    });
});
 
