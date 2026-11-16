
import './Hero.css'
import MoneyTree from '../MoneyTree'

function Hero() {
  return (
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
            Discover opportunities and knowledge{' '}
            <span aria-hidden="true">↓</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
