import { EventHandler, MouseEvent, MouseEventHandler, useState } from "react";
import { NavLink } from "react-router-dom";
import Button from "../../../../components/Button/Button";
import Section from "../../../../components/Section/Section"
import H2 from "../../../../components/Typography/Heading/H2/H2";
import classes from "./Menu.module.scss";

const buttons = [
    {
        name: "Burgers",
        category: "burger"
    },
    {
        name: "Sides",
        category: "side"
    },
    {
        name: "Drinks",
        category: "drink"
    }
]

const Menu = () => {
    const [activeTab, setActiveTab] = useState<string>("burger");

    const tabHandler = (e:MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();

        if (!(e.target instanceof HTMLAnchorElement)) {
            return;
        }

        const currentElement = e.target;
        const allTabs = document.querySelectorAll(`.${classes["menu__tab"]}`);
        allTabs.forEach(tab => tab.classList.remove(classes["menu__tab--current"]));
        currentElement.classList.add(classes["menu__tab--current"]);
    }

    return (
        <Section layout="" backgroundImage={true}>
            <H2>Browse our menu</H2>
            <p>Use our menu to place an order online, or <a href="tel:+33601020304">phone</a> our store to
                place a pickup order. Fast and fresh food.</p>
            <div className={classes["menu__tabs"]}>
                {
                    buttons.map((button:{name:string, category:string}, index:number) => {
                        return <NavLink key={index} className={classes["menu__tab"]} to="tab" onClick={tabHandler}>{button.name}</NavLink>
                    })
                }
                <div className={classes["menu__products"]}>

                </div>
            </div>

        </Section>
    )
}

export default Menu;