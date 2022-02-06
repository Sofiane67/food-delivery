import { FC } from "react";
import classes from "./Section.module.scss";
import Wrapper from "../layout/Wrapper/Wrapper";

const Section:FC<{
    layout:string
    backgroundImage: boolean
}> = ({children,layout,backgroundImage}) => {

    let nameClass = classes.section;
    if(backgroundImage) nameClass += ` ${classes["section--bgImg"]}`

    return (
        <section className={nameClass}>
            <Wrapper layout={layout}>
                {children}
            </Wrapper>
        </section>
    )
}

export default Section;