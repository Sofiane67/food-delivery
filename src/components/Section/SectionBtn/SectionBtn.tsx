import { FC } from "react";
import classes from "./SectionBtn.module.scss";

const SectionBtn:FC<{
    url:string,
    name:string
}> = ({url, name}) => {
    return (
        <a className={classes.sectionBtn} href={url}>{name}</a>
    )
}

export default SectionBtn;