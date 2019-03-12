from rest_framework import routers
from .views import ListChart, UploadFileView

router = routers.DefaultRouter()
router.register('chart', ListChart)
router.register('upload', UploadFileView)
