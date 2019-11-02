from django.shortcuts import render
from rest_framework import viewsets          
from .serializers import passageSerializer      
from .models import passage                    

class passageView(viewsets.ModelViewSet):
    serializer_class = passageSerializer
    queryset = passage.objects.all() 
