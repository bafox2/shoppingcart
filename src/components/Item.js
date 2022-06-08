import React, { useEffect, useState } from "react";
import styles from "../css/Item.module.css";
import { Link, use } from "react-router-dom";

//might want to add a category for each individual categorty

const Item = (props) => {

    return (
        <div role='listitem'>
            <Link to={`/shop/${props.name}`} title='itemLink'>{props.name}</Link>
            <p>add {props.name} to cart</p>
            <p>{props.description}</p>
            <p>{props.amount} for</p>
            <p>{props.price}</p>
            <img className={styles.itemPic} alt='item' src={props.picture} />
        </div>
    );
};

export default Item;