from flask import Flask
import datetime

from src.backend.services.ipo_service import calculate_ipo_status

my_app = Flask(__name__)


@my_app.route('/ipos', methods=['GET'])
def get_ipos():
    # Logic to retrive IPOS from the database or any other source
    ipos = [
        { 
            "id": 1,
            "ipo_name": "tata ipo",
            "minimum_investment" : 10000,
            "minimum_shares_size" : 100,
            "issue_size" : 1000000, 
            "opening_date" : "2026-10-04",
            "closing_date" : "2026-10-10",
         },
    ]
    for ipo in ipos:
        ipo["opening_date"] = datetime.datetime.strptime(ipo["opening_date"], "%Y-%m-%d").date()
        ipo["closing_date"] = datetime.datetime.strptime(ipo["closing_date"], "%Y-%m-%d").date()
        today_date = datetime.date.today()
        status =  calculate_ipo_status(ipo["opening_date"], ipo["closing_date"], today_date)
        ipo["status"] = status
    return {"ipos": ipos}


