# api/serializers.py
from rest_framework import serializers
from .models import Internportal, LeaderboardEntry

class InternportalSerializer(serializers.ModelSerializer):
    class Meta:
        model = Internportal
        fields = '__all__'

class LeaderboardEntrySerializer(serializers.ModelSerializer):
    intern = InternportalSerializer()

    class Meta:
        model = LeaderboardEntry
        fields = '__all__'