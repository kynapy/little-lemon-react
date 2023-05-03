import { useState } from "react";
import ReservationForm from "./ReservationForm";
import { fetchAPI, submitAPI } from "./FetchAPI";

const ReservationPage = props => {
    let [availableTimes, setAvailableTimes] = useState([]);
    let [date, setDate] = useState();

    return (
        <>
            <ReservationForm
                availableTimes={ availableTimes }
                setAvailableTimes={ setAvailableTimes }
                date={ date }
                setDate={ setDate }
            />
        </>
    )
}

export default ReservationPage;