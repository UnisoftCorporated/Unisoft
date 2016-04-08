from __future__ import print_function
import httplib2
import os

from apiclient import discovery, errors
import oauth2client
from oauth2client import client
from oauth2client import tools
import base64
import email

try:
    import argparse
    flags = argparse.ArgumentParser(parents=[tools.argparser]).parse_args()
except ImportError:
    flags = None

SCOPES = 'https://www.googleapis.com/auth/gmail.readonly'
CLIENT_SECRET_FILE = 'client_secret.json'
APPLICATION_NAME = 'Gmail API Python Quickstart'
#CLIENT_SECRET_FILE = ['fabian_secret.json', 'cristina_secret.json']
CORREOS = ['fabian.cano@unillanos.edu.co', 'laura.cespedes@unillanos.edu.co', 'andrea.ochoa@unillanos.edu.co', 'cristian.gonzalez.alba@unillanos.edu.co', 'oscar.barrios@unillanos.edu.co']
#CORREOS = ['fabiiancano@gmail.com', 'laura.cespedes@unillanos.edu.co', 'andrea.ochoa@unillanos.edu.co', 'cristian.gonzalez.alba@unillanos.edu.co', 'oscar.barrios@unillanos.edu.co']

def get_credentials():

    home_dir = os.path.expanduser('~')
    credential_dir = os.path.join(home_dir, '.credentials')
    if not os.path.exists(credential_dir):
        os.makedirs(credential_dir)
    credential_path = os.path.join(credential_dir, 'gmail-python-quickstart.json')
    store = oauth2client.file.Storage(credential_path)
    credentials = store.get()
    if not credentials or credentials.invalid:
        flow = client.flow_from_clientsecrets(CLIENT_SECRET_FILE, SCOPES)
        flow.user_agent = APPLICATION_NAME
        if flags:
            credentials = tools.run_flow(flow, store, flags)
        else: 
            credentials = tools.run(flow, store)
        print('Storing credentials to ' + credential_path)
    return credentials

def ListMessagesMatchingQuery(service, user_id, query=''):

    try:
        response = service.users().messages().list(userId=user_id, q=query).execute()
        messages = []
        if 'messages' in response:
            messages.extend(response['messages'])
        while 'nextPageToken' in response:
            page_token = response['nextPageToken']
            response = service.users().messages().list(userId=user_id, q=query, pageToken=page_token).execute()
            messages.extend(response['messages'])
        return messages
    except errors.HttpError as error:
        print ('An error occurred: %s' % error)

def GetMessage(service, user_id, msg_id):

    try:
        message = service.users().messages().get(userId=user_id, id=msg_id).execute()
        print ('Message snippet: %s' % message['snippet'])
        return message
    except errors.HttpError, error:
        print ('An error occurred: %s' % error)

def GetMimeMessage(service, user_id, msg_id):
 
    try:
        message = service.users().messages().get(userId=user_id, id=msg_id, format='raw').execute()
        print ('Message snippet: %s' % message['snippet'])
        msg_str = base64.urlsafe_b64decode(message['raw'].encode('ASCII'))
        mime_msg = email.message_from_string(msg_str)
        return mime_msg
    except errors.HttpError, error:
        print ('An error occurred: %s' % error)

def consultarRecibidos(emisor='', receptor=''): #A corregir

    credentials = get_credentials()
    http = credentials.authorize(httplib2.Http())
    service = discovery.build('gmail', 'v1', http=http)
    mensajes = ListMessagesMatchingQuery(service, 'me', 'from:' + emisor)
    return len(mensajes)

def consultarEnviados(emisor='', receptor=''): 

    credentials = get_credentials()
    http = credentials.authorize(httplib2.Http())
    service = discovery.build('gmail', 'v1', http=http)
    mensajes = ListMessagesMatchingQuery(service, emisor, 'in:sent ' + receptor)
    return len(mensajes)

def consultarEnviadosFecha(fechaIni, fechaFin,destinatario=''):

    credentials = get_credentials()
    http = credentials.authorize(httplib2.Http())
    service = discovery.build('gmail', 'v1', http=http)
    mensajes = ListMessagesMatchingQuery(service, 'me', 'in:sent after: ' + fechaIni + ' before: ' + fechaFin + ' ' + destinatario)
    return len(mensajes)

def main():

    credentials = get_credentials()
    http = credentials.authorize(httplib2.Http())
    service = discovery.build('gmail', 'v1', http=http)

    for i in range(len(CORREOS)):

        USER_IDI = CORREOS[i]

        for j in range(len(CORREOS)):

            USER_IDJ = CORREOS[j]

            #results = service.users().messages().list(userId='me', labelIds='UNREAD').execute()
            #messages = results.get('messages', [])
            #for msg in messages:
            #    id = msg['id']
            #    print (id)
            #    print('Mensaje: ',GetMessage(service, 'me', id))

            print ('Emisor: %s' % (USER_IDI))
            print ('Receptor: %s' % (USER_IDJ))
            print ('Total Recibidos: ', consultarRecibidos(USER_IDI, USER_IDJ))
            #print ('Destinatario: %s' % (USER_ID))
            #print ('Total Enviados: ', consultarEnviados(CORREOS[i], CORREOS[j]))
            #fechaIni = '2016/02/01'
            #fechaFin = '2016/03/12'
            #print ('Destinatario: %s' % (USER_ID))
            #print ('Entre las Fechas %s y %s' % (fechaIni, fechaFin))
            #print ('Total Enviados: ', consultarEnviadosFecha(i, fechaIni, fechaFin, USER_ID))
            print ('\n')

if __name__ == '__main__':
    main()