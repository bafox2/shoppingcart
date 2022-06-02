import React from "react";
import styles from "../css/Item.module.css";
import { Link } from "react-router-dom";

const Item = (props) => {
    return (
        <card >
            <Link to={`/${props.category}`}><p>Back to {props.category}</p></Link>
            <h1>{props.name}</h1>
            <p>{props.description}</p>
            <p>{props.amount} for</p>
            <p>{props.price}</p>
            <img alt='item ' href={props.picture} />
        </card>
    );
};

export default Item;