import './App.css'
import Card1 from './components/Card1'
import Card2 from './components/Card2'
import Navbar from './components/Navbar'
import About from './components/About'
import Card from './components/Card'
import Wrapper from './components/Wrapper'
import img1 from "./assets/headshot-man.png"
import img2 from "./assets/headshot-woman.png"

function App() {
  const profiles = [
    {name: "John Doe", title: "Software Engineer", email: "john@example.com", img: img1},
    {name: "Jane Smith", title: "Product Manager", email: "jane@example.com", img: img2}
  ]
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Wrapper>
          <h1>Profile App</h1>
        </Wrapper>
        <div className="section">
          <div className="container">
             <About />
          </div>
        </div>
        <div className="section">
          <div className="container">
             <div className="flex-container">
              {
                profiles.map((profile) => (
                  <Card key={profile.email} name={profile.name} title={profile.title} email={profile.email} img={profile.img} />
                ))
              }   
              </div>
          </div>
        </div>
      </main>
           
    </>
  )
}

export default App;

