
var prueba = "INBOX";

function displayMessages(label) { //Editado
          if(label != null){
            label = label;
            return label;
          }

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



test("Prueba extraer por etiqueta personal",function () {
    equal(displayMessages(prueba), "INBOX" );
    equal(displayMessages(prueba), 34434 );
    equal(displayMessages(prueba), ["INBOX","SENT"] );
    ok(displayMessages(prueba), "okay" );
    ok(displayMessages(23), "okay" );
    ok(displayMessages(["SENT","INBOX"]), "okay" );
    ok(displayMessages(23777777777777777777777777777777777777777777777777777), "okay" );
    ok(displayMessages(true), "okay" );
    ok(displayMessages("#&%(/&%(&%(&/%%(&%56iggighk][:;"), "okay" );
    equal(displayMessages(false), true );

});