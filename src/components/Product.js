import React, { useEffect, useState } from "react";
import styles from "../css/Item.module.css";
import { Link, useParams, useRoutes } from "react-router-dom";
import allItems from "../itemData/allItems";

//might want to add a category for each individual categorty

const Product = (props) => {
    const { name } = useParams()
    const foundItem = allItems.find(item => item.name = name)

    return (
        <div role='listitem'>
            <p>{name}</p>
            <button onClick={() => props.onSubmit(name)}>buy this</button>
            <p className={styles.description} >{foundItem.description}</p>
            <p className={styles.productImage}>{foundItem.amount} for</p>
            <p>{foundItem.price}</p>
            <img className={styles.itemPic} alt='item' src={foundItem.imageref} />
        </div>
    );
};

export default Product;