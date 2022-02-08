import Hero from "./Sections/Hero";
import About from "./Sections/About";
import HowItWorks from "./Sections/HowitWorks/HowItWorks";
import Faq from "./Sections/Faq";
import Contact from "./Sections/Contact";
import Order from "./Sections/Order/Order";
import Menu from "./Sections/Menu/Menu";

const Home = () => {
    return (
        <>
            <Hero/>
            <About/>
            <HowItWorks/>
            <Menu />
            <Faq/>
            <Contact/>
            <Order/>
        </>
    )
} 

export default Home;