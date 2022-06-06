import React from "react";
import styles from "../css/Shop.module.css";
import Item from "../components/Item"
import items from "../itemData/allItems.js";

const Shop = (props) => {

    const shoplist = items.map(item => <Item name={item.name} picture={item.imageref} price={item.price} amount={item.amount} category={item.category} role='item' />)

    return (
        <div >
            <h1>shop</h1>
            {shoplist}
        </div>
    );
};

export default Shop;