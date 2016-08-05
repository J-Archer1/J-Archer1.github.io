function grabData()
{
    $.ajax(
    {
        url: 'https://api.imgflip.com/get_memes', 
        success:function(result)
        {
            $('img').attr('src', data['file'])
            print_result(result);
        }
    })
}

function print_result(obj){
    //removes previous content displayed in web browser
    $('#content').append('img');


    //iterate through onjects stored in result adn print to screen
    for(var i in obj){
        $('#content').append( '<p>' +i+ '</p>');
    }

}

$('#getMeme').click(function(){

    grabData();
})