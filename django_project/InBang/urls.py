from django.urls import path
from .views import *
from . import views
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

urlpatterns = [
    path('', get_user, name='profile'),
    path('login/', MyTokenObtainPairView.as_view(), name='login'),
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('registration/', registerUser, name='registration'),
    path('user-settings/', userSettings, name='user-settings'),
]