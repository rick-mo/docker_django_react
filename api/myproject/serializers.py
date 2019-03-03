from rest_framework import serializers
from .models import Chart

class ChartSerializer(serializers.ModelSerializer):
  class Meta:
    model = Chart
    fields = ('id', 'title', 'row_title', 'column_title',)