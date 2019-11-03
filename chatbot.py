import tweepy
import logging
from random import randint
from time import sleep, time

#in seconds
TWITTER_POST_FREQUENCY = 60*60*12
logger = None

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

def postTwitterMessage(api):
  api.update_status(generateTwitterMessage())
;xa

if __name__ == '__main__':
  logging.basicConfig(level=logging.INFO)
  logger = logging.getLogger()
  api = getAPI()
  while True:
    postTwitterMessage(api)
    longSleep(TWITTER_POST_FREQUENCY)

