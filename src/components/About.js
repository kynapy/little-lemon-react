const About = props => {
    return (
        <div
            id="about-section"
            style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                padding: "4vh 15vw",
                placeItems: 'center',
            }}
        >
            <div style={{lineHeight: 1}}>
                <p style={{fontSize: 26, lineHeight: 0}}><b>Little Lemon</b></p>
                <p style={{fontSize: 20, lineHeight: 0.3}}>Chicago</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
            <div>
                Image
            </div>
        </div>
    )
}

export default About;