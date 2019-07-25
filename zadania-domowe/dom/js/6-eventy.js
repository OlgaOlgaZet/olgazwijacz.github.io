let buttons = document.getElementsByClassName('edit');
console.log(buttons);

function clickMe(){
    console.log('click');
    buttons[1].removeEventListener('click', clickMe);
}
buttons[0].onclick = clickMe;

// buttons[1].addEventListener('click', clickMe);

function clickMeSecond(e) {
    console.log(e.target);
    e.target.style.color = "red";
    e.target.classList.toggle('active');
}
buttons[1].addEventListener('click', clickMeSecond);


function clickLink(e) {
    e.preventDefault();
    alert('Link nie działa!!!');
}
document.getElementById('link').addEventListener('click', clickLink);


document.getElementById('exampleDiv').addEventListener('click',function(e) {
    alert('Kliknięto div');
});
document.getElementById('exampleLink').addEventListener('click',function(e) {
    alert('Kliknięto div');
e.preventDefault();
e.stopPropagation();
alert('Kliknięto link')
});