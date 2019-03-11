from rest_framework import generics
from .models import Chart, UploadFile
from .serializers import ChartSerializer, UploadFileSerializer

class ListChart(generics.ListAPIView):
  queryset = Chart.objects.all()
  serializer_class = ChartSerializer

class UploadFileView(generics.ListCreateAPIView):
  queryset = UploadFile.objects.all()
  serializer_class = UploadFileSerializer
