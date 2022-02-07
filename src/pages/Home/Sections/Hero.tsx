import Container from "../../../components/Hero/Hero";
import Wrapper from "../../../components/layout/Wrapper/Wrapper";
import SectionText from "../../../components/Section/SectionText/SectionText";
import SectionImage from "../../../components/Section/SectionImage/SectionImage";
import H1 from "../../../components/Typography/Heading/H1/H1";
import HighlightWord from "../../../components/Typography/HighlightWord/HighlightWord";
import heroImage from "../../../images/img_hero.png";

const text = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500.";

const Hero = () => {
    return (
        <Container home={true}>
        <Wrapper layout="row" fullWidth={false}>
            <SectionText text={text} link={{url:"/order", name:"Place an Order"}} backgroundColor={false} colorBtn="">
                <H1>Beautiful food & takeaway, <HighlightWord color="">delivered</HighlightWord> to your door.</H1>
            </SectionText>
            <SectionImage src={heroImage} alt="image illustration"/>
        </Wrapper>
    </Container>
    )
}

export default Hero;