import Special from "./Special";
import greekSalad from "./../images/greek salad.jpg";
import bruschetta from "./../images/bruschetta.svg";
import lemonDessert from "./../images/lemon dessert.jpg";

const HighlightSection = props => {
    return (
        <div
            id="highlights"
            style={{
                display: "grid",
                placeItems: "center",
                padding: "3vh 0vw",
            }
            }>
            <div style={{display:"grid", gridTemplateColumns:"1fr 1fr", width:"70vw", paddingBottom: "2vh"}}>
                <div style={{textAlign: "left", lineHeight:0}}>
                    <h2><b>Specials</b></h2>
                </div>
                <div style={{textAlign:"right"}}>
                    <button
                        style={{
                            borderRadius: 6,
                            padding: "10px 18px",
                            backgroundColor: "#F4CE14",
                            border: "0px solid #000000",
                        }}
                    >
                        <b>Online Menu</b>
                    </button>
                </div>
            </div>
            <div style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr",
                columnGap: "6vw",
                width: "75vw"
            }}>
                <Special
                    image={ greekSalad }
                    dishName="Greek salad"
                    price="6.90$"
                    description="Our Greek Salad is made using the freshest vegetables air-flown from the city of Santorini, and garnished with traditional Greek sauces."
                />
                <Special
                    image={ bruschetta }
                    dishName="Bruschetta"
                    price="6.90$"
                    description="The Bruschetta is one of the simplest, yet delectable dishes native to the Italians. Decked with dry aged cheese and pancetta, and garnished with Italian spices."
                />
                <Special
                    image={ lemonDessert }
                    dishName="Lemon dessert"
                    price="6.90$"
                    description="Our Lemon Sorbet is one of the best in the city, and is one to die for. Every customer isn’t leaving completely satisfied with having tried our Lemon Sorbet."
                />
            </div>
        </div>
    )
}

export default HighlightSection;