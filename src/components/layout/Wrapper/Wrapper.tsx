import { FC } from "react";
import classes from "./Wrapper.module.scss";

const Wrapper:FC<{
    layout:string,
    fullWidth:boolean
}> = ({children, layout, fullWidth}) => {
    let nameClass = classes.wrapper;

    if(layout) nameClass += ` ${classes[`wrapper--${layout}`]}`
    if(fullWidth) nameClass += ` ${classes[`wrapper--fullWidth`]}`

    return <div className={nameClass}>{children}</div>
}

export default Wrapper