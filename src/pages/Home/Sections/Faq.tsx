import Section from "../../../components/Section/Section";
import SectionText from "../../../components/Section/SectionText/SectionText";
import SectionImage from "../../../components/Section/SectionImage/SectionImage";
import H2 from "../../../components/Typography/Heading/H2/H2";
import faqImg from "../../../images/phone-img.png";


const content = {
    title: "Order online with our simple checkout.",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500.",
    link: {
        url: "/faq",
        name:"See our FAQ"
    },
}


const image = {
        src: faqImg,
        alt: "illustration section faq"
    }

const Faq = () => {
    return (
        <Section layout="row-reverse" backgroundImage={false} fullWidth={false}>
            <SectionText text={content.text} link={content.link} backgroundColor={false} colorBtn="">
                <H2 color="">{content.title}</H2>
            </SectionText>
            <SectionImage src={image.src} alt={image.alt}/>
        </Section>
    )
}

export default Faq;