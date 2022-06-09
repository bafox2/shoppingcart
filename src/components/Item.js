import React from "react";
import styles from "../css/Item.module.css";
import { Link, } from "react-router-dom";

//might want to add a category for each individual categorty

const Item = (props) => {
    return (
        <div role='listitem'>
            <Link to={`/shop/${props.id}`} title='itemLink'>{props.name}</Link>
            <p>add item {props.name} to cart</p>
            <p>{props.description}</p>
            <p>{props.amount} for</p>
            <p>{props.price}</p>
            <img className={styles.itemPic} alt='item' src={props.picture} />
        </div>
    );
};

export default Item;