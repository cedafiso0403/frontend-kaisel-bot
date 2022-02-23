import { Link } from "react-router-dom";
import "../styles/components/header.css"

function About() {
    return (
        <header>
            <nav className="nav-container">
                <Link to="/" className="navbar-item"><img alt="Kaisel Logo" src="/images/KaiselCircle.png" width="50"></img></Link>
                <ul>
                    <li><Link to="/" className="navbar-item">Home</Link></li>
                    <li><Link to="/About" className="navbar-item">About the bot</Link></li>
                    <li><Link to="/Commands" className="navbar-item">Commands</Link></li>
                    <li><Link to="/Search" className="navbar-item">Search</Link></li>
                    <li><Link to="/Contact" className="navbar-item">Contact Us</Link></li>
                </ul>
            </nav>
            <div className="nav-container">
                <div className="navbar-item-button">
                    <Link to="/Contact" className="navbar-item navbar-item-button">Add to server</Link>
                </div>
            </div>
        </header>
    );
}

export default About;
