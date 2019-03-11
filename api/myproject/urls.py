from django.urls import path
from .views import ListChart, UploadFileView

urlpatterns = [
  path('', ListChart.as_view()),
  path('upload/', UploadFileView.as_view())
]
