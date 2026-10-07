# import requests

# url = "https://www.nseindia.com/api/ipo-current-issue"

# headers = {
#     "User-Agent": "Mozilla/5.0"
# }

# response = requests.get(
#     url,
#     headers=headers,
#     timeout=10
# )

# print(response.status_code)
# print(response.json())



import requests

url = "https://www.nseindia.com/api/ipo-detail?symbol=VNL&series=EQ"

headers = {
    "User-Agent": "Mozilla/5.0"
}

response = requests.get(
    url,
    headers=headers,
    timeout=10
)

print(response.status_code)
print(response.json())