import json

data = json.load(open("src/assets/poster.json"))
coordinates = [d["coordinates"] for d in data["data"]]
avg_x = sum([d[0] for d in coordinates ] ) / len(coordinates)
avg_y = sum([d[1] for d in coordinates]) / len(coordinates)

print("Avg X: {}, Avg Y: []", avg_x, avg_y)
