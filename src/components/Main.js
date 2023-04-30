import Hero from "./Hero.js";
import Testimonials from "./Testimonials.js";
import Highlights from "./Highlights.js";
import About from "./About.js";

function Main() {
    const heroParagraph = "Founded in 1987, the Little Lemon restaurant has been serving the people of Portsmouth Street traditional Italian dishes, with recipes crafted and passed down upon 3 generations.";
    return (
        <main>
            <Hero paragraph={ heroParagraph }/>
            <Highlights />
            <Testimonials />
            <About />
        </main>
    )
}

export default Main;