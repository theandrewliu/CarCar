from django.urls import reverse
from django.db import models



# Create your models here. Jeremy Mao - Sales


class AutomobileVO(models.Model):
    color = models.CharField(max_length=50)
    year = models.PositiveSmallIntegerField()
    vin = models.CharField(max_length=17, unique=True)


class Customer(models.Model):
    name = models.CharField(max_length=200)
    address = models.CharField(max_length=200)
    phone = models.CharField(max_length=200)

    def get_api_url(self):
        return reverse("api_customer", kwargs={"pk": self.id})

    def __str__(self):
        return self.name


class SalesPerson(models.Model):
    name = models.CharField(max_length=200)
    employee_id = models.PositiveSmallIntegerField()

    def get_api_url(self):
        return reverse("api_salesperson", kwargs={"pk": self.id})

    def __str__(self):
        return self.name


class SalesRecord(models.Model):
    salesprice = models.BigIntegerField()

    automobiles = models.ForeignKey(
        AutomobileVO,
        related_name="auto",
        on_delete=models.CASCADE,
        null=True,

    )
    salesperson = models.ForeignKey(
        SalesPerson,
        related_name="salespersons",
        on_delete=models.PROTECT,
        null=True,
    )
    customer = models.ForeignKey(
        Customer,
        related_name="customers",
        on_delete=models.PROTECT,
        null=True,

    )

    def get_api_url(self):
        return reverse("api_salesrecord", kwargs={"pk": self.id})

    def __str__(self):
        return self.salesperson
