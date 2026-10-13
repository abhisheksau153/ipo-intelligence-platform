
from backend.repositories.ipo_repository import save_ipos

test_ipos = [
    {
        "companyName": "TEST IPO - DELETE LATER",
        "symbol": "TESTIPO",
        "series": "EQ",
        "issueStartDate": "2026-10-05",
        "issueEndDate": "2026-10-10",
        "issueSize": 100000,
        "issuePrice": "Rs.120",
        "status": "TEST"
    }
]

save_ipos(test_ipos)
print("Upsert test completed")
