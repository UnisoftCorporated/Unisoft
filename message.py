from __future__ import print_function
import httplib2
import os

from apiclient import discovery
import oauth2client
from googleapiclient import errors
from oauth2client import client
from oauth2client import tools
import base64
import email
from apiclient import errors

try:
    import argparse
    flags = argparse.ArgumentParser(parents=[tools.argparser]).parse_args()
except ImportError:
    flags = None

# If modifying these scopes, delete your previously saved credentials
# at ~/.credentials/gmail-python-quickstart.json
SCOPES = 'https://mail.google.com/'
CLIENT_SECRET_FILE = 'client_secret.json'
APPLICATION_NAME = 'Gmail API Python Quickstart'


def get_credentials():
    """Gets valid user credentials from storage.

    If nothing has been stored, or if the stored credentials are invalid,
    the OAuth2 flow is completed to obtain the new credentials.

    Returns:
        Credentials, the obtained credential.
    """
    home_dir = os.path.expanduser('~')
    credential_dir = os.path.join(home_dir, '.credentials')
    if not os.path.exists(credential_dir):
        os.makedirs(credential_dir)
    credential_path = os.path.join(credential_dir,
                                   'gmail-python-quickstart.json')

    store = oauth2client.file.Storage(credential_path)
    credentials = store.get()
    if not credentials or credentials.invalid:
        flow = client.flow_from_clientsecrets(CLIENT_SECRET_FILE, SCOPES)
        flow.user_agent = APPLICATION_NAME
        if flags:
            credentials = tools.run_flow(flow, store, flags)
        else: # Needed only for compatibility with Python 2.6
            credentials = tools.run(flow, store)
        print('Storing credentials to ' + credential_path)
    return credentials

def main():
    """Shows basic usage of the Gmail API.

    Creates a Gmail API service object and outputs a list of label names
    of the user's Gmail account.
    """
    credentials = get_credentials()
    http = credentials.authorize(httplib2.Http())
    service = discovery.build('gmail', 'v1', http=http)
    results1 = service.users()
    results = service.users().labels().list(userId='fabianwf8@gmail.com').execute()
    labels = results.get('labels', [])

    if not labels:
        print('No labels found.')
    else:
      print('Labels:')
      for label in labels:
        print(label['name'])


def ListMessagesMatchingQuery( user_id, query=''):

    credentials = get_credentials()
    http = credentials.authorize(httplib2.Http())
    service = discovery.build('gmail', 'v1', http=http)
    print("Inicio")
    try:
        response = service.users().messages().list(userId=user_id,q=query).execute()
        messages = []
        print("entra al try")
        if 'messages' in response:
            messages.extend(response['messages'])
            print("entra if ")

        while 'nextPageToken' in response:
            print("entre while")
            page_token = response['nextPageToken']
            response = service.users().messages().list(userId=user_id, q=query,pageToken=page_token).execute()
            messages.extend(response['messages'])

        return messages
    except errors.HttpError, error:
        print ("An error occurred: %s" % error)



def GetMessage(user_id, msg_id):


  credentials = get_credentials()
  http = credentials.authorize(httplib2.Http())
  service = discovery.build('gmail', 'v1', http=http)
  print("Inicio")
  try:
    message = service.users().messages().get(userId=user_id, id=msg_id).execute()

    print ('Message snippet: %s' % message['snippet'])

    return message
  except errors.HttpError, error:
    print ('An error occurred: %s' % error)


def GetMimeMessage(user_id, msg_id):
  """Get a Message and use it to create a MIME Message.

  Args:
    service: Authorized Gmail API service instance.
    user_id: User's email address. The special value "me"
    can be used to indicate the authenticated user.
    msg_id: The ID of the Message required.

  Returns:
    A MIME Message, consisting of data from Message.
  """

  credentials = get_credentials()
  http = credentials.authorize(httplib2.Http())
  service = discovery.build('gmail', 'v1', http=http)
  print("Inicio")
  try:
    message = service.users().messages().get(userId=user_id, id=msg_id,
                                             format='raw').execute()

    print ('Message snippet: %s' % message['snippet'])

    msg_str = base64.urlsafe_b64decode(message['raw'].encode('ASCII'))

    mime_msg = email.message_from_string(msg_str)

    return mime_msg
  except errors.HttpError, error:
    print ('An error occurred: %s' % error)


print ("\n")
print("Primera consulta consulta "+"n"+ str(ListMessagesMatchingQuery("me",query="")))
print ("\n")
print ("Consulta mensaje \n")
GetMessage("fabianwf8@gmail.com","152f69f8d00df1a9")