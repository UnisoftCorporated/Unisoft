function informacion(labelIds,query){
    var request = gapi.client.gmail.users.messages.list({
		'userId': 'me',     
		'q': query,
		'labelIds':labelIds
	});	
	request.execute(function(resp) {
		var messages = resp.messages;
		cantidad = messages.length;					
		appendPre("La cantidad de mensajes "+ labelIds + " "+ query + " fueron :  " + cantidad +"\n");
		appendPre('Los respectivos identificadores de los mensajes son :')
		for(var i = 0; i < messages.length; i++) {
			appendPre(i +": "+ messages[i].id);
		}
		appendPre("\n");
	});				
}	
