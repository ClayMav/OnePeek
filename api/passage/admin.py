from django.contrib import admin
from .models import passage

class passageAdmin(admin.ModelAdmin):
      list_display = ('source', 'reference', 'genres', 'authors', 'time_period', 'location', 'link')
class questionAdmin(admin.ModelAdmin):
      list_display = ('p', 'comment', 'p_resp', 'n_resp')

# Register your models here.
admin.site.register(passage, passageAdmin)
#admin.site.register(question, questionAdmin)