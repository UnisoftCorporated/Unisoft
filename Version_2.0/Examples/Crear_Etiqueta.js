/**
 * Agerar una nueva etiqueta a el correo.
 *
 * @param  {String} direccion de correo del usuario. El valor especial puede ser 'me'
 * puede ser usado para indicar la autenticidad del usuario.
 * @param  {String} nombre de la nueva etiqueta.
 * @param  {Function} callback Funcion a llamar cuando la consulta este completa.
 */
function crearEtiqueta(userId, newLabelName, callback) {
    var request = gapi.client.gmail.users.labels.create({
        'userId': 'me',
        'label': {
            'name': newLabelName
        }
    });
    request.execute(callback);
}
