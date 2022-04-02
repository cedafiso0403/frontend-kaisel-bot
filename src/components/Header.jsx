import { Link } from "react-router-dom";
import "../styles/components/header.css";
import "../styles/components/mediaquery.css";

function Header() {
    return (
        <header>
            <nav className="nav-container">
                <Link to="/" title="Home_Link"className="navbar-item"><img alt="Kaisel Logo" id="navbar-icon" src="images/KaiselCircle2.png" width="50"></img></Link>
                <ul>
                    <li><Link to="/" className="navbar-item">Home</Link></li>
                    <li><Link to="/Statistics" className="navbar-item">Statistics</Link></li>
                    <li><Link to="/Twitch" className="navbar-item">Twitch</Link></li>
                    <li><Link to="/Contact" className="navbar-item">Contact Us</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
