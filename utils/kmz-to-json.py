from os import name
from zipfile import ZipFile
import xml.etree.ElementTree as ET
import json
import urllib.request



poster = ""
kml_url = "https://www.google.com/maps/d/u/2/kml?mid=11qaeNSRlQ12Nr1DS5lAHV1buYH4AqcZE&lid=5DOozszvnxU"
response, _ = urllib.request.urlretrieve(kml_url)
with ZipFile(response) as zposter:
  with zposter.open("doc.kml") as poster_file:
    poster = poster_file.read()


root = ET.fromstring(poster)

ns ={"gis": "http://www.opengis.net/kml/2.2"}

data = []

def get_field(elm, query):
  elm_text = elm.find(query, namespaces=ns).text
  return elm_text.strip() if elm_text else ""

for placemark in root.iterfind("./gis:Document/gis:Placemark", namespaces=ns):
  name = get_field(placemark, "gis:name")
  coordinates = get_field(placemark, "./gis:Point/gis:coordinates")
  description = get_field(placemark, "./gis:ExtendedData/gis:Data[@name='beskrivelse']/gis:value")
  opens = get_field(placemark, "./gis:ExtendedData/gis:Data[@name='åbner']/gis:value")
  closes = get_field(placemark, "./gis:ExtendedData/gis:Data[@name='lukker']/gis:value")

  coordinate_y, coordinate_x, _ = coordinates.split(",")

  if opens:
    opens = int(opens, base=10)

  if closes:
    closes = int(closes, base=10)

  data_elm = {
    "name": name,
    "coordinates": (float(coordinate_x), float(coordinate_y)),
    "description": description,
    "opens": opens,
    "closes": closes
  }

  data.append(data_elm)

print(json.dumps({"data": data}))
