const Special = props => {
    return (
        <div
            style={{
                display: "grid",
                backgroundColor:"#EDEFEE",
            }}
        >
            <div
                style={{
                    width: "100%",
                    height: "100px"
                }}
            >
                <img
                    src={ props.image }
                    style={{
                        float: "left",
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                    }}
                />
            </div>
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    fontSize: 12,
                }}
            >
                <div style={{paddingLeft: "10px", textOverflow: "clip", overflow: "hidden"}}>
                    <p><b>{ props.dishName }</b></p>
                </div>
                <div style={{textAlign: "right", color: "#BF0808", paddingRight: "10px"}}>
                    <p><b>{ props.price }</b></p>
                </div>
            </div>
            <div style={{padding: "0px 10px", fontSize: 12, display: "grid"}}>
                <p>{ props.description }</p>
            </div>
            <div style={{display:"grid", placeItems:"center", lineHeight:0}}>
                <p style={{fontSize:11}}><b>Order Now</b></p>
            </div>
        </div>
    )
}

export default Special;