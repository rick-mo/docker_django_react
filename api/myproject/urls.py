from django.urls import path
from .views import ListChart

urlpatterns = [
  path('', ListChart.as_view()),
]
