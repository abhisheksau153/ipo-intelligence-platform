
from datetime import datetime


def normalize_ipo_data(ipo):
    """Validate and normalize IPO data received from NSE."""

    required_fields = [
        "companyName",
        "symbol",
        "series",
        "issueStartDate",
        "issueEndDate",
    ]

    for field in required_fields:
        if not ipo.get(field):
            raise ValueError(f"Missing required IPO field: {field}")

    try:
        ipo["issueStartDate"] = datetime.strptime(
            ipo["issueStartDate"], "%d-%b-%Y"
        ).date()

        ipo["issueEndDate"] = datetime.strptime(
            ipo["issueEndDate"], "%d-%b-%Y"
        ).date()

    except (ValueError, TypeError) as error:
        raise ValueError("Invalid IPO issue date format") from error

    issue_size = ipo.get("issueSize")

    if issue_size is not None:
        try:
            ipo["issueSize"] = int(issue_size)
        except (ValueError, TypeError) as error:
            raise ValueError("Invalid IPO issue size") from error

        if ipo["issueSize"] < 0:
            raise ValueError("IPO issue size cannot be negative")

    return ipo
