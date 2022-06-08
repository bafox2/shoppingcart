import React, { useEffect, useState } from "react";
import styles from "../css/Item.module.css";
import { Link, use } from "react-router-dom";

//might want to add a category for each individual categorty

const Cartitem = (props) => {

    return (
        <div role='listitem'>
            <Link to={`/shop/${props.name}`} title='itemLink'>{props.name}</Link>
            <p>{props.name}</p>
            <p>{props.quantity}</p>
            <p>{props.price}</p>
            <img className={styles.itemPic} alt='item' src={props.picture} />
        </div>
    );
};

export default Cartitem;