from django.contrib import admin
from .models import passage

class passageAdmin(admin.ModelAdmin):
      list_display = ('source', 'reference', 'genres', 'authors', 'time_period', 'location', 'link')

# Register your models here.
admin.site.register(passage, passageAdmin)