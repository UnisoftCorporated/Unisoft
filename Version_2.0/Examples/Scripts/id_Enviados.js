/** @description Lista la ID  de todos los mensajes enviados
 * @param {var} user_id usuario el cual se van a extraer los ID de sus mensajes enviados.
 * @param {var} request realiza la solicitud para listar en este caso los ID de los mensajes enviados de gmail.
 */
function idEnviados (){
    var user_id = "me";
    var request = gapi.client.gmail.users.messages.list({
    'userId': user_id,
 });
request.execute(function(resp) {
    var messages = resp.messages;
    appendPre("\n mensajes enviados"+messages.length+"\n")
        for(var i = 0; i < messages.length; i++) {
            appendPre(i +": "+ messages[i].id);
}
appendPre("\n");
 });
}
