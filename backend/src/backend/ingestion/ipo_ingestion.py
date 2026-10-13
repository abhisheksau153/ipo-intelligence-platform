

from backend.clients.nse_client import fetch_current_ipos
from backend.normalizers.ipo_normalizer import normalize_ipo_data
from backend.repositories.ipo_repository import save_ipos

def ingest_current_ipos():
    "Ingest current IPOs from NSE and return the filtered data."
    ipos = fetch_current_ipos()
    for ipo in ipos:
        normalize_ipo_data(ipo)
    save_ipos(ipos)
    return ipos

