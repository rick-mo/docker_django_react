from rest_framework import viewsets, permissions
from .models import Chart, UploadFile
from .serializers import ChartSerializer, UploadFileSerializer

class ListChart(viewsets.ModelViewSet):
  queryset = Chart.objects.all()
  serializer_class = ChartSerializer
  permission_classes = (permissions.IsAuthenticatedOrReadOnly,)

class UploadFileView(viewsets.ModelViewSet):
  queryset = UploadFile.objects.all()
  serializer_class = UploadFileSerializer
  permission_classes = (permissions.IsAuthenticatedOrReadOnly,)
