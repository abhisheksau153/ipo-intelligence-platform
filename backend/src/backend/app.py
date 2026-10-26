
from flask import Flask
from backend.services import ipo_service
from backend.ingestion.ipo_ingestion import ingest_current_ipos


my_app = Flask(__name__)

@my_app.route('/ipos', methods=['GET'])
def get_ipos():
    ipos = ipo_service.get_all_ipos()
    for ipo in ipos:
        ipo["issue_start_date"] = ipo["issue_start_date"].isoformat()
        ipo["issue_end_date"] = ipo["issue_end_date"].isoformat()
    return {"ipos": ipos}

@my_app.route('/api/ipos/refresh', methods=['POST'])
def refresh_ipos():
    try:
        ingested_ipos=ingest_current_ipos()
        
        if not ingested_ipos:
            return {
                "message": "Refresh completed , but NO IPO records were returned by NSE",
                "records_processed": 0
            },200
            
        return {
            "message" : "IPO data refreshed successfully",
            "records_processed": len(ingested_ipos)
        }, 200
    except RuntimeError as error:
        return {
            "message": "IPO data refresed Failed",
            "error": str(error)
        }, 500
        
    except Exception:
        my_app.logger.exception("Unexpected error during IPO refresh")
        
        return{
            "message": "IPO data refresh failed",
            "error": "An internal server error occured"
        }, 500

