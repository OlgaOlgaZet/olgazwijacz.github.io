let newElement = document.createElement('p');
let newElementContent = document.createTextNode('To jest nowy paragraf');
newElement.appendChild(newElementContent);

console.log(newElement);

let istniejacyWezel = document.getElementById('parFirst').children[3].appendChild(newElement);


let btn = document.createElement('button');
let textBtn = document.createTextNode('Click me');
let classAtr = document.createAttribute('class');

classAtr.value='btn';

document.body.appendChild(btn);
btn.appendChild(textBtn);
btn.setAtributeNode(classAtr);


document.body.removeChild(btn);