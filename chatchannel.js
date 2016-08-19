var database = firebase.database().ref();
function sendMessage(){
	var name = $("#name").val();
	var message = $("#message").val();
		database.push({
			'name':name,
			'message': message,
		});
}
//function getData(){
database.on('child_added',function(dataRow){
	var row = dataRow.val();
	$('#chatbox').append("<p>" + row.name + " : " + row.message);



})
//}

