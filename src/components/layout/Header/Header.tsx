import Logo from "../../Logo/Logo";
import Navigation from "../Navigation/Navigation"
import Wrapper from "../Wrapper/Wrapper";
import classes from "./Header.module.scss";

const Header = () => {
    return (
        <header className={classes.header}>
            <Wrapper layout="row" fullWidth={false}>
                <Logo/>
                <Navigation/>
            </Wrapper>
        </header>
    )
}

export default Header;