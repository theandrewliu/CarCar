from common.json import ModelEncoder
from .models import AutomobileVO, SalesPerson, SalesRecord, Customer


class AutomobileVOEncoder(ModelEncoder):
    model = AutomobileVO
    properties = [
        "vin",
        "color",
        "year",
    ]


class CustomerEncoder(ModelEncoder):
    model = Customer
    properties = [
        "name",
        "address",
        "phone",
        "id",
    ]


class SalesPersonEncoder(ModelEncoder):
    model = SalesPerson
    properties = [
        "name",
        "employee_id",
        "id",
    ]



class SalesRecordEncoder(ModelEncoder):
    model = SalesRecord
    properties = [
        "salesperson",
        "customer",
        "automobiles",
        "salesprice",
        "id",
    ]

    encoders = {
        "automobiles": AutomobileVOEncoder(),
        "salesperson": SalesPersonEncoder(),
        "customer": CustomerEncoder(),
    }