import { FC } from "react";
import SectionImage from "./SectionImage/SectionImage";
import classes from "./Section.module.scss";

const Section:FC<{
    image:string,
    alt:string,
    backgroundImage: boolean
}> = ({children, image, alt}) => {
    return (
        <section className={classes.section}>
            {children}
            <SectionImage image={image} alt={alt}/>
        </section>
    )
}

export default Section;