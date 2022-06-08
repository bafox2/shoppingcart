import React, { useEffect, useState } from "react";
import styles from "../css/Item.module.css";
import { Link } from "react-router-dom";

//might want to add a category for each individual categorty

const Cartitem = (props) => {
    console.log(props)
    return (
        <div role='listitem'>
            <Link to={`/shop/${props.id}`} title='itemLink'>{props.name}</Link>
            <p>{props.quantity}</p>
            <p>{props.price}</p>
            <img className={styles.itemPic} alt='picref' src={props.pic} />
        </div>
    );
};

export default Cartitem;