from django.db import models
from django.urls import reverse

# Create your models here.
class AutomobileVO(models.Model):
    color = models.CharField(max_length=50)
    year = models.PositiveSmallIntegerField()
    import_vin = models.CharField(max_length=17)
    import_href = models.CharField(max_length=200, unique=True)

class Technician(models.Model):
    name = models.CharField(max_length=200)
    employee_number = models.CharField(max_length=10, unique=True)

    def get_api_url(self):
        return reverse("api_technician", kwargs={"pk": self.pk})

    def __str__(self):
        return self.name

class Appointment(models.Model):
    vin = models.CharField(max_length=17, unique=True)
    customer_name = models.CharField(max_length=200)
    date = models.DateField()
    time = models.TimeField()
    reason = models.TextField()

    technician = models.ForeignKey(
        Technician,
        related_name="technician",
        on_delete=models.PROTECT
    )

    automobile = models.ForeignKey(
        AutomobileVO,
        related_name="automobiles",
        on_delete=models.CASCADE
    )

    def get_api_url(self):
        return reverse("api_appointment", kwargs={"pk": self.pk})