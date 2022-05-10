from django.shortcuts import render

from inventory.api.common.json import ModelEncoder
from sales.api.sales_rest.models import AutomobileVO, Customer, SalesPerson, SalesRecord

# Create your views here.

class AutomobileVODetailEncoder(ModelEncoder):
    model = AutomobileVO
    properties = [
        "vin",
        "color",
        "year",
        "model",
    ]


class SalesPersonDetailEncoder(ModelEncoder):
    model = SalesPerson
    properties = [
        "name",
        "employee_id",
    ]


class SalesPersonListEncoder(ModelEncoder):
    model = SalesPerson
    properties = [
        "name",
        "employee_id",
    ]

    def get_extra_data(self, o):
        return {
            "customer": o.customer.name,
            "vin": o.automobiles.vin,
            "salesprice": o.salesrecord.salesprice,
        }

class CustomerDetailEncoder(ModelEncoder):
    model = Customer
    properties = [
        "name",
        "address",
        "phone",
    ]


class SalesRecordDetailEncoder(ModelEncoder):
    model = SalesRecord
    properties = [ 
        "automobile",
        "salesperson",
        "customer",
        "salesprice",
    ]
    encoders = {
        "automobile": AutomobileVODetailEncoder(),
        "salesperson": SalesPersonDetailEncoder(),
        "customer": CustomerDetailEncoder(),
        }

class SalesRecordListEncoder(ModelEncoder):
    model = SalesRecord
    properties = [
        "salesperson",
        "customer",
        "automobile",
    ]
    encoders = {
        "automobile": AutomobileVODetailEncoder(),
        "salesperson": SalesPersonDetailEncoder(),
        "customer": CustomerDetailEncoder(),
    }