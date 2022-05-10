import django
import os
import sys
import time
import json
import requests

sys.path.append("")
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "service_project.settings")
django.setup()

# Import models from service_rest, here.
from service_rest.models import AutomobileVO

def poll():
    while True:
        print('Service poller polling for data')
        try:
            # Write your polling logic, here
            url = 'http://inventory-api:8000/api/automobiles/'
            response = requests.get(url)
            content = json.loads(response.content)
            for auto in content["autos"]:
                print(auto)
                AutomobileVO.objects.update_or_create(
                    import_href = auto["href"],
                    color = auto["color"],
                    year = auto["year"],
                    import_vin = auto["vin"]
                )
            print("imported")
        except Exception as e:
            print(e, file=sys.stderr)
        time.sleep(60)


if __name__ == "__main__":
    poll()
