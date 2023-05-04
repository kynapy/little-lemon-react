import { useState } from "react";
import { fetchAPI, submitAPI } from "./FetchAPI";
import { useNavigate } from "react-router-dom";

const ReservationForm = props => {
    let [time, setTime] = useState("");
    let [numGuests, setNumGuests] = useState(1);
    let [occasion, setOccasion] = useState("")
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted");
        const success = submitAPI();
        if (success) {
            navigate("/reservation-confirmation");
        }
    }

    return (
        <form
            style={{display:"grid", placeItems: "center", padding: "3vh", backgroundColor: "#495E57"}}
            onSubmit={ handleSubmit }
            id="reservation-form"
        >
            <div style={{padding:"2vw 3vw 3vw 3vw", display: "grid", rowGap: "1vh", backgroundColor: "#EFFFFF", borderRadius: 8}}>
                <p style={{lineHeight:0}}><b>Reserve a Table</b></p>
                <div>
                    <label htmlFor="reservation-date">Choose date: </label>
                    <input required type="date" id="reservation-date" value={ props.date } onChange={e => {
                        props.setDate(e.target.value);
                        props.setAvailableTimes(fetchAPI(new Date(e.target.value)));
                    }}/>
                </div>
                <div>
                    <label required htmlFor="reservation-time">Choose time: </label>
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
                <input aria-label="On Click" type="submit" disabled={ !time && !props.date } value="Submit Reservation"/>
            </div>
        </form>
    )
}

export default ReservationForm;