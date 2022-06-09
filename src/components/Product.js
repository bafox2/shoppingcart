import React from "react";
import styles from "../css/Item.module.css";
import { useParams } from "react-router-dom";
import allItems from "../itemData/allItems";

//might want to add a category for each individual categorty

const Product = (props) => {

    const { id } = useParams()
    const foundItem = allItems.find(item => item.id === id)
    console.log(foundItem)

    return (
        <div role='listitem'>
            <p>{'product comp'}</p>
            <button onClick={() => props.onSubmit(foundItem)}>buy this</button>
            <p className={styles.description} >{foundItem.description}</p>
            <p className={styles.productImage}>{foundItem.amount} for</p>
            <p>{foundItem.price}</p>
            <img className={styles.itemPic} alt='item' src={foundItem.imageref} />
        </div>
    );
};

export default Product;