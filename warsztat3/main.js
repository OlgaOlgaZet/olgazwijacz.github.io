let wszystekieZgody = document.getElementById('wszystkie');
let zgoda1 = document.getElementById('zgoda-1');
let zgoda2 = document.getElementById('zgoda-2');
let btnWyslij = document.getElementById('wyslij');
let name = document.getElementById('name');
let email = document.getElementById('email');
let wiadomosc = document.getElementById('wiadomosc');

let allInputs = document.getElementsByTagName('input');
console.log(allInputs);

function stanCheckboxa() {
    zgoda1.checked = this.checked;
    zgoda2.checked = this.checked;

    zgoda1.disable = this.checked;
    zgoda2.disable = this.checked;
}

wszystekieZgody.onchange = stanCheckboxa;

function waliduj(event) {
    wiadomosc.innerHTML = '<ul id="wiadomosc"></ul>'

    if (name.value.trim() == "") {
        let msgImie = document.createElement('li');
        msgImie.innerHTML = "Wpisz Imie";
        wiadomosc.appendChild(msgImie);
        event.preventDefault();
    }

    if (email.value.trim() == "") {
        let msgEmail = document.createElement('li');
        msgEmail.innerHTML = "Wpisz Email";
        wiadomosc.appendChild(msgEmail);
        event.preventDefault();
    }

    if (! zgoda1.checked) {
        let msgZgoda1 = document.createElement('li');
        msgZgoda1.innerHTML = "Nie wyraziles zgody 1 !";
        wiadomosc.appendChild(msgZgoda1);
        event.preventDefault();
    }

    if (! zgoda2.checked) {
        let msgZgoda2 = document.createElement('li');
        msgZgoda2.innerHTML = "Nie wyraziles zgody 2 !";
        wiadomosc.appendChild(msgZgoda2);
        event.preventDefault();
    }
}

btnWyslij.addEventListener('click', waliduj);





