from django.urls import path
from .views import list_appointments, list_technicians, delete_appointments, delete_technician

urlpatterns = [
    path("technicians/", list_technicians, name="create_technician"),
    path("appointments/", list_appointments, name="create_appointment"),
    path("technicians/<int:pk>/", delete_technician, name="delete_technician"),
    path("appointments/<int:pk>/", delete_appointments, name="delete_appointment")
]