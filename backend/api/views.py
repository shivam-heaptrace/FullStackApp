from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from django.contrib.auth.hashers import make_password, check_password

from .models import Employee
from .serializers import EmployeeSerializer


class DefaultView(APIView):
    def get(self, request):
        employees = Employee.objects.all()
        serializer = EmployeeSerializer(employees, many=True)
        return Response(serializer.data)


class LoginView(APIView):
    def post(self, request):
        email = request.data.get("email")
        password = request.data.get("password")
        
        try:
            user = Employee.objects.get(email=email)
        except Employee.DoesNotExist:
            return Response({"detail": "Invalid Credentials"}, status=status.HTTP_401_UNAUTHORIZED)
        
        if not check_password(password, user.password):
            return Response({"detail": "Invalid Credentials"}, status=status.HTTP_401_UNAUTHORIZED)
        
        return Response({"detail": f"Welcome {user.name}"}, status=status.HTTP_200_OK)
    
    
class RegisterView(APIView):
    def post(self, request):
        name = request.data.get("name")
        email = request.data.get("email")
        password = request.data.get("password")
        
        if Employee.objects.filter(email=email).exists():
            return Response({"detail":"Email, already registered"}, status=status.HTTP_400_BAD_REQUEST)
        
        employee = Employee.objects.create(
            name=name,
            email=email,
            password=make_password(password)
        )
        return Response({"detail":f"{employee.name} registered successfully"}, status=status.HTTP_201_CREATED)
        
