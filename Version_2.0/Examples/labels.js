function updateLabel(userId, labelId, labelName, labelListVisibility, messageListVisibility, callback) {
    var request = gapi.client.gmail.users.labels.update({
        'userId': userId,
        'id': labelId,
        'label': {
            'id': labelId,
            'name': labelName,
            'labelListVisibility': labelListVisibility,
            'messageListVisibility': messageListVisibility
        }
    });
    request.execute(callback);
}
