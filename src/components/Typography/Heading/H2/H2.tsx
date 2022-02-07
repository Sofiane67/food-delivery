import { FC } from "react";
import classes from "./H2.module.scss";

const H2:FC<{
    color:string
}> = ({children, color}) => {
    let nameClass = classes.h2;
    if(color) nameClass += ` ${classes[`h2--${color}`]}`
    return <h2 className={nameClass}>{children}</h2>
}

export default H2;