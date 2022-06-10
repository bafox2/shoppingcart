import React from "react";
// import styles from "../css/Shop.module.css";
import Item from "../components/Item"
import Sidebar from "../components/Sidebar";
import items from "../itemData/allItems.js";

const Shop = (props) => {
    console.log(props)

    const filteredList = items.filter(item => item)
    const shoplist = items.map(item => <Item name={item.name} picture={item.imageref} price={item.price} amount={item.amount} category={item.category} key={item.name} id={item.id} role='item' />)

    return (
        <div>
            <h1 title="shopHeader">shop</h1>
            <Sidebar handleChange={props.handleChange} state={props.filters}></Sidebar>
            {shoplist}
        </div>
    );
};

export default Shop;