'''
  It's important to note that the twitter database used here is not scalable and only usable for a small number of entries!
'''

import tweepy
import logging
from random import randint
from time import sleep, time
from os.path import isfile

TWITTER_DB_FILE_NAME = 'twitterDB.json'
TWITTER_SIGNUP_STRING = 'Reply to this tweet with "sign me up" to sign up for free motivational reminders to read!'
TWITTER_DM_MESSAGE = 'Remember to read! http://www.OnePeek.online' #Add link here, if some programming needs to be done then go to line ~78

#in seconds
TWITTER_POST_FREQUENCY = 60*60*12

#global (in scope of this module) variables
logger = None
twitterUsers = []

#there's limits to how long sleep will work
def longSleep(sleepTime):
  start = time()
  while time() - start < sleepTime:
    sleep(sleepTime + start - time())

#Will be dict obj
def getDBObj():
  pass

def getAPI():
  auth = tweepy.OAuthHandler('V9jEbyZadj3igCCvh5o2JJg5R', 'l77hZmlAop6wikURrcHNY45XykJh4030CQ5Ew03raZdPP2pd23')
  auth.set_access_token('1190761539571027970-JVoN9xh8DlNjJyO9bXmr3Miyi7sI5V', 'V0FvObuaAYAOFPVbmwAvrtogmv02erY2qM1YjtZW0gCOK ')
  api = tweeny.API(auth, wait_on_rate_limit=True, wait_on_rate_limit_notify=True, retry_count=5, retry_delay=2)
  api.verify_credentials()
  return api

def followFollowers(api):
  didFollow = False
  for follower in tweepy.Cursor(api.followers).items():
    if not follower.following:
      logger.info('Following {}'.format(follower.name))
      didFollow = True
  if not didFollow:
    logger.info('No one added to following')

def generateBasicMessage():
  db = getDBObj()
  passage = db['passage'][randint(len(db['passage']))]
  return '{} wrote "{}" in {}'.format(passage['author'], passage['quote'], passage['source'])

def generateTwitterMessage():
  return '{}{}'.format(generateBasicMessage(), ' #vandyhacksvi#vhvi')

def TwitterPermissionRequest(api):
  api.update_status(TWITTER_SIGNUP_STRING)

def twitterDMReminder(api, sinceID):
  sinceID1 = sinceID
  ME = [user.id for user in api.lookup_users(screen_names=['OnePeek1'])]

  for tweet in tweepy.Cursor(api.mentions_timeline, since_id=sinceID).items():
    sinceID1 = max(sinceID1, tweet.id)
    if tweet.in_reply_to_user_id in ME and api.get_status(tweet.in_reply_to_status_id).text == TWITTER_SIGNUP_STRING:
      if tweet.text.lower() in ('sign me up', '"sign me up"', 'yeah', 'yea', 'yes'):
        if tweet.user in twitterUsers:
          api.update_status('You\'re already signed up, keep reading!', in_reply_to_status_id=tweet.id)
        else:
          #update db in RAM and in memory
          twitterUsers.append(tweet.user.id)
          with open(TWITTER_DB_FILE_NAME) as file:
            json.dump(twitterUsers, file)

          api.update_status('I just signed you up!', in_reply_to_status_id=tweet.id)

    for user in twitterUsers:
      api.send_direct_message(user, TWITTER_DM_MESSAGE)
  return sinceID1
  

def postTwitterMessage(api):
  api.update_status(generateTwitterMessage())

if __name__ == '__main__':
  #prepare twitter user database
  with open(TWITTER_DB_FILE_NAME) as file:
    if not isfile(TWITTER_DB_FILE_NAME):
      json.dump([], file)
    else:
      twitterUsers = json.load(file)


  logging.basicConfig(level=logging.INFO)
  logger = logging.getLogger()
  api = getAPI()

  sinceID = 1
  while True:
    postTwitterMessage(api)
    sinceID = twitterDMReminder(api, sinceID)
    followFollowers(api)
    TwitterPermissionRequest(api)
    longSleep(TWITTER_POST_FREQUENCY)

