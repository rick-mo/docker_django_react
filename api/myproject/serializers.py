from rest_framework import serializers
from .models import Chart, UploadFile

class ChartSerializer(serializers.ModelSerializer):
  class Meta:
    model = Chart
    fields = ('id', 'title', 'row_title', 'column_title',)

class UploadFileSerializer(serializers.ModelSerializer):
  class Meta:
    model = UploadFile
    fields = ('id', 'file_title', 'document', 'uploaded_at',)
