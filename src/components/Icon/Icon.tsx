import { FC } from "react";
import sprite from "../../images/icon/sprite.svg";
import classes from "./Icon.module.scss";

const Icon:FC<{
    icon:string,
    color: string
}> = ({icon, color}) => {

    let nameClass = classes.icon;
    if(color) nameClass += ` ${classes[`icon--${color}`]}`

    return (
        <svg className={nameClass}>
            <use href={`${sprite}#${icon}`}/>
        </svg>
    )
}

export default Icon;