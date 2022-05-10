from django.urls import path
from .views import (
    api_salesperson, 
    list_salesperson, 
    api_customer, 
    list_salesrecord, 
    api_salesrecord
)






urlpatterns = [
    path("salesperson/<int:pk>/", api_salesperson, name="api_salesperson"),
    path("salesperson/", list_salesperson, name="list_salesperson"),
    path('customer/',api_customer, name="api_customer"),
    path('salesrecord/', list_salesrecord, name="list_salesrecord"),
    path('salesrecord/<int:pk>/', api_salesrecord, name="api_salesrecord"),
    path('automobiles/<int:automobiles_vo_id>/sales/', list_salesrecord, name='apilist_salesrecord'),
]
