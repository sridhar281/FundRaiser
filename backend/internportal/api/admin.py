from django.contrib import admin
from .models import Internportal, LeaderboardEntry

@admin.register(Internportal)
class InternAdmin(admin.ModelAdmin):
    list_display = ('name', 'email', 'referral_code', 'donations_raised')
    search_fields = ('name', 'email', 'referral_code')
    list_filter = ('donations_raised',)

@admin.register(LeaderboardEntry)
class LeaderboardEntryAdmin(admin.ModelAdmin):
    list_display = ('rank', 'intern', 'donations_raised', 'timestamp')
    list_filter = ('timestamp',)
    search_fields = ('intern__name',)