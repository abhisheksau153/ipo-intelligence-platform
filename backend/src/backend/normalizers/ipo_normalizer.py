from datetime import datetime

def normalize_ipo_data(ipo):
    "cleaning/normalizing ipo data "
    ipo['issueStartDate'] = datetime.strptime(ipo['issueStartDate'], '%d-%b-%Y').date()
    ipo["issueEndDate"] = datetime.strptime(ipo['issueEndDate'], '%d-%b-%Y').date()
    ipo["issueSize"] = int(ipo["issueSize"])
    return ipo
