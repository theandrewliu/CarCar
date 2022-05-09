# CarCar

Team:

* Andrew Liu - Service
* Jeremy Mao - Sales

## Design

## Service microservice

Explain your models and integration with the inventory
microservice, here.

## Sales microservice

Explain your models and integration with the inventory
microservice, here.

The models for the microservice are simple. There is a model for each type of inventory item, as well as a model for recording sales. 

The microservice integrates with the inventory system via polling. It periodically checks the inventory levels and compares them to the levels that are stored in the microservice. If there are any discrepancies, it updates the microservice accordingly.
