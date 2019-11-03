from django.shortcuts import render
from rest_framework import viewsets          
from .serializers import userinfoSerializer     
from .models import UserInfo                

class userinfoView(viewsets.ModelViewSet):
    serializer_class = userinfoSerializer
    queryset = UserInfo.objects.all() 
# Create your views here.
