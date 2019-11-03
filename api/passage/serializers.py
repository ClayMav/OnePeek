from rest_framework import serializers
from .models import passage
from .models import question

class passageSerializer(serializers.ModelSerializer):
    class Meta:
        model = passage
        fields = ('id', 'source', 'reference', 'genres', 'authors', 'time_period', 'location', 'link', 'content', 'quote', 'que', 'l_count', 'd_count')

class questionSerializer(serializers.ModelSerializer):
    class Meta:
        model = question
        fields = ('id', 'passage', 'comment', 'p_resp', 'n_resp')