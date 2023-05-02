import "./css/Nav.css";
import Logo from "./../images/Logo.svg";
import { Route, Routes, Link } from "react-router-dom";
import ReservationPage from "./ReservationPage";

function Nav() {
    return (
        <div>
            <nav>
                <ul>
                    <li><img src={ Logo } alt="Little Lemon Logo"></img></li>
                    <li><Link style={{textDecoration: "none", color: "black"}}>About</Link></li>
                    <li><Link style={{textDecoration: "none", color: "black"}}>Menu</Link></li>
                    <li><Link to="/reservation-page" style={{textDecoration: "none", color: "black"}}>Reservations</Link></li>
                    <li><Link style={{textDecoration: "none", color: "black"}}>Order Online</Link></li>
                    <li><Link style={{textDecoration: "none", color: "black"}}>Login</Link></li>
                </ul>
            </nav>
            <Routes>
                <Route path="/reservation-page" element={ <ReservationPage /> } />
            </Routes>
        </div>
    )
}

export default Nav;