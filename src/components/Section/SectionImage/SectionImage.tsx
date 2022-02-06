import { FC } from "react";
import classes from "./SectionImage.module.scss";

const SectionImage:FC<{
    src:string,
    alt:string
}> = ({src, alt}) => {
    return (
        <div className={classes.sectionImage}>
            <img src={src} alt={alt} className={classes["sectionImage__image"]}/>
        </div>
    )
}

export default SectionImage;