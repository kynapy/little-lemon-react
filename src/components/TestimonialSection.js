import Testimonial from "./Testimonial";

const TestimonialSection = props => {
    return (
        <div
            style={{
                backgroundColor: "#495E57",
                display: "grid",
                placeItems: "center",
                padding: "2em 0em",
            }}
        >
            <div>
                <p><b>Testimonials</b></p>
            </div>
            <div style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr 1fr",
                columnGap: "2em"
            }}>
                <Testimonial />
                <Testimonial />
                <Testimonial />
                <Testimonial />
            </div>
        </div>
    )
}

export default TestimonialSection;