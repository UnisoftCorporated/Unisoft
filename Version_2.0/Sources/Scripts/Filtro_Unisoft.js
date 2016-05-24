function cantidad(){				
	var request = gapi.client.gmail.users.messages.list({
		'userId': 'me',					
		'labelIds' : ['SENT','Label_3']
	});	 
	request.execute(function(resp) {
		var messages = resp.messages;
		cantidad = messages.length;	
		cantidad = enviadosImportantes(cantidad);
		appendPre("La cantidad de mensajes enviados para unisoft fueron: " + cantidad +"\n");					
	    appendPre("\n");
	});	
}
