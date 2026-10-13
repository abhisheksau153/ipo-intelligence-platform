from backend.services.ipo_service import get_all_ipos

ipos = get_all_ipos()

print("Number of IPOs:", len(ipos))
print("IPO records:", ipos)