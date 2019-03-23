from rest_framework import routers
from .views import UserListView

router = routers.DefaultRouter()
router.register('', UserListView)
