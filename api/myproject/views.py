from rest_framework import viewsets
from .models import Chart, UploadFile
from .serializers import ChartSerializer, UploadFileSerializer

class ListChart(viewsets.ModelViewSet):
  queryset = Chart.objects.all()
  serializer_class = ChartSerializer

class UploadFileView(viewsets.ModelViewSet):
  queryset = UploadFile.objects.all()
  serializer_class = UploadFileSerializer
