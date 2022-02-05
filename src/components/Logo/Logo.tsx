import logo from "../../images/logo/logo.svg";
import classes from "./Logo.module.scss";

const Logo = () => {
    return (
        <div className={classes.logo}>
            <img className={classes["logo__img"]} src={logo} alt="Logo"/>
        </div>
    )
}

export default Logo;