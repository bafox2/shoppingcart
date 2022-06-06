import React from "react";
import styles from "../css/Item.module.css";
import { Link } from "react-router-dom";

//might want to add a category for each individual categorty

const Item = (props) => {
    return (
        <div role='item'>
            <p>{props.name}</p>
            <p>{props.description}</p>
            <p>{props.amount} for</p>
            <p>{props.price}</p>
            <img alt='item' src={props.picture} />
        </div>
    );
};

export default Item;