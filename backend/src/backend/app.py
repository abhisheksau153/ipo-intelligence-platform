
from flask import Flask

from src.backend.services import ipo_service

my_app = Flask(__name__)


@my_app.route('/ipos', methods=['GET'])
def get_ipos():
    ipos = ipo_service.get_all_ipos()
    for ipo in ipos:
        ipo["issue_start_date"] = ipo["issue_start_date"].isoformat()
        ipo["issue_end_date"] = ipo["issue_end_date"].isoformat()
    return {"ipos": ipos}

