import { useState } from "react";

const ReservationForm = props => {
    let [date, setDate] = useState("");
    let [time, setTime] = useState("");
    let [numGuests, setNumGuests] = useState(1);
    let [occasion, setOccasion] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted");
    }

    function initializeTimes() {
        console.log(fetchAPI(new Date(2023, 11, 29)));
    }

    return (
        <form
            style={{display:"grid", placeItems: "center", padding: "3vh", backgroundColor: "#495E57"}}
            onSubmit={ handleSubmit }
        >
            <div style={{padding:"2vw 3vw 3vw 3vw", display: "grid", rowGap: "1vh", backgroundColor: "#EFFFFF", borderRadius: 8}}>
                <p style={{lineHeight:0}}><b>Reserve a Table</b></p>
                <div>
                    <label htmlFor="reservation-date">Choose date: </label>
                    <input type="date" id="reservation-date" value={ date } onChange={ e => setDate(e.target.value) }/>
                </div>
                <div>
                    <label htmlFor="reservation-time">Choose time: </label>
                    <select id="reservation-time" value={ time } onChange={ e => setTime(e.target.value) }>
                        { props.availableTimes.map( time => {
                            return (<option>{ time }</option>)
                        })}
                    </select>
                </div>
                <div>
                    <label htmlFor="numGuests">Number of guests: </label>
                    <input
                        type="number"
                        placeholder="1"
                        min={1}
                        max={10}
                        id="numGuests"
                        value={ numGuests }
                        onChange={ e => setNumGuests(e.target.value) }
                    />
                </div>
                <div>
                    <label htmlFor="occasion" value={ occasion } onChange={ e => setOccasion(e.target.value) }>Occasion: </label>
                    <select id="occasion">
                        <option>Birthday</option>
                        <option>Anniversary</option>
                    </select>
                </div>
                <input type="submit" value="Submit Reservation"/>
            </div>
            <button onClick={initializeTimes}>Test</button>
        </form>
    )
}

export default ReservationForm;