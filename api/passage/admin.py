from django.contrib import admin
from .models import passage
from .models import question

class passageAdmin(admin.ModelAdmin):
      list_display = ('source', 'reference', 'genres', 'authors', 'time_period', 'location', 'link', 'content', 'quote', 'que', 'l_count', 'd_count')
class questionAdmin(admin.ModelAdmin):
      list_display = ('passage', 'comment', 'p_resp', 'n_resp')

# Register your models here.
admin.site.register(passage, passageAdmin)
admin.site.register(question, questionAdmin)