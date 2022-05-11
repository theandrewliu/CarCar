from django.urls import reverse
from django.db import models


# Create your models here. Jeremy Mao - Sales


class AutomobileVO(models.Model):
    color = models.CharField(max_length=50)
    year = models.PositiveSmallIntegerField()
    vin = models.CharField(max_length=17, unique=True)
    import_name = models.CharField(max_length=200)
    import_href = models.CharField(max_length=200, unique=True)


class SalesPerson(models.Model):
    name = models.CharField(max_length=200)
    employee_id = models.PositiveSmallIntegerField()

    def get_api_url(self):
        return reverse("api_salesperson", kwargs={"pk": self.pk})

    def __str__(self):
        return self.name


class Customer(models.Model):
    name = models.CharField(max_length=200)
    address = models.CharField(max_length=200)
    phone = models.CharField(max_length=200)

    def get_api_url(self):
        return reverse("api_customer", kwargs={"pk": self.pk})

    def __str__(self):
        return self.name


class SalesRecord(models.Model):
    salesprice = models.BigIntegerField()

    automobile = models.ForeignKey(
        AutomobileVO,
        related_name="automobiles",
        on_delete=models.CASCADE,
    )
    salesperson = models.ForeignKey(
        SalesPerson,
        related_name="salesperson",
        on_delete=models.CASCADE,
    )
    customer = models.ForeignKey(
        Customer,
        related_name="customer",
        on_delete=models.CASCADE,
    )

    def get_api_url(self):
        return reverse("api_automobiles", kwargs={"pk": self.pk})

    def __str__(self):
        return self.salesperson
