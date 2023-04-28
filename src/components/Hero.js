const Hero = props => {
    return (
        <div
            style={{
                backgroundColor: "#495E57",
                textAlign: "center",
                display: "grid",
                padding: "1rem",
                gridTemplateColumns: "2fr 1fr",
            }}>
            <div>
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>{ props.paragraph }</p>
                <button style={{borderRadius: 8}}>Book A Table Now</button>
            </div>
            <div>
                <p>Image</p>
            </div>
        </div>
    )
}

export default Hero;