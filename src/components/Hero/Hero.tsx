import { FC } from "react";
import classes from "./Hero.module.scss";

const Hero:FC<{
    home:boolean
}> = ({children, home}) => {
    let nameClass = classes.hero;

    if(home) nameClass += ` ${classes["hero--home"]}`;
    return <section className={nameClass}>{children}</section>
}

export default Hero;