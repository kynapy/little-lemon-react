import "./css/Nav.css";
import Logo from "./../images/Logo.svg";

function Nav() {
    return (
        <nav>
            <ul>
                <li><img src={Logo}></img></li>
                <li>About</li>
                <li>Menu</li>
                <li>Reservations</li>
                <li>Order Online</li>
                <li>Login</li>
            </ul>
        </nav>
    )
}

export default Nav;