from django.urls import path
from .views import list_technicians

urlpatterns = [
    path("technicians/", list_technicians, name="create_technicians"),
]