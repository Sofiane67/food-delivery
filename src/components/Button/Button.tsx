import { FC, MouseEvent } from "react";
import classes from "./Button.module.scss";

const Button:FC<{
    type:string,
    onActive: (activeTab:string) => void
}> = ({children, type, onActive}) => {

    let nameCLass = classes.button;

    if(type) nameCLass += ` ${classes[`button--${type}`]}`;

    const activeTabHandler = (e: MouseEvent <HTMLButtonElement>) => {
        if (!(e.target instanceof HTMLButtonElement)) {
            return;
        }
        console.log(e.target.dataset.id);
        onActive("side");
    };

    return <button className={nameCLass} data-id="1" onClick={activeTabHandler}>{children}</button>
}

export default Button