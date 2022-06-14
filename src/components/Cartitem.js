import React from "react";
import styles from "../css/Item.module.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

//might want to add a category for each individual categorty

const Cartitem = (props) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, x: -300 }}
            transition={{ duration: 0.4 }}>
            <div role='listitem'>
                <Link to={`/shop/${props.item.id}`} title='itemLink'>{props.item.name}</Link><span><button onClick={() => props.onRemove(props.item)}>X</button></span>
                <div className={styles.quantityDisplay}><button onClick={() => props.onCrement(props.item, true)}>+</button>
                    <p>{props.quantity}</p>
                    <button onClick={() => props.onCrement(props.item, false)}>-</button></div>
                <p>{props.price}</p>
                <img className={styles.itemPic} alt='picref' src={props.item.imageref} />
            </div>
        </motion.div>
    );
};

export default Cartitem;