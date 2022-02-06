import Section from "../../../components/Section/Section";
import SectionText from "../../../components/Section/SectionText/SectionText";
import SectionImage from "../../../components/Section/SectionImage/SectionImage";
import H2 from "../../../components/Typography/Heading/H2/H2";
import aboutImg from "../../../images/img_about.png";


const content = {
    title: "The home of fresh products",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500.",
    link: {
        url: "/company",
        name:"Learn about us"
    },
}


const image = {
        src: aboutImg,
        alt: "illustration section about"
    }

const About = () => {
    return (
        <Section layout="row" backgroundImage={true}>
            <SectionText text={content.text} link={content.link}>
                <H2>{content.title}</H2>
                </SectionText>
                <SectionImage src={image.src} alt={image.alt}/>
        </Section>
    )
}

export default About;