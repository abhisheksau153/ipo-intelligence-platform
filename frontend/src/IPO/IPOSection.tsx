
import './IPOSection.css'
import type { IPO } from '../types/ipo'

interface IPOSectionProps {
  ipos: IPO[]
  isLoading: boolean
  error: string | null
}

function formatDate(dateValue: string | null | undefined): string {
  if (!dateValue) {
    return 'Not announced'
  }

  const date = new Date(dateValue)

  if (Number.isNaN(date.getTime())) {
    return 'Not announced'
  }

  return date.toLocaleDateString('en-IN', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  })
}

function IPOSection({ ipos, isLoading, error }: IPOSectionProps) {
  const totalIPOs = ipos.length

  const statusPriority: Record<string, number> = {
    open: 1,
    upcoming: 2,
    closed: 3,
  }

  const sortedIPOs = [...ipos].sort((a, b) => {
    const statusA = a.status?.toLowerCase() ?? ''
    const statusB = b.status?.toLowerCase() ?? ''

    const priorityA = statusPriority[statusA] ?? 4
    const priorityB = statusPriority[statusB] ?? 4

    return priorityA - priorityB
  })

  const openIPOs = ipos.filter(
    (ipo) => ipo.status?.toLowerCase() === 'open',
  ).length

  const upcomingIPOs = ipos.filter(
    (ipo) => ipo.status?.toLowerCase() === 'upcoming',
  ).length

  const closedIPOs = ipos.filter(
    (ipo) => ipo.status?.toLowerCase() === 'closed',
  ).length

  return (
    <section id="ipos" className="ipo-section">
      <div className="section-heading">
        <p className="section-eyebrow">THE IPO MARKET</p>

        <h2>Explore IPOs</h2>

        <p className="section-description">
          Discover public offerings and explore the companies behind them.
        </p>
      </div>

      {isLoading && (
        <p className="ipo-message">Loading IPO data...</p>
      )}

      {error && (
        <p className="ipo-message error-message">{error}</p>
      )}

      {!isLoading && !error && (
        <>
          <div className="ipo-summary-grid">
            <div className="summary-card">
              <span className="summary-label">TOTAL IPOs</span>
              <span className="summary-value">{totalIPOs}</span>
              <span className="summary-note">
                All tracked offerings
              </span>
            </div>

            <div className="summary-card open-summary">
              <span className="summary-label">OPEN IPOs</span>
              <span className="summary-value">{openIPOs}</span>
              <span className="summary-note">
                Currently accepting bids
              </span>
            </div>

            <div className="summary-card upcoming-summary">
              <span className="summary-label">UPCOMING IPOs</span>
              <span className="summary-value">{upcomingIPOs}</span>
              <span className="summary-note">
                Expected to open
              </span>
            </div>

            <div className="summary-card closed-summary">
              <span className="summary-label">CLOSED IPOs</span>
              <span className="summary-value">{closedIPOs}</span>
              <span className="summary-note">
                Bidding has ended
              </span>
            </div>
          </div>

          {sortedIPOs.length === 0 ? (
            <p className="ipo-message">No IPOs found.</p>
          ) : (
            <div className="ipo-grid">
              {sortedIPOs.map((ipo) => {
                const status =
                  ipo.status?.toLowerCase() || 'unknown'

                return (
                  <article className="ipo-card" key={ipo.id}>
                    <div className="ipo-card-header">
                      <div className="ipo-company">
                        <span className="ipo-company-symbol">
                          {ipo.company_name?.charAt(0) || 'I'}
                        </span>

                        <div className="ipo-company-info">
                          <h3>{ipo.company_name}</h3>

                          <p className="ipo-symbol">
                            {ipo.symbol || 'IPO listing'}
                          </p>
                        </div>
                      </div>

                      <span className={`ipo-status ${status}`}>
                        <span className="status-indicator" />
                        {ipo.status || 'Unknown'}
                      </span>
                    </div>

                    <div className="ipo-card-body">
                      <div className="ipo-price-block">
                        <span className="detail-label">
                          ISSUE PRICE
                        </span>

                        <p className="ipo-price">
                          {ipo.issue_price || 'Not announced'}
                        </p>
                      </div>

                      <div className="ipo-details-grid">
                        <div className="ipo-detail">
                          <span className="detail-label">
                            ISSUE SIZE
                          </span>

                          <span className="detail-value">
                            {ipo.issue_size != null &&
                            ipo.issue_size !== 0
                              ? ipo.issue_size.toLocaleString('en-IN')
                              : 'Not announced'}
                          </span>
                        </div>

                        <div className="ipo-detail">
                          <span className="detail-label">
                            OPENING DATE
                          </span>

                          <span className="detail-value">
                            {formatDate(ipo.issue_start_date)}
                          </span>
                        </div>

                        <div className="ipo-detail closing-detail">
                          <span className="detail-label">
                            CLOSING DATE
                          </span>

                          <span className="detail-value">
                            {formatDate(ipo.issue_end_date)}
                          </span>
                        </div>
                      </div>

                      <div className="ipo-card-footer">
                        <span>Explore IPO Intelligence</span>

                        <span
                          className="card-arrow"
                          aria-hidden="true"
                        >
                          ↗
                        </span>
                      </div>
                    </div>
                  </article>
                )
              })}
            </div>
          )}
        </>
      )}
    </section>
  )
}

export default IPOSection
