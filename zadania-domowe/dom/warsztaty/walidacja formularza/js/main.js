let wszystkieZgody = document.getElementById('wszystkie');
let zgoda1 = document.getElementById('zgoda-1');
let zgoda2 = document.getElementById('zgoda-2');
let btnwyslij = document.getElementById('Wyslij');
let name = document.getElementById('name');
let email = document.getElementById('email');
let wiadomosc = document.getElementById('wiadomosc');




function stanChecboxa(){
    zgoda1.checked = this.checked;
    zgoda2.checked = this.checked;
  
    zgoda1.disable = this.checked;
    zgoda2.disable = this.checked;
}
wszystkieZgody.onchange = stanChecboxa;


// funkcja do walidacji formularza

function waliduj(event) {
    wiadomosc.innerHTML = '<ul id="wiadomosc"></ul>'

    if(name.value.trim() == "") { //jeśli strimowane value jest rowne pustemu stringowi tzn ze nic nie mamy w formularzu
    let msgImie = document.createElement('li');
    msgImie.innerHtml = "Wpisz Imie";
    wiadomosc.appendChild(msgImie);
    event.preventDefault();

}
if (email.value.trim() == "") {
let msgEmail = document.createElement('li');
msgEmail.innerHTML = "Wpisz Email!";
wiadomosc.appendChild(msgEmail);
event.preventDefault();
}
if (! zgoda1.checked)  {//rozna od zaznaczone
let msgZgoda1 = document.createElement('li');
msgZgoda1.innerHTML = "Nie wyrazileś zgody1!";
wiadomosc.appendChild(msgZgoda1);
event.preventDefault();
}
if (! zgoda2.checked)  {//rozna od zaznaczone
    let msgZgoda2 = document.createElement('li');
    msgZgoda2.innerHTML = "Nie wyrazileś zgody2!";
    wiadomosc.appendChild(msgZgoda2);
    event.preventDefault();
    }
}
btnwyslij.addEventListener('click', waliduj);
