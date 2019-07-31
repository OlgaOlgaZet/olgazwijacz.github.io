// const przycisk = document.getElementById('button');
// console.log(przycisk);
// function getData() {
//     console.log('get Data działa');
//     fetch('https://jsonplaceholder.typicode.com/todos')
//   .then(response => response.json())
//   .then(json => {
//   });
// };


// getData();

// przycisk.addEventListener("click", getData);

// let pe = document.createElement('p');
// let textPe = document.createTextNode();

// document.body.appendChild(pe);
// pe.appendChild(textPe);
let userNum = 1;

const getData =(e) => {
e.preventDefault();
    console.log('get Data działa');
    fetch('https://jsonplaceholder.typicode.com/users/' + userNum)
      .then(response => response.json())
      .then(json => {
          console.log(json);
          let parId = document.createElement('p');
          let parName = document.createElement('p');
          let parUrl = document.createElement('p');
          let div = document.createElement('div');

        parId.innerText = json.id;
        parName.innerText = json.username;
        parUrl.innerText = json.website;

        div.appendChild(parId);
        div.appendChild(parName);
        div.appendChild(parUrl);
        
        document.body.appendChild(div);
      

      });
      userNum++;
}
document.getElementById('get-button-data').addEventListener('click', getData);