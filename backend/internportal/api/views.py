from django.shortcuts import render

# Create your views here.
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth.models import User
from rest_framework import viewsets
from .models import Internportal, LeaderboardEntry
from .serializers import InternportalSerializer, LeaderboardEntrySerializer
from django.contrib.auth.hashers import make_password
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer

class SignupView(APIView):
    def post(self, request):
        data = request.data
        try:
            user = User.objects.create(
                username=data['username'],
                email=data['email'],
                password=make_password(data['password'])
            )
            return Response({"message": "User created successfully"}, status=status.HTTP_201_CREATED)
        except Exception as e:
            return Response({"error": str(e)}, status=status.HTTP_400_BAD_REQUEST)

class CustomTokenObtainPairSerializer(TokenObtainPairSerializer):
    def validate(self, attrs):
        data = super().validate(attrs)
        data['username'] = self.user.username
        return data

class LoginView(TokenObtainPairView):
    serializer_class = CustomTokenObtainPairSerializer
    
    
# api/views.py


class InternportalViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Internportal.objects.all()
    serializer_class = InternportalSerializer

class LeaderboardViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = LeaderboardEntry.objects.all().order_by('rank')
    serializer_class = LeaderboardEntrySerializer