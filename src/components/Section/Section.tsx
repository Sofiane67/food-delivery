import { FC } from "react";
import SectionImage from "./SectionImage/SectionImage";
import classes from "./Section.module.scss";
import SectionText from "./SectionText/SectionText";
import H2 from "../Typography/Heading/H2/H2";
import Wrapper from "../layout/Wrapper/Wrapper";

const Section:FC<{
    content:{
        title:string,
        text:string,
        link:{
            url:string,
            name:string
        }
    },
    image:{
        src:string,
        alt:string
    }
    backgroundImage: boolean
}> = ({content, image, backgroundImage}) => {

    const {
        title,
        text,
        link
    } = content;

    const {src, alt} = image;

    let nameClass = classes.section;
    if(backgroundImage) nameClass += ` ${classes["section--bgImg"]}`

    return (
        <section className={nameClass}>
            <Wrapper layout="row">
                <SectionText text={text} link={link}>
                    <H2>{title}</H2>
                </SectionText>
                <SectionImage src={src} alt={alt}/>
            </Wrapper>
        </section>
    )
}

export default Section;