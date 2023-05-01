import restaurant from "./../images/restaurant.jpg";
import "./css/Footer.css";

function Footer() {
    return (
        <footer
            id="footer"
            style={{
                display: "grid",
                gridTemplateColumns: "1fr 4fr",
                padding: "2vh 10vw",
                columnGap: "3vw",
                backgroundColor: "#EDEFEE",
            }}
        >
            <div style={{maxHeight: "18vh"}}>
                <img src={ restaurant } style={{ maxHeight: "100%" }}/>
            </div>
            <div style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr",
                columnGap: "1vw",
                lineHeight: 1.5,
                fontSize: 14,
            }}>
                <div>
                    <ul>
                        <li><b>Navigation</b></li>
                        <li>Home</li>
                        <li>About</li>
                        <li>Menu</li>
                        <li>Reservation</li>
                        <li>Order Online</li>
                        <li>Login</li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li><b>Contact</b></li>
                        <li>Address</li>
                        <li>Phone Number</li>
                        <li>Email</li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li><b>Social Media</b></li>
                        <li><a href="https://www.instagram.com">Instagram</a></li>
                        <li><a href="https://www.twitter.com">Twitter</a></li>
                        <li><a href="https://www.facebook.com">Facebook</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer;