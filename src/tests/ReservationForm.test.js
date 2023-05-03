import { render, screen } from "@testing-library/react";
import ReservationForm from "../components/ReservationForm";

test('Renders the ReservationForm heading', () => {
    render(<ReservationForm />);
    const headingElement = screen.getByText("Reserve a Table");
    expect(headingElement).toBeInTheDocument();
});