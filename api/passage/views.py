from django.shortcuts import render
from rest_framework import viewsets          
from .serializers import passageSerializer  
from .serializers import questionSerializer      
from .models import passage  
from .models import question                   

class passageView(viewsets.ModelViewSet):
    serializer_class = passageSerializer
    queryset = passage.objects.all() 

class questionView(viewsets.ModelViewSet):
    serializer_class = questionSerializer
    queryset = question.objects.all() 