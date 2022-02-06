import { FC } from "react";
import classes from "./H2.module.scss";

const H3: FC = ({ children }) => {
    return <h3 className={classes.h2}>{children}</h3>
}

export default H3;