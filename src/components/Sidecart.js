import React from "react";
// import styles from "../css/Header.module.css";
import Cartitem from "./Cartitem";
import { AnimatePresence } from "framer-motion";

const Sidecart = (props) => {
    const cartItems = props.cart.map(cartItem => <Cartitem
        item={cartItem.item}
        quantity={cartItem.quantity}
        onCrement={props.onCrement}
        onRemove={props.onRemove}
    />)
    return (
        <div >
            <p>this is your cart</p>
            <ul>
                <AnimatePresence>
                    {cartItems}
                </AnimatePresence>
            </ul>
        </div>
    );
};

export default Sidecart;