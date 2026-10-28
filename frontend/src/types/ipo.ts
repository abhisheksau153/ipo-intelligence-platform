export interface IPO {
  id: number
  company_name: string
  symbol: string
  issue_price: string
  issue_size: number
  issue_start_date: string
  issue_end_date: string
  series: string
  source_status: string
  status: string
  created_at: string
  updated_at: string
}

export interface IPOApiResponse {
  ipos: IPO[]
}