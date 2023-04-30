import Special from "./Special";

const HighlightSection = props => {
    return (
        <div style={{
            display: "grid",
            placeItems: "center",
            padding: "2vh 0vw",
        }}>
            <div>
                <p><b>Specials</b></p>
            </div>
            <div style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr",
                columnGap: "4em",
            }}>
                <Special />
                <Special />
                <Special />
            </div>
        </div>
    )
}

export default HighlightSection;