import { useState } from "react";
import ReservationForm from "./ReservationForm";

const ReservationPage = props => {
    let [availableTimes, setAvailableTimes] = useState(
        [
            "17:00",
            "18:00",
            "19:00",
            "20:00",
            "21:00",
            "22:00",
        ]
    )

    return (
        <>
            <ReservationForm availableTimes={ availableTimes } setAvailableTimes={ setAvailableTimes } />
        </>
    )
}

export default ReservationPage;