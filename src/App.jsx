import "./App.css";
import Card1 from "./components/Card1";
import Card2 from "./components/Card2";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import Filters from "./components/Filters";
import img1 from "./assets/headshot-man.png";
import img2 from "./assets/headshot-woman.png";
import { useState } from "react";

function App() {
  const profiles = [
    {
      name: "John Doe",
      title: "Software Engineer",
      email: "john@example.com",
      img: img1,
    },
    {
      name: "Jane Smith",
      title: "Product Manager",
      email: "jane@example.com",
      img: img2,
    },
    {
      name: "Bob Smith",
      title: "UX Designer",
      email: "c@example.com",
      img: img2,
    },
    {
      name: "React Smith",
      title: "UX Designer",
      email: "a@example.com",
      img: img2,
    },
    {
      name: "Ava Doe",
      title: "Software Engineer",
      email: "b@example.com",
      img: img2,
    },
  ];
  const titles = [...new Set(profiles.map(profile => profile.title))]
  const [title, setTitle] = useState("")
  const [search, setSearch] = useState("")
  
  const handleChange = (event) => {
    setTitle(event.target.value)
  }
  const handleSearch = (event) => {
    setSearch(event.target.value)
  }
  const handleClick = () => {
    setTitle("")
    setSearch("")
  }
  const filteredProfiles = profiles.filter(profile => 
    (!title || profile.title===title) && profile.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Wrapper id="header">
          <h1>Profile App</h1>
        </Wrapper>
        <Wrapper id="about">
          <About />
        </Wrapper>
        <Wrapper id="profiles">
          <Filters titles={titles} onChange={handleChange} onSearch={handleSearch} click={handleClick} title={title} search={search}/>
          <div className="flex-container">
            {filteredProfiles.map((profile) => (
              <Card
                key={profile.email}
                name={profile.name}
                title={profile.title}
                email={profile.email}
                img={profile.img}
              />
            ))}
          </div>
        </Wrapper>
      </main>
    </>
  );
}

export default App;
