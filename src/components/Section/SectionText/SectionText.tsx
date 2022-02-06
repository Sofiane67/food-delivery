import { FC } from "react";
import SectionBtn from "../SectionBtn/SectionBtn";
import classes from "./SectionText.module.scss";

const SectionText:FC<{
    text:string,
    link:{
        url:string,
        name:string
    }
}> = ({children, text, link}) => {
    const {url, name} = link;

    return (
        <div className={classes.sectionText}>
            {children}
            <p>{text}</p>
            <SectionBtn url={url} name={name}/>
        </div>
    )
}

export default SectionText;