

function pobierz(event) {
    event.preventDefault();
    let formularz = document.getElementById('formularz');
    for (let i=0; i<formularz.lenght; i++) {
        if (formularz[i].value != 'Submit') {
            console.log(formularz[i].value);
        }
    }

}
document.getElementById('formularz').addEventListener('Submit', pobierz);

