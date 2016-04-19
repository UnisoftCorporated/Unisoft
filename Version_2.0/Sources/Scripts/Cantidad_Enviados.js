/**
* @author Cris
*/
/**
* Obtiene la información de la cantidad de mensajes enviados por el usuario autorizado.
*/						
function cantidadEnviados(){	
	var request = gapi.client.gmail.users.messages.list({ 
		'userId': 'me',
		'labelIds' : 'SENT'					
	});	 
	request.execute(function(resp) {
		var messages = resp.messages;
			appendPre('Mensajes:');					
			cantidad = messages.length;					
			appendPre('Cantidad De Mensajes enviados: '+cantidad);	
	});	
}
