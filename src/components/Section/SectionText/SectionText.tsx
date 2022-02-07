import { FC } from "react";
import SectionBtn from "../SectionBtn/SectionBtn";
import classes from "./SectionText.module.scss";

const SectionText:FC<{
    text:string,
    link:{
        url:string,
        name:string
    },
    backgroundColor:boolean,
    colorBtn:string
}> = ({children, text, link, backgroundColor, colorBtn}) => {
    const {url, name} = link;
    let nameClass = classes.sectionText;

    if(backgroundColor) nameClass += ` ${classes["sectionText--bg-blue"]}`;

    return (
        <div className={nameClass}>
            {children}
            <p>{text}</p>
            <SectionBtn url={url} name={name} color={colorBtn}/>
        </div>
    )
}

export default SectionText;