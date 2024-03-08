from django.shortcuts import render, redirect
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from .serializers import UserSerializer, MyTokenObtainPairSerializer, UserSerializerWithToken, ChangePasswordSerializer, ResetPasswordSerializer, OTPVerificationSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from django.contrib.auth.hashers import make_password, check_password
from rest_framework import status
from django.contrib.auth.models import User
from rest_framework.permissions import IsAuthenticated
from rest_framework.generics import UpdateAPIView
from django.core.mail import send_mail
from django.core.validators import validate_email
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import random

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer

@api_view(['GET'])
def get_user(request):
    serializer = UserSerializer(request.user)
    return Response(serializer.data)

@api_view(['POST'])
def registerUser(request):
    data = request.data
    try:
        user = User.objects.create(
            username=data.get('username'),
            email=data.get('email'),
            first_name=data.get('first_name'),
            last_name=data.get('last_name'),
            password=make_password(data.get('password')),
            is_active=True
        )

        serializer = UserSerializerWithToken(user, many=False)
        return Response(serializer.data)
    except:
        message = {'detail': 'User with this email already exists'}
        return Response(message, status=status.HTTP_400_BAD_REQUEST)


@api_view(['PATCH'])
@permission_classes([IsAuthenticated])
def change_password(request):
    user = request.user
    old_password = request.data.get('old_password')
    new_password = request.data.get('new_password')
    confirm_password = request.data.get('confirm_password')

    if not user.check_password(old_password):
        return Response({'message': 'Old password is incorrect.'}, status=status.HTTP_400_BAD_REQUEST)

    if new_password != confirm_password:
        return Response({'message': 'New passwords do not match.'}, status=status.HTTP_400_BAD_REQUEST)

    user.set_password(new_password)
    user.save()
    return Response({'message': 'Password successfully updated.'}, status=status.HTTP_200_OK)

@api_view(['POST', 'PATCH'])
def reset_password(request):
    email = request.data.get('email')
    new_password = request.data.get('new_password')
    confirm_password = request.data.get('confirm_password')

    try:
        user = User.objects.get(email=email)
    except User.DoesNotExist:
        return Response({'message': 'User with this email does not exist.'}, status=status.HTTP_404_NOT_FOUND)

    if new_password != confirm_password:
        return Response({'message': 'New passwords do not match.'}, status=status.HTTP_400_BAD_REQUEST)

    user.set_password(new_password)
    user.save()
    
    return Response({'message': 'Password successfully reset.'}, status=status.HTTP_200_OK)

@api_view(['POST'])
def generate_otp(request):
    if request.method == 'POST':
        otp = ''.join([str(random.randint(0, 9)) for _ in range(6)])  # Generate a 6-digit OTP
        request.session['otp'] = otp  # Store the OTP in the session
        return JsonResponse({'otp': otp})
    else:
        return JsonResponse({'detail': 'Method "POST" required.'}, status=405)

@api_view(['POST'])
def verify_otp(request):
    received_otp = request.data.get('otp')  # Use request.data to get POST data
    expected_otp = request.session.get('otp')  # Retrieve the OTP stored in the session
    if received_otp == expected_otp:
        return JsonResponse({'message': 'OTP verification successful'})
    else:
        return JsonResponse({'error': 'Invalid OTP'}, status=status.HTTP_400_BAD_REQUEST)