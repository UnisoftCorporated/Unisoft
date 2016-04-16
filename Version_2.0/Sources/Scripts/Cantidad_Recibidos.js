/**
* @author Cris
*/
var CLIENT_ID = '809466617807-82ulq5gstd6l2bfrndutji0to1ink7ba.apps.googleusercontent.com'; // ID del cliente para acceder.
var SCOPES = ['https://www.googleapis.com/auth/gmail.readonly']; // Permisos del usuario.
/**
* Comprueba que el usuario acepto la solicitud.
*/			
function checkAuth() {
	gapi.auth.authorize({
		'client_id': CLIENT_ID,
		'scope': SCOPES.join(' '),
		'immediate': true
	},
	handleAuthResult);
}
/**
* Maneja la respuesta de autorización del servidor.
* @param {Object} authResult resultado de la autorización.
*/
function handleAuthResult(authResult) {
	var authorizeDiv = document.getElementById('authorize-div');
	if (authResult && !authResult.error) {
		// Hide auth UI, then load client library.
		authorizeDiv.style.display = 'none';
        loadGmailApi();
	} else {
		// Show auth UI, allowing the user to initiate authorization by
		// clicking authorize button.
		authorizeDiv.style.display = 'inline';
	}
}			
function handleAuthClick(event) {
	gapi.auth.authorize({
		client_id: CLIENT_ID,
		scope: SCOPES, 
		immediate: false
	},
	handleAuthResult);
return false;
}
/**
* Cargar la biblioteca de cliente de la API de Gmail . 
* lista la cantidad de mensajes una vez se carga la biblioteca de cliente .
*/
function loadGmailApi() {
	gapi.client.load('gmail', 'v1',cantidadRecibidos);
}
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
/**
* Imprime en pantalla.
*/	
function appendPre(message) {
	var pre = document.getElementById('output');
	var textContent = document.createTextNode(message + '\n');
	pre.appendChild(textContent);
}