from django.contrib.auth import authenticate
from rest_framework.permissions import IsAuthenticated
from rest_framework.generics import GenericAPIView
from rest_framework.viewsets import ModelViewSet
from rest_framework.exceptions import AuthenticationFailed
from rest_framework.response import Response
from rest_framework_jwt.settings import api_settings
from .models import MyCustomUser
from .serializers import MyAuthSerializer, UserListSerializer

jwt_pyload_handler = api_settings.JWT_PAYLOAD_HANDLER
jwt_encode_handler = api_settings.JWT_ENCODE_HANDLER

class UserAuthView(GenericAPIView):
  serializer_class = MyAuthSerializer
  permission_classes = ()

  def post(self, request):
    serializer = MyAuthSerializer(data=request.data)
    serializer.is_valid(raise_exception=True)
    user = authenticate(**serializer.data)
    if not user:
      raise AuthenticationFailed()
    pyload = jwt_pyload_handler(user)
    return Response({
      'json_web_token': jwt_encode_handler(pyload),
    })

class UserListView(ModelViewSet):
  queryset = MyCustomUser.objects.all()
  serializer_class = UserListSerializer
  permission_classes = (IsAuthenticated,)
