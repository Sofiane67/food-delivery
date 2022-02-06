import { FC } from "react";
import classes from "./H2.module.scss";

const H2:FC = ({children}) => {
    return <h2 className={classes.h2}>{children}</h2>
}

export default H2;