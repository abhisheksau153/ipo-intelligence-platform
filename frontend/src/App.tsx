
import './App.css'
import { useEffect, useState } from 'react'

import type { IPO } from './types/ipo'
import { fetchIPOs, refreshIPOs } from './services/ipoService'

import Hero from './Hero/Hero'
import IPOSection from './IPO/IPOSection'

function App() {
  const [ipos, setIpos] = useState<IPO[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function loadIPOs() {
      try {
        await refreshIPOs()

        const returnedIPOs = await fetchIPOs()
        setIpos(returnedIPOs)
      } catch {
        setError('Unable to load IPOs. Please try again later.')
      } finally {
        setIsLoading(false)
      }
    }

    loadIPOs()
  }, [])

  return (
    <div className="app-shell" id="home">

      {/* NAVIGATION */}
      <header className="site-nav">
        <a
          className="brand"
          href="#home"
          aria-label="IPO Intelligence home"
        >
          <span className="brand-icon" aria-hidden="true">
            ♧
          </span>

          <span className="brand-text">
            <span className="brand-name">IPO Intelligence</span>
            <span className="brand-tagline">INVEST WITH INSIGHT</span>
          </span>
        </a>

        <nav className="nav-links" aria-label="Main navigation">
          <a className="nav-link active" href="#home">
            Home
          </a>

          <a className="nav-link" href="#ipos">
            IPOs
          </a>

          <a className="nav-link" href="#compare">
            Compare
          </a>
        </nav>

        <a className="nav-cta" href="#ipos">
          Explore IPOs <span aria-hidden="true">↗</span>
        </a>
      </header>

      {/* MAIN CONTENT */}
      <main>

        {/* HERO COMPONENT */}
        <Hero />

        {/* IPO DISPLAY COMPONENT */}
        <IPOSection
          ipos={ipos}
          isLoading={isLoading}
          error={error}
        />

        {/* FUTURE COMPARE SECTION */}
        <div
          id="compare"
          className="future-section-anchor"
        />

      </main>
    </div>
  )
}

export default App
