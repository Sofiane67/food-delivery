import { FC } from "react";
import classes from "./SectionBtn.module.scss";

const SectionBtn:FC<{
    url:string,
    name:string,
    color: string
}> = ({url, name, color}) => {
    let nameClass = classes.sectionBtn;
    if(color) nameClass += ` ${classes[`sectionBtn--${color}`]}`;

    return (
        <a className={nameClass} href={url}>{name}</a>
    )
}

export default SectionBtn;