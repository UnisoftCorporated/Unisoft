/** @description Lista la ID  de todos los mensajes recibidos
 * @param {var} user_id usuario el cual se van a extraer los ID de sus mensajes recibidos.
 * @param {var} request realiza la solicitud para listar en este caso los ID de los mensajes recibidos de gmail.
 */

function idRecibidos (){
    var user_id = "me";
    var request = gapi.client.gmail.users.messages.list({
    'userId': user_id,
 });
request.execute(function(resp) {
    var messages = resp.messages;
    appendPre("\n mensajes recibidos"+messages.length+"\n")
        for(var i = 0; i < messages.length; i++) {
            appendPre(i +": "+ messages[i].id);
}
appendPre("\n");
 });
}
