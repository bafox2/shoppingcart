import React from "react";
import styles from "../css/Item.module.css";
import { Link } from "react-router-dom";

//might want to add a category for each individual categorty

const Cartitem = (props) => {
    return (
        <div role='listitem'>
            <Link to={`/shop/${props.item.id}`} title='itemLink'>{props.name}</Link>
            <div><button onClick={() => props.onCrement(props.item, true)}>+</button>
                <p>{props.quantity}</p>
                <button onClick={() => props.onCrement(props.item, false)}>-</button></div>
            <p>{props.price}</p>
            <img className={styles.itemPic} alt='picref' src={props.pic} />
        </div>
    );
};

export default Cartitem;