from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin
import uuid

class MyUserManager(BaseUserManager):
  def create_user(self, username, email, password, is_superuser, **extra_fields):
    if not username:
      raise ValueError('The given username must be set')
    if not email:
      raise ValueError('The given email must be set')
    username = self.model.normalize_username(username)
    email = self.normalize_email(email)
    user = self.model(username=username, email=email, is_superuser=is_superuser, **extra_fields)
    user.set_password(password)
    user.save(using=self._db)
    return user
  
  def create_superuser(self, username, email, password, **extra_fields):
    return self.create_user(username, email, password, True, **extra_fields)

class MyCustomUser(AbstractBaseUser, PermissionsMixin):
  uuid = models.UUIDField(default=uuid.uuid4, primary_key=True, editable=False)
  username = models.CharField(max_length=15, unique=True)
  first_name = models.CharField(max_length=30, blank=True)
  last_name = models.CharField(max_length=30, blank=True)
  email = models.EmailField(max_length=255, unique=True)
  is_active = models.BooleanField(default=True)
  is_staff = models.BooleanField(default=True)
  created_time = models.DateTimeField(auto_now_add=True)
  updated_time = models.DateTimeField(auto_now=True)

  objects = MyUserManager()
  USERNAME_FIELD = 'username'
  REQUIRED_FIELDS = ['email', ]
