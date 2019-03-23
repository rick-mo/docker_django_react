from rest_framework import routers
from .views import ListChartView, UploadFileView

router = routers.DefaultRouter()
router.register('chart', ListChartView)
router.register('upload', UploadFileView)
