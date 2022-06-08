import React from "react";
import { Link } from "react-router-dom";
import styles from "../css/Header.module.css";
import Cartitem from "./Item";
// state of cart stuff might be handled in the APP itself

const Sidecart = (props) => {
    console.log(props)
    const cartItems = props.cart.map(item => <Cartitem name={item.name} description={item.quantity} />)
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