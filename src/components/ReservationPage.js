import { useState } from "react";
import ReservationForm from "./ReservationForm";

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