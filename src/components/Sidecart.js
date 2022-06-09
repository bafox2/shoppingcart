import React from "react";
// import styles from "../css/Header.module.css";
import Cartitem from "./Cartitem";
// state of cart stuff might be handled in the APP itself

const Sidecart = (props) => {
    const cartItems = props.cart.map(cartItem => <Cartitem
        item={cartItem.item}
        quantity={cartItem.quantity}
        onCrement={props.onCrement}
    />)
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