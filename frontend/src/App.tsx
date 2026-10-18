
import './App.css'

function App() {
  return (
      <section className='dashboard'>  {/* # creates the main dashboard container */}
        <header className="dashboard-header">  {/*# represents the top area of the application */}
          <div>                                 {/* # groups related content. */}
            <h1>IPO Intelligence Platform</h1>  {/* # it is the main page heading */}
            <p>Your IPO market overview</p>   {/*# Display the supporting text */}
            </div>
        </header>

        <main className="dashboard-content ">  {/* # represent the page primary content */}
          <h2> IPO Dashboard</h2>             {/* # introduce the dashboard section */}
          <p>Track upcoming, open, and closed IPOs in one place. </p>
          <div className='summary-cards'>
            <div className='summary-card'>
              <h3>Total IPOs</h3>
              <p>4</p>
            </div>
            <div className='summary-card'>
              <h3>Open IPOs</h3>
              <p>2</p>
            </div>
            <div className='summary-card'>
              <h3>Upcoming IPOs</h3>
              <p>3</p>
            </div>
            <div className='summary-card'>
              <h3>Closed IPOs</h3>
              <p>1</p>
            </div>
          </div>
        </main>
      </section>

  )
}

export default App
