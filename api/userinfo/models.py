from django.db import models
from django.contrib.auth.models import User

class UserInfo(models.Model):
    p_read = models.CharField(max_length=255)
    owner = models.ForeignKey(User, related_name="p_read", on_delete=models.CASCADE, null=True)
    #created_at = models.DateTimeField(auto_now_add=True)
