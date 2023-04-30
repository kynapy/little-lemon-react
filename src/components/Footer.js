import restaurant from "./../images/restaurant.jpg";
import "./css/Footer.css";

function Footer() {
    return (
        <footer style={{
            display: "grid",
            gridTemplateColumns: "1fr 4fr",
            padding: "2vh 10vw",
            columnGap: "3vw",
            backgroundColor: "#EDEFEE",
        }}>
            <div><img src={ restaurant } style={{maxHeight: "150px"}}/></div>
            <div style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr",
                columnGap: "1vw",
                lineHeight: 0.3,
                fontSize: 14,
            }}>
                <div>
                    <p><b>Navigation</b></p>
                    <p>Home</p>
                    <p>About</p>
                    <p>Menu</p>
                    <p>Reservation</p>
                    <p>Order Online</p>
                    <p>Login</p>
                </div>
                <div>
                    <p><b>Contact</b></p>
                    <p>Address</p>
                    <p>Phone Number</p>
                    <p>Email</p>
                </div>
                <div>
                    <p><b>Social Media</b></p>
                    <p>Instagram</p>
                    <p>Twitter</p>
                    <p>Facebook</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;