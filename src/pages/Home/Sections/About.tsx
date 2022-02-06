import Section from "../../../components/Section/Section";
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
    return <Section  content={content} image={image} backgroundImage={true}/>
}

export default About;