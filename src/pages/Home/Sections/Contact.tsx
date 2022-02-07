import Section from "../../../components/Section/Section";
import SectionText from "../../../components/Section/SectionText/SectionText";
import SectionImage from "../../../components/Section/SectionImage/SectionImage";
import H2 from "../../../components/Typography/Heading/H2/H2";
import contactImg from "../../../images/store-img.png";


const content = {
    title: "Call our store and takeaway when it suits you best.",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500.",
    link: {
        url: "tel:+33601020304",
        name:"(+33)601020304"
    },
}


const image = {
        src: contactImg,
        alt: "illustration section contact"
    }

const Contact = () => {
    return (
        <Section layout="row" backgroundImage={true} fullWidth={false}>
            <SectionText text={content.text} link={content.link} backgroundColor={false} colorBtn="">
                <H2 color="">{content.title}</H2>
            </SectionText>
            <SectionImage src={image.src} alt={image.alt}/>
        </Section>
    )
}

export default Contact;