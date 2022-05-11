from django.db import models
from django.urls import reverse

# Create your models here.
class AutomobileVO(models.Model):
    vo_vin = models.CharField(max_length=50)

class Technician(models.Model):
    name = models.CharField(max_length=200)
    employee_number = models.CharField(max_length=10, unique=True)

    def get_api_url(self):
        return reverse("api_technician", kwargs={"pk": self.pk})

    def __str__(self):
        return self.name

class Appointment(models.Model):
    vin = models.CharField(max_length=50)
    customer_name = models.CharField(max_length=200)
    starts = models.DateTimeField()
    reason = models.TextField()
    is_vip = models.BooleanField(default=False)
    is_finished = models.BooleanField(default=False)

    technician = models.ForeignKey(
        Technician,
        related_name="technician",
        on_delete=models.PROTECT
    )

    def get_api_url(self):
        return reverse("api_appointment", kwargs={"pk": self.pk})