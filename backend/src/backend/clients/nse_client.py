
import requests

def fetch_current_ipos():

    url = "https://www.nseindia.com/api/ipo-current-issue"
    
    headers = { 
            "User-Agent": "Mozilla/5.0"
            }
    try:   
        response = requests.get(
            url,
            headers=headers,
            timeout=10
        )
        print("NSE client response status code : ", response.status_code)
        print("Content-Type of the response : ", response.headers.get("Content-Type"))
        print("Reponse preview : ", response.text[:500])  # Print the first 500 characters of the response text
        response.raise_for_status()  # Raise an exception for HTTP errors
    
    except requests.exceptions.RequestException as error:
        raise RuntimeError("Failed to fetch the IPO data from NSE") from error
    
    try:
        data = response.json()
    except ValueError as error:
        raise RuntimeError("Failed to parse the IPO data from NSE") from error
    filtered_ipos = []
    for ipo in data:
        filtered_ipo = {
            "companyName": ipo.get("companyName"),
            "symbol": ipo.get("symbol"),
            "series": ipo.get("series"),
            "issueStartDate": ipo.get("issueStartDate"),
            "issueEndDate": ipo.get("issueEndDate"),
            "issueSize": ipo.get("issueSize"),
            "issuePrice": ipo.get("issuePrice"),
            "status": ipo.get("status")
        }
        filtered_ipos.append(filtered_ipo)
    return filtered_ipos




