
from datetime import datetime


def normalize_ipo_data(ipo):
    """Normalize IPO data received from NSE."""

    if ipo.get("issueStartDate"):
        ipo["issueStartDate"] = datetime.strptime(
            ipo["issueStartDate"], "%d-%b-%Y"
        ).date()

    if ipo.get("issueEndDate"):
        ipo["issueEndDate"] = datetime.strptime(
            ipo["issueEndDate"], "%d-%b-%Y"
        ).date()

    issue_size = ipo.get("issueSize")

    if issue_size is not None:
        ipo["issueSize"] = int(issue_size)

    return ipo
