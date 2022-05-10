from ast import mod
from django.db import models


# Create your models here. Jeremy Mao - Sales


class AutomobileVO(models.Model):
    color = models.CharField(max_length=50)
    year = models.PositiveSmallIntegerField()
    vin = models.CharField(max_length=17, unique=True)
    import_name = models.CharField(max_length=200)


class SalesPerson(models.Model):
    name = models.CharField(max_length=200)
    employee_id = models.PositiveSmallIntegerField()
    

    def __str__(self):
        return self.name


class Customer(models.Model):
    name = models.CharField(max_length=200)
    address = models.CharField(max_length=200)
    phone = models.CharField(max_length=200)

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
