import React, { useEffect, useState } from "react";
import styles from "../css/Item.module.css";
import { Link, useParams, useRoutes } from "react-router-dom";
import allItems from "../itemData/allItems";

//might want to add a category for each individual categorty

const Product = () => {
    const { name, description, amount, price, imageref } = useParams()
    const foundItem = allItems.find(item => item.name = name)

    return (
        <div role='listitem'>
            {/* {item} */}
            <p>{name}</p>
            <Link to={`/shop/${name}`}>Bbuy</Link>
            <p>{foundItem.description}</p>
            <p>{foundItem.amount} for</p>
            <p>{foundItem.price}</p>
            <img alt='item' src={foundItem.imageref} />
        </div>
    );
};

export default Product;