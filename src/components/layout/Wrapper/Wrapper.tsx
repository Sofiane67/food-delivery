import { FC } from "react";
import classes from "./Wrapper.module.scss";

const Wrapper:FC<{
    layout:string
}> = ({children, layout}) => {
    let nameClass = classes.wrapper;

    if(layout) nameClass += ` ${classes["wrapper--row"]}`

    return <div className={nameClass}>{children}</div>
}

export default Wrapper