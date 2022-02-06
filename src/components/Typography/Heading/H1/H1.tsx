import { FC } from "react";
import classes from "./H1.module.scss";

const H1:FC = ({children}) => {
    return <h1 className={classes.h1}>{children}</h1>
}

export default H1;