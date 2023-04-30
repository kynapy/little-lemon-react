import heroImage from "./../images/heroImage.jpg";

const HeroSection = props => {
    return (
        <div
            id="hero"
            style={{
                backgroundColor: "#495E57",
                textAlign: "center",
                display: "grid",
                padding: "1vh 15vw 2vh 15vw",
                gridTemplateColumns: "4fr 3fr",
                columnGap: "1vw",
                }}
            >
            <div style={{
                    textAlign: "left",
                }}
            >
                <div style={{lineHeight: 0.3}}>
                    <h2 style={{ color:"#F4CE14" }}>Little Lemon</h2>
                    <h4 style={{ color:"#FFFFFF" }}>Chicago</h4>
                </div>
                <p style={{ color:"#FFFFFF", fontSize: 16, lineHeight: 1.4 }}>{ props.paragraph }</p>
                <button
                    style={{
                        borderRadius: 6,
                        padding: "10px 18px",
                        backgroundColor: "#F4CE14",
                        border: "0px solid #000000",
                    }}
                >
                    Book A Table Now
                </button>
            </div>
            <div style={{placeItems: "center", display:"grid"}}>
                <img
                    src={ heroImage }
                    style={{
                        maxHeight: "18vh",
                        borderRadius: 6,
                    }}
                ></img>
            </div>
        </div>
    )
}

export default HeroSection;