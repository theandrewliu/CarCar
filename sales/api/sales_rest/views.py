import json
from django.http import JsonResponse
from django.shortcuts import render
from django.views.decorators.http import require_http_methods
from .models import AutomobileVO, Customer, SalesPerson, SalesRecord
from .encoders import ( 
    AutomobileVO, 
    SalesPersonEncoder, 
    SalesRecordEncoder, 
    CustomerEncoder
)
# Create your views here.



@require_http_methods(['GET', 'DELETE', 'PUT'])
def api_salesperson(request, pk):
    if request.method == "GET":
        try:
            salesperson = SalesPerson.objects.get(id=pk)
            return JsonResponse(
                salesperson,
                encoder=SalesPersonEncoder,
                safe=False
            )
        except SalesPerson.DoesNotExist:
            response = JsonResponse({"message": "It not here."})
            response.status_code = 404
            return response

    elif request.method == "DELETE":
        try:
            salesperson = SalesPerson.objects.get(id=pk)
            salesperson.delete()
            return JsonResponse(
                salesperson,
                encoder=SalesPersonEncoder,
                safe=False,
            )
        except SalesPerson.DoesNotExist:
            return JsonResponse({"message": "This is not the code you're looking for."})
    
    else:
        try:
            content = json.loads(request.body)
            salesperson = SalesPerson.objects.get(id=pk)

            props = ["name", "employee_id"]
            for prop in props:
                if prop in content:
                    setattr(salesperson, prop, content[prop])
            salesperson.save()

            return JsonResponse(
                salesperson,
                encoder=SalesPersonEncoder,
                safe=False,
            )
            
        except SalesPerson.DoesNotExist:
            response = JsonResponse({"message": "You're lost."})
            response.status_code = 404
            return response


@require_http_methods({"GET", "POST"})
def list_salesperson(request):
    if request.method == "GET":
        salesperson = SalesPerson.objects.all()
        return JsonResponse(
            {"salesperson": salesperson},
            encoder = SalesPersonEncoder,
        )
    else:
        try:
            content = json.loads(request.body)
            salesperson = SalesPerson.objects.create(**content)
            return JsonResponse(
                salesperson,
                encoder=SalesPersonEncoder,
                safe=False,
            )

        except:
            response = JsonResponse(
                {"message": "Invalid Address"},
            )
            response.status_code = 400
            return response


@require_http_methods(['GET', 'DELETE', 'PUT'])
def api_customer(request, pk):
    if request.method == "GET":
        try:
            customers = Customer.objects.get(id=pk)
            return JsonResponse(
                customers,
                encoder=CustomerEncoder,
                safe=False
            )
        
        except Customer.DoesNotExist:
            response = JsonResponse({"message": "Who's is this?"})
            response.status_code = 404
            return response
        
    elif request.method == "DELETE":
        try:
            customers = Customer.objects.get(id=pk)
            customers.delete()
            return JsonResponse(
                customers,
                encoder=CustomerEncoder,
                safe=False,
            )

        except Customer.DoesNotExist:
            return JsonResponse({"message": "You're lost."})

    else:
        try:
            content = json.loads(request.body)
            customers = Customer.objects.get(id=pk)

            props = ["name", "address", "phone"]
            for prop in props:
                if prop in content:
                    setattr(customers, prop, content[prop])
            customers.save()

            return JsonResponse(
                customers, 
                encoder=CustomerEncoder,
                safe = False,
            )

        except Customer.DoesNotExist:
            response = JsonResponse({"message": "Look over there!"})
            response.status_code = 404
            return response


@require_http_methods(["GET", "POST"])
def list_customer(request):
    if request.method == "GET":
        customer = Customer.objects.all()
        return JsonResponse(
            {"customer": customer},
            encoder = CustomerEncoder,
        )
    else:
        try:
            content = json.loads(request.body)
            customer = Customer.objects.create(**content)

            return JsonResponse(
            customer,
            endcoder=CustomerEncoder,
            safe=False,
        )
        except:
            response = JsonResponse(
                {"message": "What am I"},
            )
            response.status_code = 400
            return response


@require_http_methods({"GET", "POST"})
def list_salesrecord(request, automobile_vo_id=None):

    if request.method == "GET":
        if automobile_vo_id is not None:
            salesrecord = SalesRecord.objects.filter(automobile=automobile_vo_id)
        else:
            salesrecord = SalesRecord.objects.all()

        return JsonResponse(
            {"salesrecord": salesrecord},
            encoder=SalesRecordEncoder,
        )

    else:
        try:
            content = json.loads(request.body)

            automobile_name = content['automobile']
            automobile = AutomobileVO.objects.get(import_name=automobile_name)
            content["automobile"] = automobile

            salesperson = SalesPerson.objects.get(id=content["salesperson"])
            content["salesperson"] = salesperson

            customer = Customer.objects.get(id=content["customer"])
            content["customer"] = customer

            salesrecords = SalesRecord.objects.create(**content)
            return JsonResponse(
                salesrecords,
                encoder=SalesRecordEncoder,
                safe=False,
        )
        except AutomobileVO.DoesNotExist:
            response = JsonResponse(
                {"message": "Show me some id."},
                status=400,
            )
            response.status_code = 400
            return response


@require_http_methods(['GET', 'DELETE', 'PUT'])
def api_salesrecord(request, pk):
    if request.method == "GET":
        try:
            salesrecord = SalesRecord.objects.get(id=pk)
            return JsonResponse(
                salesrecord,
                encoder=SalesRecordEncoder,
                safe=False,
            )
        
        except SalesRecord.DoesNotExist:
            response = JsonResponse({"message": "You do not exist"})
            response.status_code = 404
            return response

    elif request.method == "DELETE":
        try:
            salesrecord = SalesRecord.objects.get(id=pk)
            salesrecord.delete()
            return JsonResponse(
                salesrecord,
                encoder=SalesRecordEncoder,
                safe=False,
            )
        
        except SalesRecord.DoesNotExist:
            return JsonResponse({"message": "What are you?"})

    else:
        try:
            content = json.loads(request.body)
            salesrecord = SalesRecord.objects.get(id=pk)

            props = [        
                "automobile",
                "salesperson",
                "customer",
                "salesprice",
                ]
            for prop in props:
                if prop in content:
                    setattr(salesrecord, prop, content[prop])
            salesrecord.save()

            return JsonResponse(
                salesrecord,
                encoder=SalesRecordEncoder,
                safe=False,
            )
        
        except SalesRecord.DoesNotExist:
            response = JsonResponse({"message": "Do you want cake?"})
            response.status_code = 404
            return response


