import type { IPO, IPOApiResponse } from '../types/ipo'

const API_BASE_URL = 'http://127.0.0.1:5000'

export async function fetchIPOs(): Promise<IPO[]> {
  const response = await fetch(`${API_BASE_URL}/ipos`)

  if (!response.ok) {
    throw new Error(`Failed to fetch IPOs: ${response.status}`)
  }

  const data: IPOApiResponse = await response.json()

  return data.ipos
}

export async function refreshIPOs(): Promise<void> {
  const response = await fetch(`${API_BASE_URL}/api/ipos/refresh`, {
    method: 'POST',
  })

  if (!response.ok) {
    throw new Error(`Failed to refresh IPOs: ${response.status}`)
  }
}