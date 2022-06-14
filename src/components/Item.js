import React from "react";
import styles from "../css/Item.module.css";
import { Link, } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion"
//might want to add a category for each individual categorty

const Item = (props) => {
    return (
        <motion.div initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, x: -300 }}
            transition={{ duration: 0.4 }}>
            <div role='listitem'>
                <Link to={`/shop/${props.id}`} title='itemLink'>{props.name}</Link>
                <p>add item {props.name} to cart</p>
                <p>{props.description}</p>
                <p>{props.amount} {props.unit} for ${props.price}</p>
                <img className={styles.itemPic} alt='item' src={props.picture} />
            </div>
        </motion.div>
    );
};

export default Item;