// Esta funcion esta asociada a un boton para recargar la pagina y cargar nuevos mensajes

function limpia(){
          location.reload();
}

// En esta fuincion solo carga la aplicacion pero no carga los mensajes inmediatamente.

function loadGmailApi() {
    gapi.client.setApiKey("");

    gapi.client.load('gmail', 'v1'); 
}

// Esta funcion se usa para la carga de los mensajes y recive un parametro para filtrar los mensajes que se quieren ver.

function displayMessages(label) { 
          
    var request = gapi.client.gmail.users.messages.list({
    'userId': 'me',
    'labelIds': label,
    'maxResults': 50
    });

    request.execute(function (response) {
        $.each(response.messages, function() {
            var messageRequest = gapi.client.gmail.users.messages.get({
            'userId': 'me',
            'id': this.id
            });

            messageRequest.execute(appendMessageRow);
        });
    });
}