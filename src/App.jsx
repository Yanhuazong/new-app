import "./App.css";
import Navbar from "./components/Navbar";
import { useState, useContext } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import AddProfilePage from "./pages/AddProfilePage";
import NotFound from "./pages/NotFound";
import FetchedProfilesPage from "./pages/FetchedProfilesPage";
import ProfileDetails from "./pages/ProfileDetails";
import ProfilesLayout from "./pages/ProfilesLayout";


function App() {
  const [mode, setMode] = useState("light");
  const changeMode = () => {
    setMode(mode === "dark" ? "light" : "dark");
  };

  return (
    <HashRouter>
      <header>
        <Navbar mode={mode} changeMode={changeMode} />
      </header>
      <main className={mode}>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/add-profile" element={<AddProfilePage />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/fetched-profiles" element={<ProfilesLayout />}>
            <Route index element={<FetchedProfilesPage />} />
            <Route path="profile/:id" element={<ProfileDetails />} />
          </Route>
        </Routes>
      </main>
    </HashRouter>
  );
}

export default App;
