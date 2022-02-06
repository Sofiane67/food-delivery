import { FC } from "react";
import classes from "./HighlightWord.module.scss";

const HighlightWord:FC = ({children}) => {
    return <span className={classes.highlightWord}>{children}</span>
}

export default HighlightWord;