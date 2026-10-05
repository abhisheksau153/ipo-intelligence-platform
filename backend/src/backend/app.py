
from flask import Flask

from src.backend.services import ipo_service

my_app = Flask(__name__)


@my_app.route('/ipos', methods=['GET'])
def get_ipos():
    ipos = ipo_service.get_all_ipos()
    return {"ipos": ipos}


