from datetime import date


import backend.repositories.ipo_repository as ipo_repository

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
        opening_date = ipo["issue_start_date"]
        closing_date = ipo["issue_end_date"]
        status =  calculate_ipo_status(opening_date, closing_date, today_date)
        ipo["status"] = status
    return ipos