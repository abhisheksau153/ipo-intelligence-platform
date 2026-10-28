
import './App.css'
import MoneyTree from './MoneyTree'
import { useEffect, useState } from 'react'
import type { IPO } from './types/ipo'
import { fetchIPOs } from './services/ipoService'

function App() {
  const [ipos, setIpos] = useState<IPO[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  useEffect(() => {
    async function loadIPOs() {
      try {
        const returnedIPOs = await fetchIPOs()
        setIpos(returnedIPOs)
      } catch (err) {
        setError("unable to load IPOs. Please try again later.")
      } finally {
        setIsLoading(false)
      }
    }
    loadIPOs()
  }, [])
  return (
    <div className="app-shell" id="home">
      <header className="site-nav">
        <a className="brand" href="#home" aria-label="IPO Intelligence home">
          <span className="brand-icon" aria-hidden="true">♧</span>

          <span className="brand-text">
            <span className="brand-name">IPO Intelligence</span>
            <span className="brand-tagline">INVEST WITH INSIGHT</span>
          </span>
        </a>

        <nav className="nav-links" aria-label="Main navigation">
          <a className="nav-link active" href="#home">Home</a>
          <a className="nav-link" href="#ipos">IPOs</a>
          <a className="nav-link" href="#compare">Compare</a>
        </nav>

        <a className="nav-cta" href="#ipos">
          Explore IPOs <span aria-hidden="true">↗</span>
        </a>
      </header>

      <main>
        <section className="hero-section" aria-labelledby="hero-title">
          <div className="hero-frame">
            <div className="hero-content">
              <div className="hero-eyebrow">
                <span className="status-dot" />
                SMARTER IPO RESEARCH
              </div>

              <h1 id="hero-title">
                IPO Intelligence
                <span className="title-highlight"> Platform</span>
              </h1>

              <p className="hero-subtitle">
                See beyond the listing. Understand the business.
              </p>

              <p className="hero-description">
                Discover opportunities, explore company fundamentals,
                and make more informed investment decisions.
              </p>
            </div>

            <div className="hero-tree">
              <MoneyTree />
            </div>

            <div className="hero-footer">
              <span className="hero-caption">
                <span aria-hidden="true">✦</span>
                Grow your knowledge before you grow your portfolio.
              </span>

              <a className="hero-link" href="#ipos">
                Discover opportunities and knowledge <span aria-hidden="true">↓</span>
              </a>
            </div>
          </div>
        </section>

        <div id="ipos" className="ipo-section">
          <div className='section-heading'>
              <p className='section-eyebrow'> THE IPO MARKET</p>
              <h2>Explore IPOs</h2>
              <p className='section-description'>
                Discover public offerings and explore the companies behind them.
              </p>
          </div>
          {isLoading && <p>Loading IPOs.....</p>}

          {error && <p>{error}</p>}

          {!isLoading && !error && ipos.length ===0 && (
            <p>No IPOs found.</p>
          )}
          {!isLoading && !error && ipos.length >0 && (
            <p>Found {ipos.length}</p>
          )}
          </div>

        <div id="compare" className="future-section-anchor" />
      </main>
    </div>
  )
}

export default App
