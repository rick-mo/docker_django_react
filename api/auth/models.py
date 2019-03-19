from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin, UserManager
import uuid

class MyCustomUser(AbstractBaseUser, PermissionsMixin):
  uuid = models.UUIDField(default=uuid.uuid4, primary_key=True, editable=False)
  user_name = models.CharField(max_length=15, unique=True)
  first_name = models.CharField(max_length=30, blank=True)
  last_name = models.CharField(max_length=30, blank=True)
  email_address = models.EmailField(max_length=255, unique=True)
  created_time = models.DateTimeField(auto_now_add=True)
  updated_time = models.DateTimeField(auto_now=True)

  objects = UserManager()

