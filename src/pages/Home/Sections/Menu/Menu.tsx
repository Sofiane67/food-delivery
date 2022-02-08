import { MouseEvent, useEffect, useState } from "react";
import Section from "../../../../components/Section/Section"
import H2 from "../../../../components/Typography/Heading/H2/H2";
import classes from "./Menu.module.scss";
import { products } from "../../../../utils/products";
import { ProductModel } from "../../../../models/Product";
import ProductCard from "../../../../components/Product/ProductCard";

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
    const [currentProducts, setCurrentProducts] = useState<ProductModel[]>([]);

    const tabHandler = (e:MouseEvent<HTMLButtonElement>) => {
        if (!(e.target instanceof HTMLButtonElement)) {
            return;
        }

        const currentElement = e.target;
        const allTabs = document.querySelectorAll(`.${classes["menu__tab"]}`);
        allTabs.forEach(tab => tab.classList.remove(classes["menu__tab--current"]));
        currentElement.classList.add(classes["menu__tab--current"]);
       
        if (currentElement.dataset.category) {
            const category = currentElement.dataset.category;
            setActiveTab(category);
        }
        
    }

    useEffect(() => {
        const filtredProduct = products.filter((product:ProductModel) =>  product.category === activeTab);
        setCurrentProducts(filtredProduct);
        
    },[activeTab])

    return (
        <Section layout="" backgroundImage={true} fullWidth={false}>
            <H2 color="">Browse our menu</H2>
            <p>Use our menu to place an order online, or <a href="tel:+33601020304">phone</a> our store to
                place a pickup order. Fast and fresh food.</p>
            <div className={classes["menu__products"]}>
                <div className={classes["menu__tabs"]}>
                    {
                        buttons.map((button:{name:string, category:string}, index:number) => {
                            let nameClass = classes["menu__tab"];
                            if (button.category === "burger") nameClass += ` ${classes["menu__tab--current"]}`
                            return <button key={index} className={nameClass}  onClick={tabHandler} data-category={button.category}>{button.name}</button>
                        })
                    }
                </div>
                <div className={classes["menu__products-list"]}>
                    {
                        currentProducts.map((product:ProductModel, index:number) => <ProductCard key={index} product={product}/>)
                    }
                </div>
            </div>

        </Section>
    )
}

export default Menu;