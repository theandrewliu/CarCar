from common.json import ModelEncoder
from .models import AutomobileVO, SalesPerson, SalesRecord, Customer


class AutomobileVOEncoder(ModelEncoder):
    model = AutomobileVO
    properties = [
        "vin",
        "color",
        "year",
        "import_name",
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
    def get_extra_data(self, o):
        return {
            "customer": o.customer.name,
            "automobiles": o.automobiles.vin,
            "salesrecord": o.salesrecord.salesprice,
            }


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
        "automobile": AutomobileVOEncoder(),
        "salesperson": SalesPersonEncoder(),
        "customer": CustomerEncoder(),
    }