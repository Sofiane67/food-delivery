import { NavLink } from "react-router-dom";
import Icon from "../../Icon/Icon";
import { headerLinks } from "../../../utils/links";
import classes from "./Navigation.module.scss";

const Navigation = () => {
    return (
        <nav className={classes.nav}>
            <ul className={classes["nav__list"]}>
                {
                    headerLinks.map((link:{name:string, path: string}, index:number) => {
                        return (
                            <li className={classes["nav__list-item"]} key={index}>
                                <NavLink className={(navData) => (navData.isActive ? `${classes["nav__link"]} ${classes["nav__link--active"]}` : classes["nav__link"])} to={link.path}>{link.name}</NavLink>
                            </li>
                        )
                    })
                }
            </ul>
            <button className={classes["nav__button-cart"]}>
                <Icon icon="icon-cart" color="white"/>
            </button>
        </nav>
    )
}

export default Navigation;