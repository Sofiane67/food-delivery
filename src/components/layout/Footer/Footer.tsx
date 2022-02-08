import Logo from "../../Logo/Logo";
import Wrapper from "../Wrapper/Wrapper";
import classes from "./Footer.module.scss";
import { navLinks } from "../../../utils/links";
import { Link } from "react-router-dom";
import Icon from "../../Icon/Icon";

const icons = ["icon-twitter-brands", "icon-instagram-brands", "icon-youtube-brands"];

const Footer = () => {
    return (
        <footer className={classes.footer}>
            <Wrapper layout="column" fullWidth={false}>
                <div className={classes["footer__top"]}>
                    <div className={classes["footer__logo-box"]}>
                        <Logo/>
                        <p>Takeaway & Delivery template<br/>for small - medium businesses.</p>
                    </div>
                    <div className={classes["footer__nav-box"]}>
                        <div className={classes["footer__nav"]}>
                            <p className={classes["footer__nav-title"]}>Company</p>
                            {
                                navLinks.map((link:{name:string, path:string}, index:number) => {
                                    return <Link key={index} to={link.path} className={classes["footer__link"]}>{link.name}</Link>
                                })
                            }
                        </div>
                        <div className={classes["footer__nav"]}>
                            <p className={classes["footer__nav-title"]}>Title nav2</p>
                            <Link to="#" className={classes["footer__link"]}>Link</Link>
                            <Link to="#" className={classes["footer__link"]}>Link</Link>
                            <Link to="#" className={classes["footer__link"]}>Link</Link>
                        </div>
                        <div className={classes["footer__nav"]}>
                            <p className={classes["footer__nav-title"]}>Title nav3</p>
                            <Link to="#" className={classes["footer__link"]}>Link</Link>
                        </div>
                    </div>
                </div>
                <div className={classes["footer__bottom"]}>
                    <p className={classes["footer__author"]}>Built by <a href="https://github.com/sofianeAlamri/food-delivery" className={classes["footer__author-link"]}>Sofiane</a> | Template by <a href="https://webflow.com/" className={classes["footer__author-link"]}>Webflow</a></p>
                    <div className={classes["footer__rs"]}>
                        {
                            icons.map((icon:string, index:number) => {
                            return (
                            <span key={index} className={classes["footer__rs-icon"]}>
                                <Icon icon={icon} color=""/>
                            </span>
                            )
                        })    
                        }
                    </div>
                </div>
            </Wrapper>
        </footer>
    )
}

export default Footer;