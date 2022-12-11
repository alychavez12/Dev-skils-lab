

// add a elements to the list when the button is click.
$('button').click(function() {
    let mylist = $('#input').val();
    $('#list').append('<li>'+mylist+'</li>');
    return false;   
 });

 //it will remove skills from the list with one click

 $('ul').on('click', 'li', function() {
    $(this).remove();
 })




