import { FC } from "react";
import classes from "./HighlightWord.module.scss";

const HighlightWord:FC<{
    color:string
}> = ({children, color}) => {
    let nameClass = classes.highlightWord;
    if(color) nameClass += ` ${classes[`highlightWord--${color}`]}`
    return <span className={nameClass}>{children}</span>
}

export default HighlightWord;