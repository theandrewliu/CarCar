import json
from django.http import JsonResponse
from django.shortcuts import render
from django.views.decorators.http import require_http_methods
from inventory.api.common.json import ModelEncoder
from sales.api.sales_rest.models import AutomobileVO, Customer, SalesPerson, SalesRecord

# Create your views here.

class AutomobileVODetailEncoder(ModelEncoder):
    model = AutomobileVO
    properties = [
        "vin",
        "color",
        "year",
        "import_name",
    ]

class SalesPersonDetailEncoder(ModelEncoder):
    model = SalesPerson
    properties = [
        "name",
        "employee_id",
    ]

#List a sales person's sales history
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

#Add a potential customer
class CustomerDetailEncoder(ModelEncoder):
    model = Customer
    properties = [
        "name",
        "address",
        "phone",
    ]

#Create a sale record
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

#List all sales
class SalesRecordListEncoder(ModelEncoder):
    model = SalesRecord
    properties = [
        "salesperson",
        "customer",
        "automobile",
        "salesprice",
    ]

    encoders = {
        "automobile": AutomobileVODetailEncoder(),
        "salesperson": SalesPersonDetailEncoder(),
        "customer": CustomerDetailEncoder(),
    }


@require_http_methods(['GET', 'DELETE', 'PUT'])
def api_salesperson(request, pk):
    if request.method == "GET":
        try:
            sales_person = SalesPerson.objects.get(id=pk)
            return JsonResponse(
                sales_person,
                encoder=SalesPersonDetailEncoder,
                safe=False
            )
        except SalesPerson.DoesNotExist:
            response = JsonResponse({"message": "It not here."})
            response.status_code = 404
            return response

    elif request.method == "Delete":
        try:
            sales_person = SalesPerson.objects.get(id=pk)
            sales_person.delete()
            return JsonResponse(
                sales_person,
                encoder=SalesPersonDetailEncoder,
                safe=False,
            )
        except SalesPerson.DoesNotExist:
            return JsonResponse({"message": "This is not the code you're looking for."})
    
    else:
        try:
            content = json.loads(request.body)
            sales_person = SalesPerson.objects.get(id=pk)

            props = ["name", "employee_id"]
            for prop in props:
                if prop in content:
                    setattr(sales_person, prop, content[prop])
            sales_person.save()

            return JsonResponse(
                sales_person,
                encoder=SalesPersonDetailEncoder,
                safe=False,
            )
            
        except SalesPerson.DoesNotExist:
            response = JsonResponse({"message": "You're lost."})
            response.status_code = 404
            return response