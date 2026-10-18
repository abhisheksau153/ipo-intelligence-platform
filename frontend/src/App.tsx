
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
        </main>
      </section>

  )
}

export default App
