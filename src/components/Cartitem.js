import React from "react";
import styles from "../css/Item.module.css";
import { Link } from "react-router-dom";

//might want to add a category for each individual categorty

const Cartitem = (props) => {
    return (
        <div role='listitem'>
            <Link to={`/shop/${props.item.id}`} title='itemLink'>{props.item.name}</Link><span><button onClick={() => props.onRemove(props.item)}>X</button></span>
            <div className={styles.quantityDisplay}><button onClick={() => props.onCrement(props.item, true)}>+</button>
                <p>{props.quantity}</p>
                <button onClick={() => props.onCrement(props.item, false)}>-</button></div>
            <p>{props.price}</p>
            <img className={styles.itemPic} alt='picref' src={props.item.imageref} />
        </div>
    );
};

export default Cartitem;