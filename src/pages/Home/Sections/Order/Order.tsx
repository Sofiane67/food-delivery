import Section from "../../../../components/Section/Section";
import SectionText from "../../../../components/Section/SectionText/SectionText";
import SectionImage from "../../../../components/Section/SectionImage/SectionImage";
import H2 from "../../../../components/Typography/Heading/H2/H2";
import HighlightWord from "../../../../components/Typography/HighlightWord/HighlightWord";
import friendsImg from "../../../../images/group-friend.png";


const link = {
    url: "/order",
    name:"Order Now"
};
const image = {
    src: friendsImg,
    alt: "illustration section order"
}

const Order = () => {
    return (
        <Section layout="row-reverse" backgroundImage={false} fullWidth={true}>
            <SectionText text="" link={link} backgroundColor={true} colorBtn="white">
                <H2 color="white"><HighlightWord color="darken">Support</HighlightWord> good foodand local business.</H2>
            </SectionText>
            <SectionImage src={image.src} alt={image.alt}/>
        </Section>
    )
}

export default Order;