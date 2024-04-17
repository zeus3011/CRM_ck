from django.db import models
import datetime
from django.contrib.auth.models import User


# Create your models here.

class Customer(models.Model):
    SteftoNo=models.CharField(max_length=20, default=0000)
    Name=models.CharField(max_length=20)
    Account_Number=models.CharField(max_length=20, unique=True)
    City=models.CharField(max_length=20)
    Phone=models.IntegerField(max_length=10, unique=True)
    Email=models.EmailField()
    Address=models.CharField(max_length=50)
    Process_Name=models.CharField(max_length=20)
    DOB=models.DateField(max_length=20)



class UserProfile(models.Model):
    username=models.OneToOneField(User, on_delete=models.CASCADE)
    Email=models.EmailField( blank=True)
    EmpCode=models.CharField(max_length=10)
    Process=models.CharField(max_length=20 , blank=True)
    RegisterDate= models.DateTimeField(auto_now_add=True)

    class Meta:
        db_table='custom_user_profile_table'
    

  