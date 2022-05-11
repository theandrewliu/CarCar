from common.json import ModelEncoder
from .models import AutomobileVO, SalesPerson, SalesRecord, Customer

class AutomobileVODetailEncoder(ModelEncoder):
    model = AutomobileVO
    properties = [
        "vin",
        "color",
        "year",
        "import_name",
        "import_href",
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
        "id",

    ]

    def get_extra_data(self, o):
        return {
            "customer": o.customer.name,
            "vin": o.automobiles.vin,
            "salesprice": o.salesrecord.salesprice,
        }

class CustomerListEncoder(ModelEncoder):
    model = Customer
    properties = [
        "name",
        "address",
        "phone",
        "id",
    ]

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
        "automobiles",
        "salesprice",
        "id",
    ]

    encoders = {
        "automobile": AutomobileVODetailEncoder(),
        "salesperson": SalesPersonDetailEncoder(),
        "customer": CustomerDetailEncoder(),
    }