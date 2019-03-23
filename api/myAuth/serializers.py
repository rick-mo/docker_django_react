from rest_framework import serializers
from .models import MyCustomUser

class MyAuthSerializer(serializers.Serializer):
  username = serializers.CharField()
  password = serializers.CharField()

class UserListSerializer(serializers.ModelSerializer):
  class Meta:
    model = MyCustomUser
    fields = ('uuid', 'username', 'email', 'first_name',)
