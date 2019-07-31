// referencja do modelu jquery to $(document) 
/* $(document).ready(function(){

}

to to samo co:
$(function()  {
}
*/





$(document).ready(function(){
   console.log('dziala');
});
$(function()  {
$('h1').css('color', 'red').hide(2000).show(3000); //w czysty, js byłoby document.getElementById('h1').style.color='red'.hide='2000'.show'3000';
});