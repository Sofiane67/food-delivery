import { FC } from "react";
import H3 from "../Typography/Heading/H3/H3";
import classes from "./Work.module.scss";

const Work:FC<{
    image:{
        src:string,
        alt:string
    },
    content:{
        title:string,
        text:string
    }
}> = ({image, content}) => {

    const {src, alt} = image;
    const {title, text} = content;

    return (
        <div className={classes.work}>
            <div className={classes["work__img-box"]}>
                <img className={classes["work__img"]} src={src} alt={alt}/>
            </div>
            <div className={classes["work__text-box"]}>
                <H3>{title}</H3>
                <p className={classes["work__text"]}>{text}</p>
            </div>
        </div>
    )
}

export default Work;