const About = props => {
    return (
        <div
            style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                padding: "1vh 10vw",
                placeItems: 'center',
            }}
        >
            <div>
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
            <div>
                Image
            </div>
        </div>
    )
}

export default About;