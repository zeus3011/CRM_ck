from django.contrib import admin
from .models import Customer 
from . models import UserProfile
# Register your models here.

# admin.site.register(Customer)

class CustomerAdmin(admin.ModelAdmin):
    list_display = [field.name for field in Customer._meta.fields]
admin.site.register(Customer, CustomerAdmin)

admin.site.register(UserProfile)