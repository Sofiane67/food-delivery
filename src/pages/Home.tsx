import Hero from "../components/Hero/Hero";
import Wrapper from "../components/layout/Wrapper/Wrapper";
import Section from "../components/Section/Section";
import SectionImage from "../components/Section/SectionImage/SectionImage";
import SectionText from "../components/Section/SectionText/SectionText";
import H1 from "../components/Typography/Heading/H1/H1";
import HighlightWord from "../components/Typography/HighlightWord/HighlightWord";

import heroImage from "../images/img_hero.png";


const Home = () => {

    const texts ={
        hero: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500."
    }
    

    return (
        <>
            <Hero home={true}>
                <Wrapper layout="row">
                    <SectionText text={texts.hero} link={{url:"/order", name:"Place an Order"}}>
                        <H1>Beautiful food & takeaway, <HighlightWord>delivered</HighlightWord> to your door.</H1>
                    </SectionText>
                    <SectionImage image={heroImage} alt="image illustration"/>
                </Wrapper>
            </Hero>
        </>
    )
} 

export default Home;