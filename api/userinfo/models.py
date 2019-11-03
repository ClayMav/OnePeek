from django.db import models

class UserInfo(models.Model):
    first_name = models.CharField(max_length=255, null = True)
    last_name = models.CharField(max_length=255, null = True)
    p_read = models.CharField(max_length=255, null = True)
