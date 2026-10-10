from backend.database import get_database_connection



def fetch_all_ipos():
    ipos = [
                { 
            "id": 1,
            "ipo_name": "tata ipo",
            "minimum_investment" : 10000,
            "minimum_shares_size" : 100,
            "issue_size" : 1000000, 
            "opening_date" : "2026-10-06",
            "closing_date" : "2026-10-10",
         },
    ]
    return ipos

def save_ipos(ipos):
    # Placeholder for saving IPOs to the database
    # Implement the logic to save IPOs to the database here
    data_insert = """
    INSERT INTO ipos (
        company_name, 
        symbol,
        series, 
        issue_start_date,
        issue_end_date,
        issue_size,
        issue_price,
        source_status
        )
        
    VALUES (
        %s, %s, %s, %s, %s, %s, %s, %s)"""
    
    conn = get_database_connection()
    
    try:
        with conn.cursor() as cursor:
            for ipo in ipos:
                values = (
                    ipo.get("companyName"),
                    ipo.get("symbol"),
                    ipo.get("series"),
                    ipo.get("issueStartDate"),
                    ipo.get("issueEndDate"),
                    ipo.get("issueSize"),
                    ipo.get("issuePrice"),
                    ipo.get("status")
                )
                cursor.execute(data_insert, values)
            conn.commit()
    except Exception:
        conn.rollback()
        raise
    finally:
        conn.close()