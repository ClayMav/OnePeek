from django.db import models

# Create your models here.
class passage(models.Model):
    source = models.CharField(max_length=120)
    reference = models.CharField(max_length=120)
    genres = models.CharField(max_length=20)
    authors = models.CharField(max_length=50)
    time_period = models.DateField()
    location = models.CharField(max_length=50)
    link =  models.CharField(max_length=200)
    content = models.TextField(null = True)
    quote = models.CharField(max_length=400)
    que = models.CharField(max_length=200)
    l_count = models.BigIntegerField(null = True)
    d_count = models.BigIntegerField(null = True)

    def _str_(self):
        return self.title

class question(models.Model):
    passage = models.ForeignKey(passage, on_delete=models.CASCADE)
    comment = models.CharField(max_length=500)
    p_resp = models.BigIntegerField(null = True)
    n_resp = models.BigIntegerField(null = True)