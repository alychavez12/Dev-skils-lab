

let redIcon = "<i id='icon' class='fas fa-times'></i>";

// add a elements to the list when the button is click.
$('button').click(function() {
    let mylist = $('#input').val();
    $('#list').append(`<li>${redIcon} ${mylist}</li>`);
    return false;   
 });


 //it will remove an skill from the list with one click.

 $('ul').on('click', 'li', function() {
    $(this).remove();
 })




