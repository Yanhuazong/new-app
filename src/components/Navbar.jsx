import "../styles/Navbar.css";

const Navbar = ({mode, changeMode}) => {
    return (
        <nav className="navbar section">
            <ul>
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#about">About</a>
                </li>
                <li>
                    <a href="#profiles">Profiles</a>
                </li>
            </ul>
            <button onClick={changeMode}>{mode==="dark"?"Dark Mode":"Light Mode"}</button>
        </nav>
    );
}

export default Navbar;