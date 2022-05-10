from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods

from .models import AutomobileVO, Technician, Appointment
from common.json import ModelEncoder,DateEncoder
import json

# Create your views here.
class AutomobileVOEncoder(ModelEncoder):
    model = AutomobileVO
    properties = ["vo_vin"]

class TechnicianEncoder(ModelEncoder):
    model = Technician
    properties = [
        "id",
        "name",
        "employee_number"
    ]

class AppointmentDetailEncoder(ModelEncoder):
    model = Appointment
    properties = [
        "vin",
        "customer_name",
        "starts",
        "reason",
        "is_vip"
    ]
    encoders = {
        "technician": TechnicianEncoder(),
    }

    def get_extra_data(self, o):
        return {"technician": o.technician.name}

@require_http_methods(["GET","POST"])
def list_technicians(request):
    if request.method == "GET":
        technicians = Technician.objects.all()
        return JsonResponse(
            {"technicians": technicians},
            encoder=TechnicianEncoder,
        )
    else:
        content = json.loads(request.body)
        technician = Technician.objects.create(**content)
        return JsonResponse(
            technician,
            encoder=TechnicianEncoder,
            safe=False,
        )

@require_http_methods(["GET","POST"])
def list_appointments(request):
    if request.method == "GET":
        appointments = Appointment.objects.all()
        return JsonResponse(
            {"appointments": appointments},
            encoder=AppointmentDetailEncoder,
            safe=False
        )
    else:
        content = json.loads(request.body)

        technician = Technician.objects.get(id=content["technician"])
        content["technician"] = technician
        try:
            import_vin = AutomobileVO.objects.get(vo_vin=content["vin"])
            content["is_vip"] = True
        except AutomobileVO.DoesNotExist:
            content["is_vip"] = False
            # return JsonResponse(
            #     {"message": "Invalid automobile"},
            #     status = 400,
            # )

        appointment = Appointment.objects.create(**content)
        return JsonResponse(
            appointment,
            encoder=AppointmentDetailEncoder,
            safe=False
        )