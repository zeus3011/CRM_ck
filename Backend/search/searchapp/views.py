from django.shortcuts import render , redirect
from django.db import models
from .models import Customer 
from django.contrib.auth.models import User
# from django.contrib.auth import authenticate , login ,logout
# from .forms import SignUpForm , LoginForm
from .serializers import CustomerSerializer
from rest_framework import generics

from rest_framework.response import Response
from rest_framework.decorators import api_view




@api_view(['GET'])
def searchapp(request):
    Name_query = request.GET.get('Name_query', '')
    Account_Number_query = request.GET.get('Account_Number_query', '')
    Phone_Number_query = request.GET.get('Phone_Number_query', '')
    City_query = request.GET.get('City_query', '')
    SteftoNo_query = request.GET.get('SteftoNo_query', '')

    customers = Customer.objects.none()

    if Name_query or Account_Number_query or Phone_Number_query or City_query or SteftoNo_query:
        customers = Customer.objects.all()
        if Name_query:
            customers = customers.filter(Name__icontains=Name_query)
        if Account_Number_query:
            customers = customers.filter(Account_Number__icontains=Account_Number_query)
        if Phone_Number_query:
            customers = customers.filter(Phone__icontains=Phone_Number_query)
        if City_query:
            customers = customers.filter(City__icontains=City_query)
        if SteftoNo_query:
            customers = customers.filter(SteftoNo__icontains=SteftoNo_query)

        if City_query and Name_query:
            customers = customers.filter(City__icontains=City_query, Name__icontains=Name_query)
        if SteftoNo_query and Name_query:
            customers = customers.filter(Name__icontains=Name_query, SteftoNo__icontains=SteftoNo_query)
        if SteftoNo_query and City_query:
            customers = customers.filter(City__icontains=City_query, SteftoNo__icontains=SteftoNo_query)

        serializer = CustomerSerializer(customers, many=True)
        return Response(serializer.data)

 
    return Response([])  






# def Signup(request):
#     if request.method=='POST':
#         form=SignUpForm(request.POST)
#         if form.is_valid():
  
#             form.save()


#             return render (request,'login.html')
#     else:
#         form=SignUpForm()
#     return render(request,'signup.html',{'form':form})




# def user_login(request):
#     if request.method =='POST':
#         form = LoginForm(request.POST)
#         if form.is_valid():
#             username = form.cleaned_data['username']
#             password = form.cleaned_data['password']
#             user = authenticate(request, username=username,password=password)

#             if user is not None:
#                 login(request,user)
#                 return render (request,'search_results.html')
#             else:
#                 error_message = "Invalid Input"

#     else:
#         form=LoginForm
#     return render(request, 'login.html', {'form':form})




# def user_logout(request):
#     logout(request)
#     return render (request,'search.html')





