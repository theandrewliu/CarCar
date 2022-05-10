from enum import auto
import django
import os
import sys
import time
import json
import requests

sys.path.append("")
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "sales_project.settings")
django.setup()

# Import models from sales_rest, here.
# from sales_rest.models import Something
from sales_rest.models import AutomobileVO

def poll():
    while True:
        print('Sales poller polling for data')
        try:
            response = requests.get("http://inventory-api:8000/x")
            content = json.loads(response.content)
            for automobile in content["automobile"]:
                AutomobileVO.objects.update_or_create(
                    import_name = automobile["model.name"],
                    defaults = {
                        "color": automobile["color"],
                        "year": automobile["year"],
                        "vin": automobile["vin"],
                    },
                )
        except Exception as e:
            print(e, file=sys.stderr)
        time.sleep(60)


if __name__ == "__main__":
    poll()
