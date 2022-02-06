import { FC } from "react";
import classes from "./SectionImage.module.scss";

const SectionImage:FC<{
    image:string,
    alt:string
}> = ({image, alt}) => {
    return (
        <div className={classes.sectionImage}>
            <img src={image} alt={alt} className={classes["sectionImage__image"]}/>
        </div>
    )
}

export default SectionImage;