import "./css/Nav.css";
import Logo from "./../images/Logo.svg";
import { Route, Routes, Link } from "react-router-dom";
import App from "../App";
import ReservationPage from "./ReservationPage";

function Nav() {
    return (
        <div>
            <nav>
                <ul>
                    <li><img src={ Logo } alt="Little Lemon Logo"></img></li>
                    <li><Link>About</Link></li>
                    <li><Link>Menu</Link></li>
                    <li><Link to="/reservation-page">Reservations</Link></li>
                    <li><Link>Order Online</Link></li>
                    <li><Link>Login</Link></li>
                </ul>
            </nav>
            <Routes>
                <Route path="/reservation-page" element={ <ReservationPage /> } />
            </Routes>
        </div>
    )
}

export default Nav;