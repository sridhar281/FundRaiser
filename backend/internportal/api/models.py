from django.db import models

# Create your models here.

class Internportal(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    referral_code = models.CharField(max_length=20, unique=True)
    donations_raised = models.PositiveIntegerField(default=0)
     # internship_position = models.CharField(max_length=100)
    # start_date = models.DateField()
    # end_date = models.DateField()
    # status = models.CharField(max_length=50, choices=[
    #     ('applied', 'Applied'),
    #     ('interviewed', 'Interviewed'),
    #     ('offered', 'Offered'),
    #     ('accepted', 'Accepted'),
    #     ('rejected', 'Rejected')
    # ], default='applied')


    def __str__(self):
        return self.name
    
class LeaderboardEntry(models.Model):
    intern = models.ForeignKey(Internportal, on_delete=models.CASCADE)
    rank = models.PositiveIntegerField()
    timestamp = models.DateTimeField(auto_now_add=True)
    donations_raised = models.PositiveIntegerField(default=0)
    
    class Meta:
        ordering = ['-donations_raised', 'rank']    
    def __str__(self):
        return f"{self.rank} - {self.intern.name} - {self.donations_raised} raised"
    
    
# Add any additional models as needed for the intern portal