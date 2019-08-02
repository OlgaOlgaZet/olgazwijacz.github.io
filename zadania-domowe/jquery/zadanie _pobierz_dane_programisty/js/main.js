$(function(){
  $.getJSON('https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php',function(data){
  console.log(data);
$('#button').after('<div id="dane-programisty"></div>');
$('#button').click(function(){
  $.each(data, function (i, field) {
    $('#dane-programisty').append(field + " ");

});
});
});
});