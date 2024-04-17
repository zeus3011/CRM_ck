from django import forms
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User
from .models import UserProfile

class SearchForm(forms.Form):
    search_query = forms.CharField(label='Search')


class searchForm(forms.Form):
    SteftoNo_query=forms.CharField(label='Search by SteftoNo' , required=False)
    Name_query=forms.CharField(label='Search by Name' , required=False)
    Account_Number_query=forms.CharField(label='Search by Account' , required=False)
    Phone_Number_query=forms.CharField(label='Search by Phone' , required=False)
    City_query=forms.CharField(label='Search by City' , required=False)



# class SignUpForm(forms.ModelForm):
#     class Meta:
#         model=User
#         fields=['username','email','password']
    
#     EmpCode=forms.CharField(max_length=20)
#     Process=forms.CharField(max_length=100)

#     def save(self, commit=True):
#         user=super(SignUpForm, self).save(commit=False)
#         # user.set_password(self.cleaned_data['password'])
#         user.password = forms.CharField(widget=forms.PasswordInput())
#         if commit:
#             user.save()
#             profile=UserProfile.objects.create(
#                 user=user,
#                 EmpCode=self.cleaned_data['EmpCode'],
#                 Process=self.cleaned_data['Process']
#             )
#         return user



# class LoginForm(forms.Form):
#     username = forms.CharField(max_length=100)
#     password=forms.CharField(widget=forms.PasswordInput)



