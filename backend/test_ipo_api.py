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



# import requests

# url = "https://www.nseindia.com/api/ipo-detail?symbol=VNL&series=EQ"

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
# from src.backend.clients.nse_client import fetch_current_ipos

# ipos = fetch_current_ipos()

# print(ipos)

# 

from datetime import date
from backend.repositories.ipo_repository import save_ipos

test_ipos = [
    {
        "companyName": "TEST IPO - DELETE LATER",
        "symbol": "TESTIPO",
        "series": "EQ",
        "issueStartDate": date(2026, 10, 5),
        "issueEndDate": date(2026, 10, 10),
        "issueSize": 100000,
        "issuePrice": "Rs.100-110",
        "status": "TEST"
    }
]

save_ipos(test_ipos)
print("Test record submitted to PostgreSQL")

# from backend.database import get_database_connection

# conn = get_database_connection()
# print(conn)
# conn.close()