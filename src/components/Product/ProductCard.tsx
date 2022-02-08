import { FC, useState } from "react";
import { ProductModel } from "../../models/Product";
import H3 from "../Typography/Heading/H3/H3";
import classes from "./ProductCard.module.scss";

const ProductCard:FC<{
    product:ProductModel
}> = ({product}) => {
    const{
        id,
        category,
        name,
        price,
        image
    } = product;

    const description = product.description.substring(0,100);

    const [inputValue, setInputValue] = useState<number>(1);

    const inputHandler = () => setInputValue(currentState => currentState + 1);


    return (
        <div className={classes.productCard} data-id={id}>
            <div className={classes["productCard__img-box"]}>
                <img className={classes["productCard__img"]} src={image}  alt={`${category} ${name}`}/>
            </div>
            <div className={classes["productCard__text-box"]}>
                <div className={classes["productCard__text-head"]}>
                    <H3>{name}</H3>
                    <span className={classes["productCard__price"]}>$ {price} USD</span>
                </div>
                <div className={classes["productCard__description"]}>{description}...</div>
                <div className={classes["productCard__cta"]}>
                    <input className={classes["productCard__input"]} value={inputValue} type="number" onChange={inputHandler}/>
                    <button className={classes["productCard__btn-cta"]}>Add To Cart</button>
                </div>
            </div>
        </div>
    )
}

export default ProductCard;