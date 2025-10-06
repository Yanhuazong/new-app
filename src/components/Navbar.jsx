import "../styles/Navbar.css";
import { Link } from "react-router-dom";
import ModeContext from "../contexts/ModeContext";
import { useContext } from "react";

const Navbar = () => {
  const { mode, changeMode } = useContext(ModeContext);
  return (
    <nav className="navbar section">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/add-profile">Add a Profile</Link>
        </li>
        <li>
          <Link to="/fetched-profiles">Fetched Profiles</Link>
        </li>
      </ul>
      <button onClick={changeMode}>
        {mode === "dark" ? "Dark Mode" : "Light Mode"}
      </button>
    </nav>
  );
};

export default Navbar;
