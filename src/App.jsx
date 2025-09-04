import './App.css'
import Card1 from './components/Card1'
import Card2 from './components/Card2'
import Navbar from './components/Navbar'
import About from './components/About'

function App() {

  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <div className="section">
          <div className="container">
             <h1>Profile App</h1>
          </div>
        </div>
        <div className="section" id="about">
          <div className="container">
             <About />
          </div>
        </div>
        <div className="section" id="profiles">
          <div className="container">
             <div className="flex-container">
                <Card1 />
                <Card2 />
              </div>
          </div>
        </div>
      </main>
           
    </>
  )
}

export default App;

