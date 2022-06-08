import React from "react";
import { Link } from "react-router-dom";
import styles from "../css/Header.module.css";
import Cartitem from "./Cartitem";
import allItems from "../itemData/allItems";
// state of cart stuff might be handled in the APP itself

const Sidecart = (props) => {
    console.log(props.cart)
    const cartItems = props.cart.map(item => <Cartitem name={item.name} quantity={item.quantity} price={item.price} id={item.id} pic={item.pic} />)
    return (
        <div >
            <p>this is your cart</p>
            <ul>
                {cartItems}
            </ul>
        </div>
    );
};

export default Sidecart;