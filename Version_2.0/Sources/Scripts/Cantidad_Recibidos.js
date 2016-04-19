/**
* @author Cris
*/
/**
* Obtiene la información de la cantidad de mensajes recibidos por el usuario autorizado.
*/							
function cantidadRecibidos(){	
	var request = gapi.client.gmail.users.messages.list({ 
		'userId': 'me',
		'labelIds' : 'INBOX'					
	});	 
	request.execute(function(resp) {
		var messages = resp.messages;
			appendPre('Mensajes:');					
			cantidad = messages.length;					
			appendPre('Cantidad De Mensajes recibidos: '+cantidad);	
	});	
}
