import "./css/Main.css";
import HeroSection from "./HeroSection.js";
import TestimonialSection from "./TestimonialSection.js";
import HighlightSection from "./HighlightSection.js";
import About from "./About.js";

function Main() {
    const heroParagraph = "Founded in 1987, the Little Lemon restaurant has been serving the people of Portsmouth Street traditional Italian dishes, with recipes crafted and passed down upon 3 generations.";
    return (
        <main>
            <HeroSection paragraph={ heroParagraph }/>
            <HighlightSection />
            <TestimonialSection />
            <About />
        </main>
    )
}

export default Main;