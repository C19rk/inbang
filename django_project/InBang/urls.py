from django.urls import path
from .views import *
from . import views

urlpatterns = [
    path('', get_user, name='profile'),
    path('login/', MyTokenObtainPairView.as_view(), name='login'),
    path('registration/', registerUser, name='registration'),
    path('changepass/', change_password, name='change_password'),
    path('resetpass/', reset_password, name='reset_password'),
    path('generate-otp/', views.generate_otp, name='generate_otp'),
    path('verify-otp/', verify_otp, name='verify_otp'),
]