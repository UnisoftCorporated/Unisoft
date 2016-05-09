function informacion(labelIds,query,salida){
	var request = gapi.client.gmail.users.messages.list({
		'userId': 'me',     
		'q': query,
		'labelIds':labelIds
		});	
		request.execute(function(resp) {
		var messages = resp.messages;
		cantidad = messages.length;					
		appendPre(cantidad,salida);				
		});				
}