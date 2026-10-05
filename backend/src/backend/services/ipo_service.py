from datetime import datetime,date


import src.backend.repositories.ipo_repository as ipo_repository

def calculate_ipo_status(opening_data, closing_data, today_date):
    # print("opening_data", opening_data)
    # print("closing_data", closing_data)
    # print("today_date", today_date)
    if today_date < opening_data:
        return "upcoming"
    elif today_date > closing_data:
        return "closed"
    else:
        return "open"
    
    
def get_all_ipos():
    today_date = date.today()
    ipos = ipo_repository.fetch_all_ipos()
    for ipo in ipos:
        opening_date = datetime.strptime(ipo["opening_date"], "%Y-%m-%d").date()
        closing_date = datetime.strptime(ipo["closing_date"], "%Y-%m-%d").date()
        status =  calculate_ipo_status(opening_date, closing_date, today_date)
        ipo["status"] = status
    return ipos