import "./App.css";
import Navbar from "./components/Navbar";
import { useState } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import AddProfilePage from "./pages/AddProfilePage";
import img1 from "./assets/headshot-man.png";
import img2 from "./assets/headshot-woman.png";

const initialprofiles = [
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
function App() {
  const [mode, setMode] = useState("light");
  const [profiles, setProfiles] = useState(initialprofiles);
  const changeMode = () => {
    setMode(mode === "dark" ? "light" : "dark");
  };
  const addProfiles = (profile) => {
    setProfiles((prev) => [...prev, profile]);
  };
  return (
    <HashRouter>
      <header>
        <Navbar mode={mode} changeMode={changeMode} />
      </header>
      <main className={mode}>
        <Routes>
          <Route path="/" element={<HomePage profiles={profiles} />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/add-profile" element={<AddProfilePage addProfiles={addProfiles} />} />
        </Routes>
      </main>
    </HashRouter>
  );
}

export default App;
