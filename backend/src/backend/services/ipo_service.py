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