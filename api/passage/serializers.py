from rest_framework import serializers
from .models import passage

class passageSerializer(serializers.ModelSerializer):
    class Meta:
        model = passage
        fields = ('id', 'source', 'reference', 'genres', 'authors', 'time_period', 'location', 'link')