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

from backend.ingestion.ipo_ingestion import ingest_current_ipos
from backend.clients.nse_client import fetch_current_ipos
from backend.repositories.ipo_repository import save_ipos

raw_ipo = fetch_current_ipos()
print("NSE client output : ", raw_ipo)

ipos = ingest_current_ipos()
print("Ingested IPOs : ", ipos)

save_ipos(ipos)
print("IPOs saved to the database successfully")


# from backend.database import get_database_connection

# conn = get_database_connection()
# print(conn)
# conn.close()