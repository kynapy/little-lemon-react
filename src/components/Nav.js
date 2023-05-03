import "./css/Nav.css";
import Logo from "./../images/Logo.svg";
import { Link } from "react-router-dom";

function Nav() {
    return (
        <nav>
            <ul>
                <li><Link to="/"><img src={ Logo } alt="Little Lemon Logo"></img></Link></li>
                <li><Link style={{textDecoration: "none", color: "black"}}>About</Link></li>
                <li><Link style={{textDecoration: "none", color: "black"}}>Menu</Link></li>
                <li><Link to="/reservation-page" style={{textDecoration: "none", color: "black"}}>Reservations</Link></li>
                <li><Link style={{textDecoration: "none", color: "black"}}>Order Online</Link></li>
                <li><Link style={{textDecoration: "none", color: "black"}}>Login</Link></li>
            </ul>
        </nav>
    )
}

export default Nav;