from rest_framework import generics
from .models import Chart
from .serializers import ChartSerializer

class ListChart(generics.ListAPIView):
  queryset = Chart.objects.all()
  serializer_class = ChartSerializer
