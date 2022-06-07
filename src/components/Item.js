import React, { useEffect, useState } from "react";
import styles from "../css/Item.module.css";
import { Link, use } from "react-router-dom";

//might want to add a category for each individual categorty

const Item = (props) => {

    return (
        <div role='listitem'>
            {/* {item} */}
            <p>{props.name}</p>
            <Link to={`/shop/${props.name}`}>Bbuy</Link>
            <p>{props.description}</p>
            <p>{props.amount} for</p>
            <p>{props.price}</p>
            <img alt='item' src={props.picture} />
        </div>
    );
};

export default Item;