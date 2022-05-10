from django.urls import path
from .views import list_appointments, list_technicians

urlpatterns = [
    path("technicians/", list_technicians, name="create_technician"),
    path("appointments/", list_appointments, name="create_appointment")
]